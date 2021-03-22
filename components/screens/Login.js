import React from 'react';
import { Button,StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native';
import bgImage from '../images/loginbackground.jpg';
import logo from '../images/reactlogo.png';
import * as Linking from 'expo-linking';
import AsyncStorage from '@react-native-community/async-storage';
import * as AppAuth from 'expo-app-auth';

const prefix = Linking.makeUrl('/');
const testUser = {username:"admin", password:"admin"};
const { width: WIDTH } = Dimensions.get('window');


let config = {
  issuer: 'https://accounts.google.com',
  scopes: ['openid', 'profile'],
  clientId: '603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com',
};

let StorageKey = '@e-commerce-app:CustomGoogleOAuthKey';

export async function signInAsync(navigation) {
  let authState = await AppAuth.authAsync(config);
  await cacheAuthAsync(authState);
  navigation.navigate('Menu')
  return authState;
}

async function cacheAuthAsync(authState) {
  return await AsyncStorage.setItem(StorageKey, JSON.stringify(authState));
}

export async function getCachedAuthAsync(navigation) {
  let value = await AsyncStorage.getItem(StorageKey);
  let authState = JSON.parse(value);
  if (authState) {
    navigation.navigate('Menu');
    if (checkIfTokenExpired(authState)) {
      return refreshAuthAsync(authState);
    } else {
      return authState;
    }
  }
  return null;
}

function checkIfTokenExpired({ accessTokenExpirationDate }) {
  return new Date(accessTokenExpirationDate) < new Date();
}

async function refreshAuthAsync({ refreshToken }) {
  let authState = await AppAuth.refreshAsync(config, refreshToken);
  await cacheAuthAsync(authState);
  return authState;
}


export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {username:'',
                  password:'',
                  authState: null
                }
  }

  componentDidMount() {
    this._isMounted=true;
    async () => {
      let cachedAuth = await getCachedAuthAsync();
      if (cachedAuth && ! this.state.authState) {
        if(this._isMounted) {
          this.setState({ authState: cachedAuth });
        }
      }
    };
  };

  componentWillUnmount() {
    this._isMounted = false;
 }

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style = {styles.logo} />
          <Text style={styles.titleText}>COMMERCE APP</Text>
        </View>

        <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder={'Username'}
            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
            onChangeText={(username)=>this.setState({username})}
            value={this.state.username}
          />
        </View>
        <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
            onChangeText={(password)=>this.setState({password})}
            value={this.state.password}
            secureTextEntry={true}
          />
        </View>
          
          <TouchableOpacity
            style={styles.button} 
            onPress={this._signin}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <Button
            title="Sign In with Google"
            onPress={async() => {
              let _authState = this.authState;
              if(!_authState) _authState = await signInAsync(this.props.navigation);
              if(this._isMounted) this.setState({ authState:_authState })
            }}
          />
      </ImageBackground>
    );
  }
  _signin = async () => {
    if(this.state.username===testUser.username && this.state.password===testUser.password) {
      this.props.navigation.navigate('Menu')
    } else {
      alert("Incorrect username or password!")
    }
  }

}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,

    alignItems: 'center'
  },
  logoContainer: {
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 200
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 20
  },
  input: {
    width: WIDTH - 60,
    height: 50,
    borderRadius: 20,
    fontSize: 18,
    paddingLeft: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'rgba(255, 255, 255, 0.8)',
    marginHorizontal: 20,
  },
  button: {
    width: WIDTH - 60,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 15
  },
  loginText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16, 
    textAlign: 'center'
  }
});
