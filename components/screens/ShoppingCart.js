import React, {useState} from 'react';
import { Button } from 'react-native';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import NavBar from '../NavBar';

function ShoppingCart({ screenProps,navigation }) {

    
    const createList = () => {
        return screenProps.shoppingCart.map((element) => {
            return (
                <View style={{margin:10}}>
                    <Text>{element.name}</Text>
                    <Text>{element.price}</Text>
                    <Button title='remove' onPress={()=>removeShoppingCartItem(element.key)}></Button>
                </View>
            );
        });
    };

    const [list, setList] = useState(createList);

    const removeShoppingCartItem = (itemKey) =>{

         let shoppingCart = screenProps.shoppingCart;

        for(let index = 0; index < shoppingCart.length; index++){
            if(shoppingCart[index].key == itemKey){
                shoppingCart.splice(index,1);
                break;
            }
        }

        screenProps.shoppingCartButtonPress(shoppingCart);
        setList(createList)
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.cart_container}>
                    <Text>Shopping Cart</Text>
                    <Text>{list}</Text>
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
