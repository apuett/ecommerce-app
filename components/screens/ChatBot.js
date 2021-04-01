import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import NavBar from '../NavBar';

class ChatBot extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ChatBot</Text>
                <NavBar navigation={this.props.navigation}></NavBar>
            </View>
        )
    }
}

export default ChatBot;

const styles = StyleSheet.create({
    container: {        
        flex: 1,
        paddingTop: 40,
    },
  });
