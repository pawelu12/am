import React, { useState } from 'react'
import { Box, Input, Center, Select, Button, Image, Text } from 'native-base'
import { vw, vh } from 'react-native-css-vh-vw'
import { colors } from '../api/styles'
import { useSelector } from 'react-redux'
import { Alert } from 'react-native'
import SimpleImagePicker from './ImagePicker'

const NewProductScreen = () => {
  const [ name, setName ] = useState('')
  const [ barcode, setBarcode ] = useState('')
  const [ company, setCompany ] = useState('')
  const [ photo, setPhoto ] = useState(null)
  const [ file, setFile ] = useState({})

  const companies = useSelector(s => s.company.companies)

  const InfoInput = ({ placeholder, setText }) => {
    const [value, setValue] = useState('')

    return (
      <Input
        placeholder={placeholder}
        w={{
          base: '75%',
          md: '25%'
        }}
        onChange={() => setText(value)}
        value={value}
        onChangeText={setValue}
        fontSize={18}
        style={{
          marginBottom: 8,
          borderColor: colors().backgroundColor,
        }}
      />
    )
  }
  const CompaniesSelect = () => (
    <Select 
      mt={1} 
      w={{ base: '75%', md: '25%' }} 
      accessibilityLabel="Wybierz Firmę" 
      selectedValue={company}
      placeholder="Wybierz firmę" 
      onValueChange={itemValue => setCompany(itemValue)}
      borderColor={colors().backgroundColor}
      fontSize={18}
    >
      {companies.map(el => 
        <Select.Item 
          key={`company-select-item-${el.id}`} 
          label={el.name} 
          value={el.name}
          color={colors().backgroundColor}
        /> 
      )}
    </Select>
  )


  return (
    <Box 
      width={vw(100)}
      height={vh(100)}
      alignItems="center"
      paddingTop="10"
    >
        {photo &&
          <Image 
            source={{ uri: photo }}
            style={{ width: 150, height: 100, marginBottom: 20 }}
            alt="Zdjęcie podglądowe produktu"
          />
        }
        <InfoInput placeholder="Nazwa produktu" setText={setName} />
        <InfoInput placeholder="Kod kreskowy" setText={setBarcode} />
        <CompaniesSelect />
        <SimpleImagePicker
          w={{ base: '75%' }}
          h={{ base: '60px' }}
          backgroundColor={colors().backgroundColor}
          _text={{ fontSize: 24 }}
          style={{ marginTop: 10 }}
          setImage={setPhoto}
        />
        <Button 
          onPress={() => Alert.alert(`Nazwa: ${name} | Kod kreskowy: ${barcode} | Firma: ${company}`)}
          _text={{ fontSize: 28, fontWeight: 'bold' }}
          style={{
            position: 'absolute',
            bottom: 98,
            width: vw(100),
            height: 70,
            backgroundColor: colors().backgroundColor
          }}
        >
          Dodaj produkt
        </Button>
    </Box>    
  )
}

export default NewProductScreen