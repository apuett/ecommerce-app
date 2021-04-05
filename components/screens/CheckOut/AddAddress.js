import React, { Component } from 'react'
import { StyleSheet,View,Text, TouchableOpacity, TextInput,Dimensions } from 'react-native'

export default class AddAddress extends Component {

    constructor(props){
        super(props)
        this.state = {
            addressLine1 : '',
            addressLine2 : '',
            city : '',
            stateInit : '',
            zipCode : ''
        }
    }

    static navigationOptions = {
        headerTitle: 'Add Address'
      }

    handleStateInitChange(txt){
        if(txt.length < 3){
            this.setState({stateInit: txt})
        }
    }

    handleZipCodeChange(txt){
        const nums = ['0','1','2','3','4','5','6','7','8','9']

        let lastChar = txt[txt.length-1]
        if(nums.includes(lastChar) || txt.length==0){
            if(txt.length < 6){
                this.setState({zipCode: txt})
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput
                        style={[styles.input,styles.input_big]}
                        placeholder={'Address Line 1'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
                        onChangeText={(txt)=>this.setState({addressLine1: txt})}
                        value={this.state.addressLine1}
                    />
                </View>
                <View style={styles.input_container}>
                    <TextInput
                        style={[styles.input,styles.input_big]}
                        placeholder={'Address Line 2'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
                        onChangeText={(txt)=>this.setState({addressLine2: txt})}
                        value={this.state.addressLine2}
                    />
                </View>
                <View style={styles.input_container}>
                    <TextInput
                        style={[styles.input,styles.input_big]}
                        placeholder={'City'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
                        onChangeText={(txt)=>this.setState({city: txt})}
                        value={this.state.city}
                    />
                </View>
                <View style={styles.small_inputs_container}>
                    <View style={styles.small_inputs_container}>
                        <TextInput
                            style={[styles.input,styles.input_small]}
                            placeholder={'State Init.(MN)'}
                            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
                            onChangeText={(txt)=>this.handleStateInitChange(txt)}
                            value={this.state.stateInit}
                        />
                    </View>
                    <View style={styles.small_inputs_container}>
                        <TextInput
                            style={[styles.input,styles.input_small]}
                            placeholder={'Zip Code'}
                            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
                            onChangeText={(txt)=>this.handleZipCodeChange(txt)}
                            value={this.state.zipCode}
                        />
                    </View>
                </View>
                <View style={styles.button_container}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Add Address</Text>
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
        paddingTop: 40,
        paddingRight: WIDTH * 0.05,
        paddingLeft: WIDTH * 0.05
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
    button_container:{
          alignItems:'center'
      },
    input_container:{
        paddingBottom: 10
        },
    small_inputs_container:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    input: {
        height: 50,
        borderRadius: 20,
        fontSize: 18,
        paddingLeft: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: 'rgba(255, 255, 255, 0.8)',
      },
    input_big:{
      },
    input_small:{
        width: (WIDTH - (WIDTH*0.1)) * .5,
      },
  });