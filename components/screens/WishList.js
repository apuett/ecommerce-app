import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import NavBar from '../NavBar';

function WishList({navigation}) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.wishlist_container}>
                    <Text>Wish List</Text>
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
