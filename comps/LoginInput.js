import React, { useState } from 'react'
import { Icon, Input } from 'native-base'
import { colors } from '../api/styles'
import { MaterialIcons } from '@expo/vector-icons'


const LoginInput = ({ placeholder, onChangeText, error, pass }) => {
    const [hide, setHide] = useState(true)

    return (
        <Input
            placeholder={placeholder}
            w={{
                base: '75%',
                md: '25%'
            }}
            variant="underlined"
            fontSize={18}
            type={!pass ? 'text' : hide ? 'password' : 'text'}
            style={{
                marginBottom: 8,
                borderColor: colors().backgroundColor,
                backgroundColor: error ? '#ffdddd' : 'transparent'
            }}
            onChangeText={onChangeText}
            InputLeftElement={!pass && <Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="gray" />}
            InputRightElement={pass && <Icon as={<MaterialIcons onPress={() => setHide(!hide)} name={hide ? "visibility-off" : "visibility"} />} size={5} mr="2" color="gray" />}
        />
    )
}

export default LoginInput