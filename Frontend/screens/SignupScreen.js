import React, { useState } from 'react';
import {  View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import {createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase/firebase.config';
const SignupScreen = ({ navigation }) => {
  const [Username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Mobile, setMobile] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("User signup successfully")
      navigation.navigate("Drawer");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  }); 
  }
 
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <View style={styles.container}>
      <Text>
        <Text style={{fontSize:35, color:"#7d7d7d", marginTop:14,lineHeight:60,fontWeight : "bold"}}> Sign Up </Text>
      </Text>
      <View style={{ width: '70%',marginBottom: 19,padding: 6,borderWidth: 2,borderRadius: 25, flexDirection:'row', justifyContent: 'space-between', borderColor: Username.length > 18 ? 'red' : 'black'}}>
        <TouchableOpacity>
          <FontAwesome
            name="user"
            color="black"
            style={{marginTop: 5}}
            size={17}
          />
        </TouchableOpacity>
        <TextInput
          style={{ flex: 1 }}
          placeholder="Username"
          value={Username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
      </View>
      <View style={{ width: '70%',marginBottom: 19,padding: 6,borderWidth: 2,borderRadius: 25, flexDirection:'row', justifyContent: 'space-between', borderColor: email.length > 25 ? 'red' : 'black'}}>
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

      <View style={{ width: '70%',marginBottom: 19,padding: 6,borderWidth: 2,borderRadius: 25, flexDirection:'row', justifyContent: 'space-between', borderColor: password.length > 10 ? 'red' : 'black'}}>
        <TouchableOpacity>
          <AntDesign
            name="lock"
            color="black"
            style={{marginTop: 5}}
            size={18}
          />
        </TouchableOpacity>
        <TextInput
            style={{ flex: 1 }}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
        />
         <TouchableOpacity style={{ marginLeft: -30, marginTop: 4 }} onPress={togglePasswordVisibility}>
          {passwordVisible ? (
            <Ionicons name="eye" 
            size={20} 
            color="black"
            />
          ) : (
            <FontAwesome name="eye-slash" 
            size={20}
            color="black"
            />
          )}
        </TouchableOpacity>
      </View>           
       <View style={{ width: '70%',marginBottom: 19,padding: 6,borderWidth: 2,borderRadius: 25, flexDirection:'row', justifyContent: 'space-between',borderColor: Mobile.length > 11 ? 'red' : 'black'}}>
    <TouchableOpacity><EvilIcons
      name="user"
      color="black"
      style={{marginTop: 6}}
      size={22}
      />
      </TouchableOpacity>
      <TextInput
      style={{ flex: 1 }}
        placeholder="Mobile"
        value={Mobile}
        onChangeText={setMobile}
        autoCapitalize="none"
      />
      </View>
     <TouchableOpacity
    style={styles.button}
    onPress={handleSignup}
      color="blue"><Text style={{color: 'white',fontStyle: 'italic',fontSize: 16, textAlign: 'center'}}>Signup</Text></TouchableOpacity>
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
export default SignupScreen;