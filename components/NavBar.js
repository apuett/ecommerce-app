import React from 'react'
import { StyleSheet, Button, View } from 'react-native';

function NavBar({navigation}) {
    return (
        <View style={styles.navbar_container}>
            <Button title="Menu" onPress={() =>navigation.push('Product')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar_container: {
      backgroundColor: '#8888DD',
      height: 80,
      alignItems: 'center',
      justifyContent: 'center',
    
    },
  });

export default NavBar
