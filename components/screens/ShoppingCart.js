import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, Alert, Button } from 'react-native';
import NavBar from '../NavBar';

function ShoppingCart({ screenProps, navigation }) {

    let totalPrice = 0;

    const createList = (shoppingCart) => {
        return shoppingCart.map((element, index) => {
            totalPrice += element.price;
            return (
                <View style={styles.product_container} key={index}>
                    <Image style={styles.product_image} source={element.image} />
                    <Text style={styles.product_name}>{element.name}</Text>
                    <Text style={styles.product_price}>${element.price}</Text>
                    <Button title='Remove' onPress={()=>removeShoppingCartItem(element.key)}></Button>
                </View>
            );
        });
    };

    const [list, setList] = useState(createList(screenProps.shoppingCart));

    const removeShoppingCartItem = (itemKey) =>{
        
        shoppingCart = screenProps.shoppingCart;
        
        for(let index = 0; index < shoppingCart.length; index++){
            if(shoppingCart[index].key == itemKey){
                shoppingCart.splice(index,1);
                break;
            }
        }

        screenProps.shoppingCartButtonPress(shoppingCart);
        setList(createList(shoppingCart))
    };

    const clearList = () => {
        screenProps.shoppingCart.length = 0;
        screenProps.shoppingCartButtonPress(screenProps.shoppingCart);
        setList(createList(screenProps.shoppingCart));

        Alert.alert("Commerce", "Items purchased!");
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    {list}
                    <Text style={styles.total_price}>Total: ${totalPrice}</Text>
                    <Button title='Purchase' onPress={()=> {
                        clearList();
                    }}></Button>
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
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingBottom: 50,
    },
    product_image: {
        height: 70,
        width: 70,
    },
    product_name: {
        fontSize: 20,
    },
    product_price: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    total_price: {
        paddingTop: 20,
        textAlign: 'center', 
        alignSelf: 'stretch',
        fontWeight: 'bold',
        fontSize: 20,
    },
  });

export default ShoppingCart;
