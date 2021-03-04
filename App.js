import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Product from './components/screens/Product.js';
import Menu from './components/screens/Menu.js';
import ShoppingCart from './components/screens/ShoppingCart.js';
import WishList from './components/screens/WishList.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{ title: 'Cart' }}/>
        <Stack.Screen name="WishList" component={WishList} options={{ title: 'Wish List' }}/>
        <Stack.Screen name="Menu" component={Menu} options={{ title: 'Menu' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
