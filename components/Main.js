import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import Login from './screens/Login';
import Menu from './screens/Menu';
import Product from './screens/Product';
import ProductDetails from './screens/ProductDetails';
import ShoppingCart from './screens/ShoppingCart';
import WishList from './screens/WishList';
import ChatBotScreen from './screens/ChatBotScreen';

const AppStackNavigator = createStackNavigator({
    Login: Login,
    Menu: Menu,
    Product: Product,
    ProductDetails: ProductDetails,
    ShoppingCart: ShoppingCart,
    WishList: WishList,
    ChatBotScreen: ChatBotScreen,
  });

  const Main = createAppContainer(AppStackNavigator);

  export default Main;
