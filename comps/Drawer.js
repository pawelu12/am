import React from 'react'
import { colors, navStyle } from '../api/styles'
import { apiName } from '../api/config'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useSelector } from 'react-redux'

import Bottom from './Bottom'
import SignPanel from '../screens/SignPanel'
import UserScreen from '../screens/UserScreen'
import { Pressable, Text, View } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { Alert } from 'react-native'

const Drawer = createDrawerNavigator()

const DrawerNav = () => {
  const isLogged = useSelector(s => s.api.isLogged)

  return (
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerStyle: navStyle.header.style,
          headerTintColor: navStyle.header.tintColor,
          headerTitleStyle: navStyle.header.titleStyle,
          headerTitle: apiName,
          drawerActiveBackgroundColor: colors().backgroundColor,
          drawerActiveTintColor: colors().color
        }}
      >
        <Drawer.Screen
          name="HomeScreen"
          component={Bottom}
          options={({ navigation }) => ({
            headerRight: () => {
              if(navigation && navigation.getState() && navigation.getState().routes[0] && navigation.getState().routes[0].state)
                if(navigation.getState().routes[0].state.index === 0)
                  return <Pressable style={{ marginRight: 10 }} onPress={() => Alert.alert("wyszukiwarka po kodzie - ")}><Ionicons name="barcode-outline" color="white" size={32} /></Pressable>
            }
          })}
        />
        { isLogged ?
          <Drawer.Screen
            name="User"
            component={UserScreen}
            options={{
              drawerLabel: 'Panel użytkownika'
            }}
          />
          :
          <Drawer.Screen
            name="SignPanel"
            component={SignPanel}
            options={{
              title: 'Zaloguj/Zarejestruj'
            }}
          />
        }
      </Drawer.Navigator>
    )
  }

export default DrawerNav