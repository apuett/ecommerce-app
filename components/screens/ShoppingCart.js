import React, {useState} from 'react';
import { Alert, Button } from 'react-native';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import NavBar from '../NavBar';

function ShoppingCart({ screenProps,navigation }) {

    const [shoppingCart, setShoppingCart] = useState(screenProps.shoppingCart); 

    let totalPrice = 0;

    const createList = () => {
        return shoppingCart.map((element, index) => {
            totalPrice += element.price;
            return (
                <View style={styles.product_container} key={index}>
                    <Image style={styles.product_image} source={element.image} />
                    <Text style={styles.product_name}>{element.name}</Text>
                    <Text style={styles.product_price}>{element.price}</Text>
                    <Button title='remove' style={styles.remove_button} onPress={()=>removeShoppingCartItem(element.key)}></Button>
                </View>
            );
        });
    };

    const [list, setList] = useState(createList());

    const removeShoppingCartItem = (itemKey) =>{
        let updatedList = screenProps.shoppingCart;
        for(let index = 0; index < updatedList.length; index++){
            if(updatedList[index].key == itemKey){
                updatedList.splice(index,1);
                break;
            }
        }

        setShoppingCart(updatedList);
        screenProps.shoppingCartButtonPress(updatedList);
        setList(createList);
    }

    const clearList = () => {
        Alert.alert('Items purchased!');
        screenProps.shoppingCart.length = 0;

        setShoppingCart(screenProps.shoppingCart);
        screenProps.shoppingCartButtonPress(screenProps.shoppingCart);
        setList(createList);
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <View>{list}</View>
                    <Text style={styles.total_price}>Total: ${totalPrice}</Text>
                    <Button title='Purchase' style={styles.purchase_button} onPress={()=> {
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
        fontSize: 15,
    },
    remove_button: {

    },
    total_price: {
        paddingTop: 50,
        textAlign: 'center', 
        alignSelf: 'stretch',
        fontWeight: 'bold',
        fontSize: 23,
    },
    purchase_button: {
        
    }
  });

export default ShoppingCart;