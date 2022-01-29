import React from 'react'
import ProductsList from '../comps/ProductsList'

import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const ProductsScreen = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="ProductList"
  >
    <Stack.Screen name="ProductList" component={ProductsList} />
  </Stack.Navigator>
)

export default ProductsScreen