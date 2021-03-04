import React from 'react'
import { StyleSheet, Button, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons/';

function NavBar({navigation}) {
    return (
        <View style={styles.navbar_container}>
            <TouchableOpacity style={styles.nav_button} onPress={() =>navigation.push('Product')}>
                <AntDesign name="tag" size={30} color="#000000"/>
                <Text>Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav_button} onPress={() =>navigation.push('ShoppingCart')}>
                <AntDesign name="shoppingcart" size={30} color="#000000"/>
                <Text>Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav_button} onPress={() =>navigation.push('WishList')}>
                <AntDesign name="bars" size={30} color="#000000"/>
                <Text>Wish List</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nav_button} onPress={() => navigation.push('Menu')}>
                <AntDesign name="menufold" size={27} color="#000000"/>
                <Text>Menu</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar_container: {
      flexDirection: 'row',  
      backgroundColor: '#CCC',
      height: 80,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 50,
      paddingRight: 50,
    
    },
    nav_button: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
    }
  });

export default NavBar
