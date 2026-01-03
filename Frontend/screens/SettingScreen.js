import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../config/themeContext';
const SettingScreen = ({ navigation }) => {
  const theme = useContext(themeContext);
  const [Mode, setMode] = useState(false);
  const [language, setLanguage] = useState('English');
  const handleLanguageChange = () => {
    if (language === 'English') {
      setLanguage('Spanish');
    } else {
      setLanguage('English');
    }
  };
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={[styles.title, {color: theme.color}]}></Text>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Dark Mode</Text>
        <Switch
          value={Mode}
          onValueChange={(value) => { 
            setMode((value) => !value)
            EventRegister.emit("changeTheme" , value);
          }}/>
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText1}>App Language</Text>
        <TouchableOpacity style={styles.languageButton} onPress={handleLanguageChange}>
          <Text style={styles.languageButtonText}>{language}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SettingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', 
  },
  darkContainer: {
    backgroundColor: '#333', 
  },
  title: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  darkTitle: {
    color: '#fff',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  optionText: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 5,
    marginRight: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 90,
  },
  optionText1: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 5,
    marginRight: 10,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 55,
    marginBottom: 150,
  },
  languageButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginRight: 32,
    marginBottom: 140,
  },
  languageButtonText: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 16,
  },
});






