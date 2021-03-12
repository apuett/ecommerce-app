import React, {useState} from 'react';
import { Alert, Button } from 'react-native';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import NavBar from '../NavBar';

function WishList({ screenProps,navigation }) {

    const [wishList, setWishList] = useState(screenProps.wishList); 
    const [shoppingCart, setShoppingCart] = useState(screenProps.shoppingCart); 

    const createList = () => {
        return wishList.map((element, index) => {
            return (
                <View style={styles.product_container} key={index}>
                    <Image style={styles.product_image} source={element.image} />
                    <Text style={styles.product_name}>{element.name}</Text>
                    <Button title='add to cart' style={styles.product_button} onPress={()=>addToCart(element.key, element.name, element.price, element.description, element.image)}></Button>
                    <Button title='remove' style={styles.product_button} onPress={()=>removeWishListItem(element.key)}></Button>
                </View>
            );
        });
    };

    const [list, setList] = useState(createList());

    const removeWishListItem = (itemKey) =>{
        const updatedList = screenProps.wishList;
        for (let index=0;index<updatedList.length;index++){
            if (updatedList[index].key == itemKey){
                updatedList.splice(index,1);
                break;
            };
        };

        setWishList(updatedList);
        screenProps.wishListButtonPress(updatedList);
        setList(createList);
    }

    const addToCart = (key, name, price, description, image) => {
        const shoppingList = screenProps.shoppingCart;
        shoppingList.push({           
            key: key,
            name: name,
            price: price,
            description: description,
            image: image
        });

        setShoppingCart(shoppingList);
        screenProps.shoppingCartButtonPress(shoppingList);

        Alert.alert('Added to cart!');
        removeWishListItem(key);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <View>{list}</View>
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
    product_button: {

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

  export default WishList;