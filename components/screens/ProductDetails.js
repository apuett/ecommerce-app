import React from 'react';
import { View, StyleSheet, Text, Image, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavBar from '../NavBar';

export default function ProductDetails({ screenProps, navigation }) {

    const handleWishListPress = () => {
        const updatedList = screenProps.wishList;
        updatedList.push({
                        key: navigation.getParam('key'),
                        name: navigation.getParam('name'),
                        price: navigation.getParam('price'),
                        description: navigation.getParam('description'),
                        image: navigation.getParam('image')
                            });
        screenProps.wishListButtonPress(updatedList);

        Alert.alert("Commerce", "Added to wish list");
    };

    const handleShoppingCartPress = () => {
        const updatedList = screenProps.shoppingCart;
        updatedList.push({
                        key: navigation.getParam('key'),
                        name: navigation.getParam('name'),
                        price: navigation.getParam('price'),
                        description: navigation.getParam('description'),
                        image: navigation.getParam('image')
                            });
        screenProps.shoppingCartButtonPress(updatedList);

        Alert.alert("Commerce", "Added to Cart");
    };

    return(
        <View style={styles.container}>
            <Card> 
                <View style={styles.cardcontainer}>
                <Image style={styles.image} source={navigation.getParam('image')} />
                    <View style={styles.textcontainer}>
                        <Text style={styles.name}>{navigation.getParam('name')}</Text>
                        <Text style={styles.price}>${navigation.getParam('price')}</Text>
                        <Text style={styles.description}>{navigation.getParam('description')}</Text>
                    </View>

                        <View style={styles.buttoncontainer}>
                            <TouchableOpacity style={styles.button} onPress={handleShoppingCartPress}>
                                <Text style={styles.buttonText}>Add to Cart</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={handleWishListPress}>
                                <Text style={styles.buttonText}>Add to Wish List</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </Card>
            <View style={styles.navbarcontainer}>
                <NavBar navigation={navigation}></NavBar>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardcontainer: {
        width: '100%',
        height : 250,
        marginBottom : 15,
        backgroundColor : '#FFFFFF',
    },
    image: {
        alignSelf: 'center',
        width: '50%',
        height: '60%'
    },
    textcontainer : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    name: {
        marginBottom: 5, 
        marginTop: 5
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 10,
    },
    buttoncontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width:  150,
        height: 40,
        borderRadius: 15,
        backgroundColor: '#8634eb',
        justifyContent: 'center',
        marginTop: 20
    },
    buttonText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 16, 
        textAlign: 'center'
      },
      navbarcontainer: {
        flex: 1,
        justifyContent: 'flex-end'
    }
  });
  