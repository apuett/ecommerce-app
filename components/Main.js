import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import CheckOut from './screens/CheckOut/CheckOut';
import AddCreditCard from './screens/CheckOut/AddCreditCard';
import AddAddress from './screens/CheckOut/AddAddress';
import Login from './screens/Login';
import Menu from './screens/Menu';
import Product from './screens/Product';
import ProductDetails from './screens/ProductDetails';
import ShoppingCart from './screens/ShoppingCart';
import WishList from './screens/WishList';

const AppStackNavigator = createStackNavigator({
    Login: Login,
    Menu: Menu,
    Product: Product,
    ProductDetails: ProductDetails,
    ShoppingCart: ShoppingCart,
    WishList: WishList,
    CheckOut: CheckOut,
    AddCreditCard: AddCreditCard,
    AddAddress: AddAddress
  });

  const Main = createAppContainer(AppStackNavigator);

  export default Main;
