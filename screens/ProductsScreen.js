import React from 'react'
import ProductsList from '../comps/ProductsList'

import { createStackNavigator } from '@react-navigation/stack'
import BarcodeCamera from '../comps/BarcodeCamera'

const Stack = createStackNavigator()

const ProductsScreen = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="ProductList"
  >
    <Stack.Screen name="ProductList" component={ProductsList} />
    <Stack.Screen name="Scanner" component={BarcodeCamera} />
  </Stack.Navigator>
)

export default ProductsScreen