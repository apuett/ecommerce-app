import React from 'react';
import { View, StyleSheet } from 'react-native';
import ChatBot from 'stonebro-react-native-chatbot';

const steps = [
    {
        id: '0',
        message: 'Hello!',
        trigger: '1',
    },
    {
        id: '1',
        message: 'How can I help?',
        trigger: '3',
    },
    {
        id: '3',
        user: true,
        trigger: '4',
    },
    {
        id: '4',
        message: ({previousValue}) => {
            if(previousValue == 'Shopping cart') {
                return 'From the menu, press the "Cart" button at the bottom of the screen to navigate to the items in your shopping cart. You can remove items from your cart or purchase the items from there.';
            } else if (previousValue == 'Wishlist') {
                return 'From the menu, press the "Wish List" button at the bottom of the screen to navigate to the items in your wishlist. You can remove the items from your wishlist or add the items directly to your shopping cart from there.';
            } else if (previousValue == 'I cannot see any products') {
                return 'If you can\'t see any products in the catalog, please wait a moment in the menu. It takes a minute for the items to be retrieved.';
            } else {
                return 'I\'m sorry, I don\'t understand.';
            }
        },
        trigger: '5',
    },     
    {
        id: '5',
        message: 'Is there anything else I can help you with?',
        trigger: '6',
    },
    {
        id: '6',
        options: [
            { value: 1, label: 'Yes', trigger: '1' },
            { value: 2, label: 'No', trigger: '7' },
          ],
    },
    {
        id: '7',
        message: 'Thank you for using me, please press the menu button to continue shopping!',
        end: true,
    },
  ];

class ChatBotScreen extends React.Component {
    static navigationOptions = {
		headerTitle: 'ChatBot',
    }

    render() {
        return (
            <View style={styles.container}>
                <ChatBot steps={steps} footerStyle={styles.chatfooter} placeholder={'Type the message...'} submitButtonContent={'Send'} />
            </View>
        )
    }
}

export default ChatBotScreen;

const styles = StyleSheet.create({
    container: {        
        flex: 1
    },
    chatfooter: {
        alignContent: 'center',
        paddingBottom: 30
    }
  });
