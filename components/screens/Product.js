import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { Card } from 'react-native-elements'

export default function Product(props) {
    return(
        <Card> 
            <View style={styles.container}>
            <Image style={styles.image} source={props.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.price}>{props.price}</Text>
                </View>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height : 250,
        marginBottom : 15,
        backgroundColor : '#FFFFFF',
    },
    image: {
        alignSelf: 'center',
        width: '60%',
        height: '70%'
    },
    textContainer : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    name: {
        fontSize: 25,
        marginBottom: 15, 
        marginTop: 5
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10
    },
    description: {
        fontSize: 10,
    }
  });
