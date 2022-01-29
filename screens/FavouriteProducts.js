import {HStack, Box, FlatList, Image, Text } from 'native-base'
import React from 'react'
import { colors } from '../api/styles'
import { useSelector } from 'react-redux'

const FavouriteProducts = () => {
  const data = useSelector(s => s.product.products.filter(el => el.id === 1 || el.id === 3 || el.id === 5))

  return (
    <Box
      w={{ base: '100%' }}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth={0.3}
            borderColor={colors().backgroundColor}
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={3} justifyContent="flex-start">
              <Image
                size="md"
                source={{ uri: item.photo }}
                alt={item.name}
                resizeMode={"contain"}
                style={{ marginLeft: 5}}
              />
              <Text style={{ marginTop: 15, paddingRight: 85 }}>{item.name}</Text>
            </HStack>
          </Box>
        )}
        keyExtractor={ item => `favourite-product-${item.id}`}
      />
    </Box>
  )
}

export default FavouriteProducts