import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import SignPanel from './SignPanel'

const UserScreen = () => {

  const isLogged = useSelector(s => s.api.isLogged)

  if(isLogged)
    return (
      <View>
        <Text>
          Dane o użytkowniku
        </Text>
      </View>
    )
  else
    return <SignPanel />
}

export default UserScreen