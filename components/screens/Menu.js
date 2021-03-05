import React, {useState} from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Product from '../screens/Product';
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
    <ScrollView
      style={{
        flexGrow: 0,
        width: "100%",
        height: "100%",
      }}>
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
              />
            </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center'
    },
    col: {
      flex: 1
    }
  });
