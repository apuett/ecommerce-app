import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';

function Menu({navigation}) {
    return (
        <View style={styles.menu_container}>
            <Button title="Product" onPress={() =>navigation.push('Product')}/>
            <Button title="Shopping Cart" onPress={() =>navigation.push('ShoppingCart')}/>
            <Button title="Wish List" onPress={() =>navigation.push('WishList')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    menu_container: {
      flex: 1,  
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Menu
