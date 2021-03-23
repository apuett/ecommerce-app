import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, Alert, Button } from 'react-native';
import { connect } from 'react-redux';
import NavBar from '../NavBar';

class WishList extends React.Component {
    renderProducts = (products) => {
        return products.map((element, index) => {
            return (
                <View style={styles.product_container} key={index}>
                    <Image style={styles.product_image} source={element[1]} />
                    <Text style={styles.product_name}>{element[2]}</Text>
                    <Button title='Add to Cart' onPress={() => {
                        this.props.addItemToCart([element[0], element[1], element[2], element[3], element[4]]);
                        this.props.removeItemFromWishList(index);
                        Alert.alert("Commerce", "Added to cart!");
                    }}></Button>
                    <Button title='Remove' onPress={() => this.props.removeItemFromWishList(index)}></Button>
                </View>
            );
        });
    }

    render() {
        return(
            <View style={styles.container}>
                <ScrollView>
                    {this.renderProducts(this.props.wishListItems)}
                </ScrollView>
                <NavBar navigation={this.props.navigation}></NavBar>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        wishListItems: state.WishList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItemFromWishList: (index) => dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: index }),
        addItemToCart: ([key, image, name, price, description]) => dispatch({type:'ADD_TO_CART', payload: ([key, image, name, price, description])})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList);

const styles = StyleSheet.create({
    container: {        
        flex: 1,
        paddingTop: 40,
    },
    cart_container: {
        alignItems: 'center',
    },
    product_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingBottom: 50,
    },
    product_image: {
        height: 70,
        width: 70,
    },
    product_name: {
        fontSize: 20,
    },
    product_price: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    total_price: {
        paddingTop: 50,
        textAlign: 'center', 
        alignSelf: 'stretch',
        fontWeight: 'bold',
        fontSize: 23,
    },
  });
