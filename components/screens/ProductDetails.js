import React from 'react';
import { View, StyleSheet, Text, Image, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import NavBar from '../NavBar';

class ProductDetails extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Card> 
                    <View style={styles.cardcontainer}>
                    <Image style={styles.image} source={this.props.navigation.getParam('image')} />
                        <View style={styles.textcontainer}>
                            <Text style={styles.name}>{this.props.navigation.getParam('name')}</Text>
                            <Text style={styles.price}>${this.props.navigation.getParam('price')}</Text>
                            <Text style={styles.description}>{this.props.navigation.getParam('description')}</Text>
                        </View>
    
                            <View style={styles.buttoncontainer}>
                                <TouchableOpacity style={styles.button} onPress={() => {
                                this.props.addItemToCart([
                                    this.props.navigation.getParam('key'),
                                    this.props.navigation.getParam('image'),
                                    this.props.navigation.getParam('name'),
                                    this.props.navigation.getParam('price'),
                                    this.props.navigation.getParam('description')
                                ]); 
                                    Alert.alert("Commerce", "Added to Cart");
                                }}>
                                    <Text style={styles.buttonText}>Add to Cart</Text>
                                </TouchableOpacity>
    
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>Add to Wish List</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                </Card>
                <View style={styles.navbarcontainer}>
                    <NavBar navigation={this.props.navigation}></NavBar>
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: ([key, image, name, price, description]) => dispatch({type:'ADD_TO_CART', payload: ([key, image, name, price, description])})
    }
}

export default connect(null, mapDispatchToProps)(ProductDetails);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cardcontainer: {
        width: '100%',
        height : 250,
        marginBottom : 15,
        backgroundColor : '#FFFFFF',
    },
    image: {
        alignSelf: 'center',
        width: '50%',
        height: '60%'
    },
    textcontainer : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    name: {
        marginBottom: 5, 
        marginTop: 5
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 10,
    },
    buttoncontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width:  150,
        height: 40,
        borderRadius: 15,
        backgroundColor: '#8634eb',
        justifyContent: 'center',
        marginTop: 20
    },
    buttonText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 16, 
        textAlign: 'center'
      },
      navbarcontainer: {
        flex: 1,
        justifyContent: 'flex-end'
    }
  });
  