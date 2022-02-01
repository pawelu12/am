import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { colors } from '../api/styles'
import { vw, vh } from 'react-native-css-vh-vw'
import { Box, Text } from 'native-base'

const Line = ({ fontWeight, padding, paddingLeft, value, children, style }) => (
  <Text
    fontSize="xl"
    style={{
      fontWeight: fontWeight ? fontWeight : 'normal',
      paddingRight: paddingLeft ? paddingLeft : 25,
      padding: padding ? 15 : 0,
      textAlign: 'right',
      ...style
    }}
  >
    { children || value }
  </Text>
)

const HomeScreen = () => (
  <Box
    style={{
      width: vw(100),
      height: vh(100)
    }}
  >
    <SliderBox 
      images={[
        'https://xaxa.cfolks.pl/projekt/slider/slide1.jpg',
        'https://xaxa.cfolks.pl/projekt/slider/slide2.jpg',
        'https://xaxa.cfolks.pl/projekt/slider/slide3.jpg',
        'https://xaxa.cfolks.pl/projekt/slider/slide4.jpg',
        'https://xaxa.cfolks.pl/projekt/slider/slide5.jpg',
      ]}
      dotColor={colors().backgroundColor}
      dotStyle={{
        width: 18,
        height: 8,
        borderRadius: 5
      }}
      paginatorBoxVerticalPadding={5}
      autoplay
      circleLoop
      style={{
        height: 300
      }}
    />
    <Text
      fontSize="5xl"
      style={{
        fontWeight: 'bold',
        textAlign: 'center'
      }}
    >
      Aplikacje Mobilne
    </Text>

    <Line paddingLeft={10} style={{ textAlign: 'left', paddingLeft: 15 }}>
      Aplikacja służy do znajdowania produktów wykonanych przez firmy, które stosują testowanie swoich wyrobów na zwierzętach. 
    </Line>

    <Line fontWeight={'bold'} paddingLeft={10} style={{ marginTop: 190 }}> Projekt został wykonany przez grupę 3IZ12A </Line>
    <Line paddingLeft={30}> Marcin Majchrzak </Line>
    <Line paddingLeft={30}> Damian Szabra </Line>
    <Line paddingLeft={30}> Paweł Wikło </Line>
    <Line paddingLeft={30}> Kacper Zieliński </Line>
  </Box>
)

export default HomeScreen