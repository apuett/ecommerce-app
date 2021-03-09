import React from 'react';
import { Button } from 'react-native';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import NavBar from '../NavBar';

function ShoppingCart({ screenProps, navigation }) {

    const removeShoppingCartItem = () =>{
        alert('Item Removed')

        screenProps.shoppingCartButtonPress("removed");
    }

    const list = () => {
        return screenProps.shoppingCart.map((element) => {
          return (
            <View style={{margin: 10}}>
              <Text>{element.name}</Text>
              <Text>{element.price}</Text>
            </View>
          );
        });
      };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.cart_container}>
                    <Text>Shopping Cart</Text>
                    <Text>{list()}</Text>
                    <Button title='remove' onPress={removeShoppingCartItem}></Button>
                </View>
            </ScrollView>
            <NavBar navigation={navigation}></NavBar>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cart_container: {
      flex: 1,  
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default ShoppingCart