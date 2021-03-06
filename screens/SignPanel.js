import React, { useState } from 'react'
import { Box, Button, Center, Icon, Input, Toast, useToast } from 'native-base'
import { vw, vh } from 'react-native-css-vh-vw'
import { colors } from '../api/styles'
import { Text } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import LoginInput from '../comps/LoginInput'
import { signIn as signInApi, signUp as signUpApi } from '../app/slices/apiSlice'
import { MaterialIcons } from '@expo/vector-icons'
import { fetchData } from '../api/actions'

const SignPanel = ({ navigation }) => {
  const [login, setLogin] = useState("")
  const [pass, setPass] = useState("")

  const [errors, setErrors] = useState({ login: false, pass: false, pass2: false })

  const dispatch = useDispatch()
  const toast = useToast()
  const toastContent = reg => {
    const title = `Błąd logowania'}`
    return {
      title,
      status: 'error',
      description: 'Proszę sprawdzić dane i spróbować ponownie'
    }
  }

  const isLogged = useSelector(s => s.api.isLogged)

  const signIn = () => {
    fetchData(`user/signin/${login}/${pass}`)
    dispatch(signInApi({ login, pass }))
    if (login !== 'admin' || pass !== 'admin') {
      setErrors({
        login: login.trim().length < 5 ? true : false,
        pass: pass.trim().length < 5 ? true : pass !== 'admin' ? true : false
      })
      toast.show(toastContent(false))
    }
  }

  return (
    <Box>
      <Center
        width={vw(100)}
        height={vh(60)}
      >
        <LoginInput placeholder="Login" onChangeText={setLogin} error={errors.login} />
        <LoginInput placeholder="Hasło" pass onChangeText={setPass} error={errors.pass} />
        <Button
          style={{
            width: vw(75),
            marginTop: 10,
            height: 55,
            backgroundColor: colors().backgroundColor,
          }}
          onPress={() => signIn()}
        >
          <Text
            style={{
              fontSize: 23,
              color: colors().color,
              fontWeight: 'bold'
            }}
          >
            Zaloguj
          </Text>
        </Button>
        <Text
          style={{
            fontSize: 18,
            marginTop: 10,
            color: colors().backgroundColor,
            fontWeight: 'bold'
          }}
          onPress={() => navigation.navigate('RegisterPanel')}
        >
          Zarejestruj
        </Text>
      </Center>
    </Box>
  )
}

export default SignPanel