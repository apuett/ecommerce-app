import React, {useState} from 'react';
import { Button } from 'react-native';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import NavBar from '../NavBar';

function ShoppingCart({ screenProps,navigation }) {

    const [shoppingCart, setShoppingCart] = useState(screenProps.shoppingCart); 

    const removeShoppingCartItem = (itemKey) =>{
        alert('Item Removed');

        let updatedList = screenProps.shoppingCart
        for(let index = 0; index < updatedList.length; index++){
            if(updatedList[index].key == itemKey){
                updatedList.splice(index,1);
            }
        }

        setShoppingCart(updatedList);
        screenProps.shoppingCartButtonPress(updatedList);
    }

    const list = () => {
        return shoppingCart.map((element) => {
            return (
                <View style={{margin:10}}>
                    <Text>{element.name}</Text>
                    <Text>{element.price}</Text>
                    <Button title='remove' onPress={()=>removeShoppingCartItem(element.key)}></Button>
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
