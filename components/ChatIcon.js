import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'

const ChatIcon = (props) => (
    <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('ChatBotScreen')} >
		    <Text>ChatBot</Text>
		</TouchableOpacity>
    </View>
)

export default connect(null)(withNavigation(ChatIcon));
