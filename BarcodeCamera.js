import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button, Alert } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { vw, vh } from 'react-native-css-vh-vw'
import { useDispatch, useSelector } from 'react-redux'
import { setBarcode } from '../app/slices/apiSlice'

const BarcodeCamera = () => {
  const [hasPermission, setHasPermission] = useState(null)
  const scanned = useSelector(s => s.api.scanned)
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted')
    })()
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    dispatch(setBarcode(data))
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`)
  }

  if(hasPermission === false) {
    Alert.alert('Brak pozwolenia', 'Brak pozwolenia na odczyt z aparatu urządzenia')
  }

  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', width: vw(100), height: vh(100)}}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ position: 'absolute', width: vw(100), height: vh(48.4), left: 0, top: 0 }}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => dispatch(setBarcode(' '))} />}
    </View>
  )
}

export default BarcodeCamera