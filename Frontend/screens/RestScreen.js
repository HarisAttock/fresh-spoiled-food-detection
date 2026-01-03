import React, { useState } from 'react';
import {  View, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {auth} from '../firebase/firebase.config';
import {sendPasswordResetEmail } from "firebase/auth";
const RestScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRest = () => {
 if(email!=null)
 {
    sendPasswordResetEmail(auth, email)
    .then(() => {
        alert("password reset email has been sent successfully");
        navigation.navigate("Logins");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });  
 }
 else
 {
    alert("please enter a valid email");
 }
  };
  return (
    <View style={styles.container}>
      <Text>
        <Text style={{fontSize:35, color:"#7d7d7d",lineHeight:45,fontWeight :"bold"}}>Reset your Password </Text>
      </Text>
      <View style={{ width: '70%',marginBottom:19,padding: 6,borderWidth: 2,borderRadius: 25, flexDirection:'row', justifyContent: 'space-between', borderColor: email.length > 20 ? 'red' : 'black'}}>
        <TouchableOpacity>
        <Feather name="at-sign" size={15}
          color="black"
          style={{marginTop: 7}}
          /> 
        </TouchableOpacity>
        <TextInput
          style={{ flex: 1 }}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </View>          
     <TouchableOpacity
    style={styles.button}
    onPress={() => handleRest()}
      color="blue"><Text style={{color: 'white',fontStyle: 'italic',fontSize: 16, textAlign: 'center'}}>Reset Password</Text></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop:-200,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"skyblue",
  },
  button: {
    alignContent:'center',
    justifyContent:'center',
    borderWidth: 1,
    height: '4%',
    marginTop: 8,
    width: '50%',
    textAlign: 'center',
    borderRadius: 20,
    borderColor: 'white',
    backgroundColor:'green',
  },
});
export default RestScreen;