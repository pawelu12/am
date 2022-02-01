import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Box, Center, Heading, Pressable, Spinner, View, Text} from 'native-base'
import { vh, vw } from 'react-native-css-vh-vw'

import HomeScreen from '../screens/HomeScreen'
import { FontAwesome5, Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import UserScreen from '../screens/UserScreen'
import SignPanel from '../screens/SignPanel'
import { navStyle } from '../api/styles'
import { apiName } from '../api/config'
import NewProductScreen from '../screens/NewProductScreen'
import FavouriteProducts from '../screens/FavouriteProducts'
import { colors } from '../api/styles'
import ProductsList from './ProductsList'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerNav from './Drawer'

const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const com1 = () => (
  <View><Text>eloelo</Text></View>
)

const com2 = () => (
  <View><Text>eloelo2</Text></View>
)

const com3 = () => (
  <View><Text>eloelo3</Text></View>
)

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
        <DrawerNav />
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