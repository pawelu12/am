import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import HomeScreen from '../../screens/HomeScreen'
import { FontAwesome5, Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import UserScreen from '../../screens/UserScreen'
import SignPanel from '../../screens/SignPanel'
import { navStyle } from '../../api/styles'
import { apiName } from '../../api/config'
import NewProductScreen from '../../screens/NewProductScreen'
import FavouriteProducts from '../../screens/FavouriteProducts'
import ProductsList from '../../comps/ProductsList'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Pressable } from 'react-native'


const Tab = createBottomTabNavigator()


const TabNavigator = () => {
    const isLogged = useSelector(s => s.api.isLogged)
    const newNotifications = useSelector(s => s.api.loggedPerson.newNotifications)
    return <Tab.Navigator
        initialRouteName="HomePage"
        screenOptions={({ route }) => ({
            headerStyle: {height:0},
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
        })}
    >
        <Tab.Screen
            name="Products"
            component={ProductsList}
            // options={{
            //     headerRight: () => 
            // }}
        />
        <Tab.Screen
            name="HomePage"
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
        {
            isLogged ?
                <Tab.Screen
                    name="User"
                    component={UserScreen}
                    options={() => {
                        if (newNotifications > 0)
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
}


export default TabNavigator
