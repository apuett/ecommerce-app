import React, {useState} from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Product from '../screens/Product';
import NavBar from '../NavBar';
import { ScrollView } from 'react-native-gesture-handler';

export default function Menu({navigation}) {
  const [products] = useState([
    {
      name: 'Laptop',
      price: 699.99,
      description: 'Great condition!',
      image: require('../images/laptop.png')
    },
    {
      name: 'Charger',
      price: 9.99,
      description: 'Okay condition',
      image: require('../images/charger.png')
    }
  ]);

  return (
    <View style={styles.container}>
          <View style={styles.row}>
              <View style={styles.col}>
                <FlatList
                  data={products}
                  renderItem={({ item }) => (
                    <Product 
                    name={item.name} 
                    price={item.price}
                    description={item.description}
                    image={item.image}
                    />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
          </View>
      <NavBar navigation={navigation}></NavBar>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    col: {
      flex: 1
    }
  });
