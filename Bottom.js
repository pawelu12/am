import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import { FontAwesome5, Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { navStyle } from '../api/styles'
import { apiName } from '../api/config'
import NewProductScreen from '../screens/NewProductScreen'
import FavouriteProducts from '../screens/FavouriteProducts'
import ProductsList from './ProductsList'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Pressable } from 'native-base'

const Tab = createBottomTabNavigator()

const Bottom = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      headerStyle: navStyle.header.style,
      headerTintColor: navStyle.header.tintColor,
      headerTitleStyle: navStyle.header.titleStyle,
      headerTitle: apiName,
      headerShown: false,
      tabBarActiveTintColor: navStyle.tab.activeColor,
      tabBarInactiveTintColor: navStyle.tab.inactiveColor,
      tabBarStyle: navStyle.tab.style,
      tabBarLabel: () => null,
      tabBarIcon: ({ focused, color, size }) => {
        size = 28
        if(route.name === 'Home')
          return <Ionicons name={focused ? 'md-home' : 'md-home-outline'} size={size} color={color} />
        else if(route.name === 'Products')
          return <Ionicons name={focused ? 'search' : 'search-outline'} size={size} color={color} />
        else if(route.name === 'NewProduct')
          return <Ionicons name={focused ? 'add-circle' : 'add-circle-outline'} size={size+18} color={color} />
        else if(route.name === 'FavouriteProducts')
          return <Ionicons name={focused ? 'heart' : 'heart-outline'} size={size} color={color} />
      }
    })}
  >
    <Tab.Screen
      name="Products"
      component={ProductsList}
      options={{
        headerRight: () => <Pressable style={{ marginRight: 10 }} onPress={() => Alert.alert("wyszukiwarka po kodzie")}><Ionicons name="barcode-outline" color="white" size={32} /></Pressable>
      }}
    />
    <Tab.Screen
      name="Home"
      component={HomeScreen}
    />
    <Tab.Screen
      name="NewProduct"
      component={NewProductScreen}
    />
    <Tab.Screen
      name="FavouriteProducts"
      component={FavouriteProducts}
    />
  </Tab.Navigator>
)

export default Bottom