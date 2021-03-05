import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { Card } from 'react-native-elements'

export default function Product(props) {
    return(
        <Card> 
            <View style={styles.container}>
            {/* <Image style={styles.image} source={props.image} /> */}
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{props.Product1.Name}</Text>
                    <Text style={styles.price}>{props.Product1.Price}</Text>
                </View>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height : 200,
        marginBottom : 15,
        backgroundColor : '#FFFFFF',
    },
    image: {
        alignSelf: 'center',
        width: '50%',
        height: '60%'
    },
    textContainer : {
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
    }
  });
