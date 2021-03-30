import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import Product from '../screens/Product';
import NavBar from '../NavBar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import images from '../ProductContext';

class Menu extends React.Component {

	constructor(props){
		super(props)
		this.state = { products : []}
	}
	
    static navigationOptions = {
        headerTitle: 'Menu'
      }

	componentDidMount(){
		fetch("https://dry-bayou-88775.herokuapp.com/app/product-context")
    	.then(res=>res.json())
    	.then(results=>{
      		results.forEach(element => {
        		element.image = images[element.image_path]
        		element.price = parseFloat(element.price)
      	})
      	this.setState( {products : results} )
    	})
	}

	render() {
		return (
		<View style={styles.container}>
				<View style={styles.row}>
					<View style={styles.col}>
					<FlatList
						data={this.state.products}
						renderItem={({ item }) => (
						<TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetails', item)}>
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
			<NavBar navigation={this.props.navigation}></NavBar>
		</View>
		);
	}
}

export default Menu;

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
