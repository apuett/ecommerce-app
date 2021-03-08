// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Product from './components/screens/Product.js';
// import Menu from './components/screens/Menu.js';
// import ShoppingCart from './components/screens/ShoppingCart.js';
// import WishList from './components/screens/WishList.js'
// import Login from './components/screens/Login.js';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
//         <Stack.Screen name="Menu" component={Menu} options={{ title: 'Menu', header: null }} />
//         <Stack.Screen name="Product" component={Product} />
//         <Stack.Screen name="ShoppingCart" component={ShoppingCart} options={{ title: 'Cart' }}/>
//         <Stack.Screen name="WishList" component={WishList} options={{ title: 'Wish List' }}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const Stack = createStackNavigator();

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });







import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from './components/screens/Login';
import Menu from './components/screens/Menu';
import Product from './components/screens/Product';
import ShoppingCart from './components/screens/ShoppingCart';
import WishList from './components/screens/WishList';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

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

