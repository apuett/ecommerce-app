import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

const testUser = {username:"admin", password:"admin"}

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username:'', password:''}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>
      
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(username)=>this.setState({username})}
          value={this.state.username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(password)=>this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}
        />
        
        <TouchableOpacity
          style={styles.button} 
          onPress={this._signin}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
  _signin = async () => {
    if(this.state.username===testUser.username && this.state.password===testUser.password) {
      await AsyncStorage.setItem('logged', true);
      this.props.navigation.navigate('App');
    } else {
      alert("Incorrect username or password!")
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4baac9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#000'
  },
  input: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10
  },
  button: {
    backgroundColor: "#fff", 
    padding: 15,
    width: "45%"
  }
});
