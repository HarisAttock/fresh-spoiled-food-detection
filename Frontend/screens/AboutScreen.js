import React,{useContext} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking,ScrollView } from 'react-native';
import themeContext from '../config/themeContext';
const AboutScreen = () => {
  const theme = useContext(themeContext);
  const handleLinkPress = () => {
    const url = "https://www.betterhealth.vic.gov.au/health/healthyliving/fruit-and-vegetables";
    Linking.openURL(url);
  };

  return (
    <ScrollView>
    <View style={[styles.container, {backgroundColor: theme.background}]}>
    <Text style={[styles.title, {color: theme.color}]}>Fresh and Spoiled Food Detection</Text>
      <Text style={styles.description}>
        This project focuses on the detection of fresh and spoiled food items using computer vision techniques. It aims to provide a solution for identifying food products that have deteriorated in quality and may not be safe for consumption.
      </Text>
      <TouchableOpacity onPress={handleLinkPress}>
        <Text style={styles.link}>
          Learn more about the Fresh and Spoiled Food Detection project
          <Text style={styles.linkText}> here</Text>.
        </Text>
      </TouchableOpacity>
      <Text style={styles.title}>How to Use</Text>
      <Text style={styles.description}>
        To use this app, you need to log-in or sign-up. After completing the registration process, you will see a message indicating successful app opening. In the Home, you can view the available food items. If you want to check a specific food item, simply tap on it. For providing feedback, go to the Support in the Drawer menu. You can also find more information about the system in the About.
      </Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    backgroundColor: 'aqua', 
    color: 'black',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 32,
    textAlign: 'center',
    backgroundColor: 'pink', 
    paddingVertical: 8,
    borderRadius: 8,
  },
  link: {
    fontSize: 16,
    textAlign: 'center',
    backgroundColor: 'pink', 
    paddingVertical: 8,
    marginBottom: 30,
    borderRadius: 8,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
export default AboutScreen;
