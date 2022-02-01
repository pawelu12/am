import { Ionicons } from '@expo/vector-icons'
import { Box, Text, HStack, Icon, Image, Input, VStack, Toast, Pressable } from 'native-base'
import React, { useState } from 'react'
import { colors } from '../api/styles'
import { useSelector } from 'react-redux'
import { vw } from 'react-native-css-vh-vw'
import { TouchableWithoutFeedback } from 'react-native'

const ProductsList = ({ navigation }) => {
  const products = useSelector(s => s.product.products)
  const [ filterProducts, setFilterProducts] = useState(products)
  const [ filter, setFilter ] = useState('')

  const searchProducts = () => {
    let newFilterProducts = []

    if(filter !== '') {
      for(const el of products)
        if(el.name.includes(filter))
          newFilterProducts.push(el)
    }
    else
      newFilterProducts = products

    setFilterProducts(newFilterProducts)
  }

  return (
    <Box>
      <Input
        w={{ base: '100%', md: "30%" }}
        InputRightElement= {<Icon as={<Ionicons name="search-outline" />} size={35} ml="3" style={{ marginRight: 15 }} />}
        style={{ borderColor: colors().backgroundColor, fontSize: 24, paddingLeft: 15 }}
        placeholder="Wyszukaj.."
        onChangeText={setFilter}
        onChange={searchProducts}
      />
      <VStack space={4} style={{ paddingTop: 10 }}>
        {filterProducts.map(el =>
          <Pressable key={`product-${el.id}`} onPress={() => { navigation.navigate('Products', { screen: 'Product' }) }}>
            <HStack space={2} alignItems="flex-start">
              <Image
                size="xs"
                source={{ uri: el.photo }}
                alt={el.name}
                resizeMode={"contain"}
                style={{ marginLeft: 5}}
              />
              <Box>
                <Text style={{ marginTop: el.name.length > 60 ? 0 : 10, width: vw(80) }}>{el.name}</Text>
              </Box>
            </HStack>
          </Pressable>
        )}
      </VStack>
    </Box>
  )
}

export default ProductsList