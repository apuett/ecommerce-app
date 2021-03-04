import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

function Menu({navigation}) {
    return (
        <View >
            <Button title="Product" onPress={() => navigation.push('Product')}/>
            <Button title="Login" onPress={() => navigation.push('Login')}/>
        </View>
    )
}

export default Menu
