import React from 'react'
import { StyleSheet, Button, View } from 'react-native';

function NavBar({navigation}) {
    return (
        <View style={styles.navbar_container}>
            <Button title="Product" onPress={() =>navigation.push('Product')}/>
            <Button title="Shopping Cart" onPress={() =>navigation.push('ShoppingCart')}/>
            <Button title="Wish List" onPress={() =>navigation.push('WishList')}/>
            <Button title="Menu" onPress={() => navigation.push('Menu')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar_container: {
      flexDirection: 'row',  
      backgroundColor: '#CCC',
      height: 80,
      alignItems: 'center',
      justifyContent: 'center',
    
    },
  });

export default NavBar
