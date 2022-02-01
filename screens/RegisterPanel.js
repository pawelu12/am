import React, { useState } from 'react'
import { Box, Button, Center, Icon, Input, Toast, useToast } from 'native-base'
import { vw, vh } from 'react-native-css-vh-vw'
import { colors } from '../api/styles'
import { Text } from 'native-base'
import { useDispatch, } from 'react-redux'

import { signUp as signUpApi } from '../app/slices/apiSlice'
import LoginInput from '../comps/LoginInput'


const RegisterPanel = ({ navigation }) => {
  const [login, setLogin] = useState("")
  const [pass, setPass] = useState("")
  const [pass2, setPass2] = useState("")


  const [errors, setErrors] = useState({ login: false, pass: false, pass2: false })

  const dispatch = useDispatch()
  const toast = useToast()
  const toastContent = reg => {
    const title = `Błąd rejestracji'}`
    return {
      title,
      status: 'error',
      description: 'Proszę sprawdzić dane i spróbować ponownie'
    }
  }

  const signUp = () => {
    dispatch(signUpApi({ login, pass, pass2 }))
    if (login === 'admin' || pass != pass2) {
      setErrors({
        login: login.trim().length === 0 ? true : login.trim() === 'admin' ? true : false,
        pass: pass.trim().length < 5 ? true : false,
        pass2: pass2.trim().length < 5 ? true : pass2 !== pass ? true : false
      })
      toast.show(toastContent(true))
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
        <LoginInput placeholder="Powtórz hasło" pass onChangeText={setPass2} error={errors.pass2} />
        <Button
          style={{
            width: vw(75),
            marginTop: 10,
            height: 55,
            backgroundColor: colors().backgroundColor,
          }}
          onPress={() => signUp()}
        >
          <Text
            style={{
              fontSize: 23,
              color: colors().color,
              fontWeight: 'bold'
            }}
          >
            Zarejestruj
          </Text>
        </Button>
      </Center>
    </Box>
  )
}

export default RegisterPanel