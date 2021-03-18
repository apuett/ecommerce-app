import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native';
import bgImage from '../images/loginbackground.jpg';
import logo from '../images/reactlogo.png';
import * as LocalAuthentication from 'expo-local-authentication';
import { Button } from 'react-native';

const testUser = {username:"admin", password:"admin"};
const { width: WIDTH } = Dimensions.get('window');

export default class LoginScreen extends React.Component {

  onFaceId = async () => {
    try{
      //check if device is compatible
      const isCompatible = await LocalAuthentication.hasHardwareAsync();

      if (!isCompatible){
        throw new Error('Your device isn\'t compatible.')
      }

      //checking if device has biometrics records
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      if (!isEnrolled){
        throw new Error('No Faces / Fingers found.')
      }

      await LocalAuthentication.authenticateAsync();

      alert('Authenticated', 'Welcome back !')
      this.props.navigation.navigate('Menu')
    } catch (error){
      alert('An error has occured', error?.message);
    }
  };

  constructor(props) {
    super(props);
    this.state = {username:'', password:''}
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
          <Button title='Face/Touch id' onPress={this.onFaceId}></Button>
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
