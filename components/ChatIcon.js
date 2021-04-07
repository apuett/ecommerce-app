import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation'
import { connect } from 'react-redux'
import { AntDesign } from '@expo/vector-icons/';

const ChatIcon = (props) => (
    <View>
        <TouchableOpacity onPress={() => props.navigation.navigate('ChatBotScreen')} >
            <AntDesign name="message1" size={30} color="#000000"/>
		</TouchableOpacity>
    </View>
)

export default connect(null)(withNavigation(ChatIcon));
