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

    let totalPrice = 0;

    const list = () => {
        return shoppingCart.map((element) => {
          totalPrice += element.price;
            return (
                <View style={styles.product_container}>
                    <Text style={styles.product_name}>{element.name}</Text>
                    <Text style={styles.product_price}>{element.price}</Text>
                    <Button title='remove' style={styles.remove_button} onPress={()=>removeShoppingCartItem(element.key)}></Button>
                </View>
            );
        });
    };
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.cart_container}>
                    <View>{list()}</View>
                    <Text style={styles.total_price}>Total: ${totalPrice}</Text>
                </View>
            </ScrollView>
            <NavBar navigation={navigation}></NavBar>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
    cart_container: {
      alignItems: 'center',
    },
    product_container: {
      flex: 1,
      margin: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    product_name: {
      paddingEnd: 10,
    },
    product_price: {
      
    },
    remove_button: {

    },
    total_price: {

    },
    purchase_button: {

    }
  });

export default ShoppingCart