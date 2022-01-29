import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import { Button } from 'native-base'
import * as ImagePicker from 'expo-image-picker'

export default SimpleImagePicker = ({ setImage, w, h, _text, backgroundColor, style }) => {
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Button
      onPress={pickImage}
      w={w}
      h={h}
      style={style}
      _text={_text}
      backgroundColor={backgroundColor}
    >
      Dodaj zdjęcie
    </Button>
  );
}