import React, { useState,useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer,createSwitchNavigator  } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from './components/screens/Login';
import Menu from './components/screens/Menu';
import Product from './components/screens/Product';
import ProductDetails from './components/screens/ProductDetails';
import ShoppingCart from './components/screens/ShoppingCart';
import WishList from './components/screens/WishList';
import images from './components/ProductContext';


const AppNavigator = createStackNavigator({
  Menu: {
    screen: Menu,
    navigationOptions: {
      title:"Shop",
    },
  },
  Product: {
    screen: Product,
    navigationOptions: {
      title:"Product"
    },
  }, 
  ProductDetails: {
    screen: ProductDetails,
    navigationOptions: {
      title:"Product Details"
    },
  }, 
  ShoppingCart: {
    screen: ShoppingCart,
    navigationOptions: {
      title:"Cart"
    },
  },
  WishList: {
    screen: WishList,
    navigationOptions: {
      title:"Wish List"
    },
  }
},{
    initialRouteName: "Menu"
});

const AuthNavigator = createSwitchNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
});

const MainNavigator = createSwitchNavigator({
  App: AppNavigator,
  Auth: AuthNavigator
},{
  initialRouteName: 'Auth'
});

const AppContainer = createAppContainer(MainNavigator);




export default function App() {

  const [productContext,setProductContext] = useState([]);

  useEffect(()=>{
    fetch("https://dry-bayou-88775.herokuapp.com/app/product-context")
    .then(res=>res.json())
    .then(results=>{
      results.forEach(element => {
        element.image = images[element.image_path]
        element.price = parseFloat(element.price)
      })
      setProductContext(results)
    })
  },[])

  const [wishList, setWishList] = useState([]);
  const wishListButtonPress = (updatedList) => {
    setWishList(updatedList);
  };

  const [shoppingCart, setShoppingCart] = useState([]);
  const shoppingCartButtonPress = (updatedCart) =>{
    setShoppingCart(updatedCart);
  };

  return <AppContainer screenProps={{ products: productContext,
                                      wishList,
                                      shoppingCart,
                                      wishListButtonPress,
                                      shoppingCartButtonPress }}/>;
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

