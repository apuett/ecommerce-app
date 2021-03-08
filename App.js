import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from './components/screens/Login';
import Menu from './components/screens/Menu';
import Product from './components/screens/Product';
import ProductDetails from './components/screens/ProductDetails';
import ShoppingCart from './components/screens/ShoppingCart';
import WishList from './components/screens/WishList';
import {products} from './components/ProductContext';

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

export default function App() {

  const [productContext] = useState(products);
  const [wishList, setWishList] = useState("Button not pressed");
  const wishListButtonPress = (item) => {
    alert("Added to wish list");
    setWishList(item);
  };
  const wishListRemovePress = (item) => {
    alert("Item Removed");
    setWishList(item);
  }

  return <AppContainer screenProps={{ products: productContext,
                                      wishList: wishList,
                                      wishListButtonPushed: wishListButtonPress,
                                      removeWishListItem: wishListRemovePress }}/>;
}



//-----------------------------------------------------------------------
//Need to avoid going back to log in screen. remember to implement a auth nav.
//------------------------------------------------------------------------


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
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
      title:"ProductDetails"
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
    initialRouteName: "Login"
});

const AppContainer = createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

