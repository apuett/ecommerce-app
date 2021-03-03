import React from 'react'
import NavBar from '../NavBar';
import {Button, ScrollView, StyleSheet, Text, View } from 'react-native';

function Product({navigation}) {
    return (
        <View>
            <Button title="Menu" onPress={() =>navigation.push('Menu')}/>
            <ScrollView>
                <View style={styles.product_container}>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    product_container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Product




