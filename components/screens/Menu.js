import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native';
import Product from '../screens/Product';
import NavBar from '../NavBar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { products } from '../ProductContext';

class Menu extends React.Component {
	render() {
		return (
		<View style={styles.container}>
				<View style={styles.row}>
					<View style={styles.col}>
					<FlatList
						data={products}
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
