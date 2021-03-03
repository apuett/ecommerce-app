import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

function Menu({navigation}) {
    return (
        <View >
            <Button title="Product" onPress={() =>navigation.push('Product')}/>
        </View>
    )
}

export default Menu
