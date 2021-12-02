import React from 'react'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'

import Root from './comps/Root'
import { colors } from './api/styles'

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" backgroundColor={colors().backgroundColor} />
    <NativeBaseProvider>
      <Root />
    </NativeBaseProvider>
  </Provider>
)

export default App