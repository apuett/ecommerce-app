import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions  } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

export default class CheckOut extends Component {

    static navigationOptions = {
        headerTitle: 'Check Out'
      }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Credit Card:</Text>
                <View style={styles.section_container}>
                    <DropDownPicker
                        containerStyle={{height: 40}}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                    />
                    <View style={styles.button_container}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Add Credit Card</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.headerText}>Address:</Text>
                <View style={styles.section_container}>
                    <DropDownPicker
                        containerStyle={{height: 40}}
                        style={{backgroundColor: '#fafafa'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                    />
                    <View style={styles.button_container}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Add Address</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.total_container}>
                    <View style={styles.pricing_container}>
                        <View style={styles.pricing_field}>
                            <Text style={styles.pricing_field_name}>Subtotal</Text>
                            <Text style={styles.price}>19.99</Text>
                        </View>
                        <View style={styles.pricing_field}>
                            <Text style={styles.pricing_field_name}>Taxes</Text>
                            <Text style={styles.price}>2.99</Text>
                        </View>
                        <View style={styles.pricing_field}>
                            <Text style={styles.pricing_field_name}>Shipping</Text>
                            <Text style={styles.price}>4.99</Text>
                        </View>
                    </View>
                    <View style={styles.total_pricing_field}>
                        <View style={styles.pricing_field}>
                            <Text style={styles.total_pricing_name}>Total</Text>
                            <Text style={styles.total_price}>28.97</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.button_container}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>CheckOut</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const { width: WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    },
    section_container:{
        paddingBottom: 25,
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 30
    },
    item_container:{
        height: 50,
        backgroundColor: '#ffffff',
    },
    pricing_container:{
        borderTopWidth: 3,
        borderBottomWidth: 3,
        height: 100,
        justifyContent: 'center',
        paddingLeft: WIDTH * 0.20,
        paddingRight: WIDTH * 0.20,
    },
    pricing_field:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5
    },
    pricing_field_name:{
        alignSelf: 'flex-start',
        fontSize: 16
    },
    total_pricing_name:{
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        fontSize: 18
    },
    total_container:{
        paddingTop: 20,
        paddingBottom: 10,
    },
    total_pricing_field:{
        paddingLeft: WIDTH * 0.20,
        paddingRight: WIDTH * 0.20,
        paddingTop: 10,
    },
    total_price:{
        fontWeight: 'bold',
        fontSize: 18
    },
    price:{
        fontSize: 16
    },
    button: {
        width : 150,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 15
      },
      buttonText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 16, 
        textAlign: 'center'
      },
      headerText: {
        fontSize: 18,
        paddingLeft: 10
      },
      button_container:{
          alignItems:'center'
      }
  });
