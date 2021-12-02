import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Box, Center, Heading, Spinner } from 'native-base'
import { vh, vw } from 'react-native-css-vh-vw'

import HomeScreen from '../screens/HomeScreen'
import OptionsScreen from '../screens/OptionsScreen'
import { AntDesign, FontAwesome5, Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import ProductsScreen from '../screens/ProductsScreen'
import UserScreen from '../screens/UserScreen'
import SignPanel from '../screens/SignPanel'
import { navStyle } from '../api/styles'
import { apiName } from '../api/config'
import NewProductScreen from '../screens/NewProductScreen'
import FavouriteProducts from '../screens/FavouriteProducts'
import { colors } from '../api/styles'

const Tab = createBottomTabNavigator()

const Root = () => {
  const isLogged = useSelector(s => s.api.isLogged)
  const newNotifications = useSelector(s => s.api.loggedPerson.newNotifications)

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 2000)
  }, [])

  if(loaded)
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerStyle: navStyle.header.style,
            headerTintColor: navStyle.header.tintColor,
            headerTitleStyle: navStyle.header.titleStyle,
            headerTitle: apiName,
            tabBarActiveTintColor: navStyle.tab.activeColor,
            tabBarInactiveTintColor: navStyle.tab.inactiveColor,
            tabBarStyle: navStyle.tab.style,
            tabBarLabel: () => null,
            tabBarIcon: ({ focused, color, size }) => {
              size = 28
              if(route.name === 'Home')
                return <Ionicons name={focused ? 'md-home' : 'md-home-outline'} size={size} color={color} />
              else if(route.name === 'User')
                return <FontAwesome5 name={focused ? 'user-alt' : 'user'} size={size} color={color} />
              else if(route.name === 'SignPanel')
                return <SimpleLineIcons name="login" size={size} color={color} />
              else if(route.name === 'Products')
                return <Ionicons name={focused ? 'search' : 'search-outline'} size={size} color={color} />
              else if(route.name === 'NewProduct')
                return <Ionicons name={focused ? 'add-circle' : 'add-circle-outline'} size={size+8} color={color} />
              else if(route.name === 'FavouriteProducts')
                return <Ionicons name={focused ? 'heart' : 'heart-outline'} size={size} color={color} />
            }
          })}
        >
          <Tab.Screen
            name="Products"
            component={ProductsScreen}
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
          { isLogged ?
            <Tab.Screen
              name="User"
              component={UserScreen}
              options={() => {
                if(newNotifications > 0)
                  return { tabBarBadge: newNotifications }
              }}
            />
            :
            <Tab.Screen
              name="SignPanel"
              component={SignPanel}
            />
          }
        </Tab.Navigator>
      </NavigationContainer>
    )
  else
    return (
      <Box>
        <Center
          height={vh(100)}
          width={vw(100)}
        >
          <Spinner color={colors().backgroundColor} size="lg" />
          <Heading color={colors().backgroundColor}>
            Ładowanie..
          </Heading>
        </Center>
      </Box>
    )
}

export default Root