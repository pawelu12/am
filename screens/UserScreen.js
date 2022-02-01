import { Box, Button } from 'native-base'
import { colors } from '../api/styles'
import React from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import SignPanel from './SignPanel'
import { signOut } from '../app/slices/apiSlice'




const UserScreen = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(signOut({}))
  }
  const isLogged = useSelector(s => s.api.isLogged)

  if (isLogged)
    return (
      <View>
        <Box style={{
          flex: 1,
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center"
        }
        }>
          <Button style={{
            height: 55,
            marginTop: 20,
            backgroundColor: colors().backgroundColor
          }}
            onPress={() => logOut()}
          >
            <Text style={{
              fontSize: 24,
              color: colors().color
            }}>
              Wyloguj
            </Text>
          </Button>
        </Box>
      </View>
    )
  else
    return <SignPanel />
}

export default UserScreen