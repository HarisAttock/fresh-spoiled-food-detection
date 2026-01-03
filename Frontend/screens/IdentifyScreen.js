import React,{useContext} from "react";
import themeContext from "../config/themeContext";
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const IdentifyScreen = () => {
const theme = useContext(themeContext);
  const onSelectImage = async () => {
    Alert.alert(
      'Profile Picture',
      'Choose an option',
      [
        { text: 'Camera', onPress: onCamera },
        { text: 'Gallery', onPress: onGallery },
        { text: 'Cancel', onPress: () => {} },
      ]
    );
  };

  const onCamera = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status === 'granted') {
        const result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [16, 9],
        });

        if (!result.cancelled) {
          console.log('Camera result:', result.uri ? result.uri : result ? result.assets[0].uri : null);
          imageUpload(result.uri ? result.uri : result ? result.assets[0].uri : null);
        } else {
          console.log('Camera cancelled.');
        }
      } else {
        console.log('Camera permission denied');
      }
    } catch (error) {
      console.error('Error in onCamera:', error);
    }
  };

  const onGallery = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status === 'granted') {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [16, 9],
        });
        if (!result.cancelled) {
          console.log('Gallery result:', result.uri ? result.uri : result ? result.assets[0].uri : null);
          imageUpload(result.uri ? result.uri : result ? result.assets[0].uri : null);
        } else {
          console.log('Gallery cancelled.');
        }
      } else {
        console.log('Gallery permission denied');
      }
    } catch (error) {
      console.error('Error in onGallery:', error);
    }
  };

  const imageUpload = async (imagePath) => {
    try {
      if (!imagePath) {
        console.log('Image path is undefined. Skipping image upload.');
        return;
      }
      const imageData = new FormData();
      imageData.append('image', {
        uri: imagePath,
        name: 'image.png',
        type: 'image/png',
      });
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      console.log('Image data:', imageData);

      const response = await axios.post('http://c1c5-154-198-103-214.ngrok.io/predict', imageData, config);

      console.log('Image upload successful:', response.data);
      const { predicted_class } = response.data;
      console.log('Predicted Class:', predicted_class);
      Alert.alert('Prediction Result', `Predicted Class: ${predicted_class}`);
    } catch (error) {
      console.error('Failed to upload image:', error);
    }
  };

  return (
<View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={require('../assets/logos.jpg')} style={styles.fruitImage} />
      <Text style={[styles.fruitText,{color: theme.color}]}>Click the button to start identifying Fruit and Vegetable</Text>
      <TouchableOpacity style={styles.btnStyle} activeOpacity={0.8} onPress={onSelectImage}>
        <Text style={styles.btnTextStyle}>Select your image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, 
  },
  fruitImage: {
    width: 160,
    height: 150,
    borderRadius: 75,
    marginBottom: 60,
  },
  fruitText: {
    fontSize: 11,
    marginBottom: 30,
    textAlign: 'center',
  },
  btnStyle: {
    backgroundColor: 'blue',
    width: '70%',
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    
  },
  btnTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default IdentifyScreen;
