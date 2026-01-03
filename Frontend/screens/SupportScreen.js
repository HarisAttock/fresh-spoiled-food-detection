import React, { useState,useContext } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';
import themeContext from '../config/themeContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const SupportScreen = () => {
  const theme = useContext(themeContext);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const sendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = { text: message, sender: 'user' };
      const responseMessage = { text: 'Thank you for your message! We will get back to you soon.', sender: 'support' };
      setMessages([...messages, newMessage, responseMessage]);
      setMessage('');
    }
  };
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
    <Text style={[styles.header, {color: theme.color}]}>feedback</Text>
      <ScrollView style={styles.messageBox}>
        {messages.map((msg, index) => (
          <View key={index} style={styles.messageContainer}>
            <Text
              style={[
                styles.messageText,
                msg.sender === 'support' ? styles.supportMessage : styles.userMessage,
              ]}
            >
              {msg.text}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your message"
          value={message}
          onChangeText={text => setMessage(text)}
        />
        <TouchableOpacity onPress={sendMessage}>
          <MaterialCommunityIcons name="send-circle" size={44} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 12,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'pink', 
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  messageBox: {
    flex: 1,
    marginBottom: 20,
  },
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
  },
  userMessage: {
    backgroundColor: '#ccc',
  },
  supportMessage: {
    backgroundColor: '#e6f3ff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
  },
});
export default SupportScreen;


