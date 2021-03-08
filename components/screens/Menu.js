import React, {useState} from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Product from '../screens/Product';
import NavBar from '../NavBar';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Menu({ screenProps, navigation }) {

  return (
    <View style={styles.container}>
          <View style={styles.row}>
              <View style={styles.col}>
                <FlatList
                  data={screenProps.products}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', item)}>
                      <Product 
                      name={item.name} 
                      price={item.price}
                      description={item.description}
                      image={item.image}
                      />
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
          </View>
      <NavBar navigation={navigation}></NavBar>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    col: {
      flex: 1
    }
  });
