import React, { Component } from 'react'
import { StyleSheet,View,Text, TouchableOpacity, TextInput,Dimensions } from 'react-native'



export default class AddCreditCard extends Component {

    constructor(props){
		super(props)
		this.state = { 
            creditCardNum : '',
            expDate : '',
            holderName : '',
            cardCVV : '',
        }
        this.cardNumberDigits = ''
	}

    static navigationOptions = {
        headerTitle: 'Add Card'
      }


    handleCardNumberTextChange(txt) {
        const nums = ['0','1','2','3','4','5','6','7','8','9']

        let creditCardNum = this.state.creditCardNum
        let cardNumberDigits = this.cardNumberDigits
        if (txt.length>creditCardNum.length){
            let lastChar = txt[txt.length-1]
            if (nums.includes(lastChar)){
                if(cardNumberDigits.length<16){
                    cardNumberDigits += lastChar
                    this.cardNumberDigits = cardNumberDigits
                }
            }
        }else{
            if(creditCardNum[creditCardNum.length-1]){
                cardNumberDigits = cardNumberDigits.substring(0,cardNumberDigits.length-1)
                this.cardNumberDigits = cardNumberDigits
            }
        }
        
        let newCardNum = ''
        for(let i =0;i<cardNumberDigits.length;i++){
            if(i!=0 && i%4==0){
                newCardNum += '-'
            }
            newCardNum += cardNumberDigits[i]
        }
        this.setState({creditCardNum : newCardNum})      

    }

    handleExpDateChange(txt){
        const nums = ['0','1','2','3','4','5','6','7','8','9']

        let newExpDate = this.state.expDate
        let lastChar = txt[txt.length-1]
        if (txt.length>newExpDate.length){
            if (nums.includes(lastChar)){
                if(txt.length==3) newExpDate += '/'
                if(newExpDate.length<5)newExpDate+=lastChar
            }
        }else{
            newExpDate = newExpDate.substring(0,newExpDate.length-1)
        }
        this.setState({expDate: newExpDate})
        
    }

    handleCVVChange(txt){
        const nums = ['0','1','2','3','4','5','6','7','8','9']

        let newCVV = this.state.cardCVV
        let lastChar = txt[txt.length-1]
        if (txt.length>newCVV.length){
            if (nums.includes(lastChar)){
                if(newCVV.length < 3) newCVV+=lastChar
            }
        }else{
            newCVV = newCVV.substring(0,newCVV.length-1)
        }
        this.setState({cardCVV: newCVV})
        

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput
                        style={[styles.input,styles.input_big]}
                        placeholder={'Name On Card'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
                        onChangeText={(txt)=>this.setState({holderName: txt})}
                        value={this.state.holderName}
                    />
                </View>
                <View style={styles.input_container}>
                    <TextInput
                        style={[styles.input,styles.input_big]}
                        placeholder={'Card Number'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
                        onChangeText={(txt)=>this.handleCardNumberTextChange(txt)}
                        value={this.state.creditCardNum}
                    />
                </View>
                <View style={styles.small_inputs_container}>
                    <View style={styles.small_inputs_container}>
                        <TextInput
                            style={[styles.input,styles.input_small]}
                            placeholder={'exp.(mm/yy)'}
                            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
                            onChangeText={(txt)=>this.handleExpDateChange(txt)}
                            value={this.state.expDate}
                        />
                    </View>
                    <View style={styles.small_inputs_container}>
                        <TextInput
                            style={[styles.input,styles.input_small]}
                            placeholder={'CVV'}
                            placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
                            onChangeText={(txt)=>this.handleCVVChange(txt)}
                            value={this.state.cardCVV}
                        />
                    </View>
                </View>
                <View style={styles.button_container}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Add Credit Card</Text>
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
        paddingTop: 60,
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
