import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { colors } from '../api/styles'
import { vw, vh } from 'react-native-css-vh-vw'
import { Box, Text } from 'native-base'

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
      Lorem Ipsum..
    </Text>
    <Text
      fontSize="xl"
      style={{
        padding: 15
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Nunc sed id semper risus in hendrerit gravida rutrum. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Tempor id eu nisl nunc mi ipsum faucibus vitae. Eu facilisis sed odio morbi quis commodo. Enim lobortis scelerisque fermentum dui faucibus in ornare. Ac tortor vitae purus faucibus. Tincidunt dui ut ornare lectus. Et netus et malesuada fames ac turpis.
    </Text>
  </Box>
)

export default HomeScreen