import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Box, Center, Heading, Spinner } from 'native-base'
import { vh, vw } from 'react-native-css-vh-vw'

import { colors } from '../api/styles'
import DrawerNavigator from '../navigation/drawer/'


const Root = () => {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 2000)
  }, [])

  if (loaded)
    return (
      <NavigationContainer>
        <DrawerNavigator />
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