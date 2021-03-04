import React from 'react'
import NavBar from '../NavBar';
import {Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import MenuButton from '../MenuButton';

function Product({navigation}) {


    return (
        <View style={styles.container}>
            {/* <MenuButton navigation={navigation}/> */}
            <ScrollView>
                <View style={styles.product_container}>
                    <Text>Product</Text>
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
    product_container: {
      flex: 1,  
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Product




