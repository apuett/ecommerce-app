import React from 'react';
import { Button } from 'react-native';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import NavBar from '../NavBar';

function WishList({ screenProps,navigation }) {

    const removeWishListItem = () =>{

        let wishList = screenProps.wishList;

        for (let index=0;index<wishList.length;index++){
            if (wishList[index].id == 0){
                wishList.splice(index,1);
                break;
            };
        };
        screenProps.wishListButtonPress(wishList);
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.wishlist_container}>
                    <Text>Wish List</Text>
                    <Button title='remove' onPress={removeWishListItem}></Button>
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
    wishlist_container: {
      flex: 1,  
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default WishList
