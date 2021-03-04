import React from 'react'
import { Button, View } from 'react-native'

function MenuButton({navigation}) {
    return (
        <View>
            <Button title='Menu too' onPress={() => navigation.push('Menu')}></Button>
        </View>
    )
}

export default MenuButton
