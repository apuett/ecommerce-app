import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, Button, Alert } from 'react-native';
import { connect } from 'react-redux'
import NavBar from '../NavBar';

class ShoppingCart extends React.Component {

    static navigationOptions = {
        headerTitle: 'Cart'
      }

    renderProducts = (products) => {
        return products.map((element, index) => {
            return (
                <View style={styles.product_container} key={index}>
                    <Image style={styles.product_image} source={element[1]} />
                    <Text style={styles.product_name}>{element[2]}</Text>
                    <Text style={styles.product_price}>${element[3]}</Text>
                    <Button title='Remove' onPress={() => this.props.removeItemFromCart(index)}></Button>
                </View>
            );
        });
    }

    render() {
        let totalPrice = 0;

        for(let i = 0; i < this.props.cartItems.length; i++) {
            totalPrice += this.props.cartItems[i][3];
        }

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        {this.renderProducts(this.props.cartItems)}
                        <Text style={styles.total_price}>Total: ${totalPrice}</Text>
                        <Button title='Checkout' onPress={()=> {
                            // this.props.clearCart();     
                            this.props.navigation.push('CheckOut')
                        }}></Button>
                    </View>
                </ScrollView>
                <NavBar navigation={this.props.navigation}></NavBar>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.ShoppingCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItemFromCart: (index) => dispatch({ type: 'REMOVE_FROM_CART', payload: index }),
        clearCart: () => dispatch({ type: 'CLEAR_CART' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

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
        fontSize: 20,
    },
    total_price: {
        paddingTop: 20,
        textAlign: 'center', 
        alignSelf: 'stretch',
        fontWeight: 'bold',
        fontSize: 20,
    },
  });
