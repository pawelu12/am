import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../tabs'
import { colors as appColors } from '../../api/styles'
import { navStyle } from '../../api/styles'
import { apiName } from '../../api/config'

const styles = {
  header: {
    backgroundColor: appColors().backgroundColor

  }
}
const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  return (
    <DrawerContentScrollView {...props}  >
      <DrawerMenu {...props} />
      <DrawerItemList state={state} {...rest} />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home" drawerContent={DrawerMenuContainer} 
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
        if (route.name === 'HomePage')
            return <Ionicons name={focused ? 'md-home' : 'md-home-outline'} size={size} color={color} />
        else if (route.name === 'User')
            return <FontAwesome5 name={focused ? 'user-alt' : 'user'} size={size} color={color} />
        else if (route.name === 'SignPanel')
            return <SimpleLineIcons name="login" size={size} color={color} />
        else if (route.name === 'Products')
            return <Ionicons name={focused ? 'search' : 'search-outline'} size={size} color={color} />
        else if (route.name === 'NewProduct')
            return <Ionicons name={focused ? 'add-circle' : 'add-circle-outline'} size={size + 18} color={color} />
        else if (route.name === 'FavouriteProducts')
            return <Ionicons name={focused ? 'heart' : 'heart-outline'} size={size} color={color} />
    }
})} >
    <Drawer.Screen name="Home" component={TabNavigator} />
  </Drawer.Navigator>
)

export default DrawerNavigator
