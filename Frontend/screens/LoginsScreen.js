import React, { useState} from 'react';
import { Image, View, TextInput, Text, TouchableOpacity, StyleSheet, Alert, Share } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
const LoginsScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("User login successfully")
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
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this app',
        url: 'https://example.com',
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "skyblue", height: 180 }}>
        <Image style={{ height: 125, width: 136, marginTop: 69, borderRadius: 500 }} source={require("../assets/logos.jpg")}></Image>
      </View>
      <Text style={{ fontSize: 15, color: "#7d7d7d", marginTop: 10, marginBottom: 1, lineHeight: 25, fontWeight: "bold" }}>Enter user Email</Text>
      <View style={{ width: '70%', marginBottom: 19, padding: 6, borderWidth: 2, borderRadius: 25, flexDirection: 'row', justifyContent: 'space-between', borderColor: email.length > 25 ? 'red' : 'black' }}>
        <TouchableOpacity style={{ marginTop: 5 }}>
          <Feather name="at-sign" 
          size={16} color="black" 
          style={{ marginTop: 2 }} />
        </TouchableOpacity>
        <TextInput
          style={{ flex: 1 }}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </View>
      <Text style={{ fontSize: 15, color: "#7d7d7d", marginTop: 10, marginBottom: 7, lineHeight: 15, fontWeight: "bold" }}> Enter user password</Text>
      <View style={{ width: '70%', marginBottom: 19, padding: 6, borderWidth: 2, borderRadius: 25, flexDirection: 'row', justifyContent: 'space-between', borderColor: password.length > 10 ? 'red' : 'black' }}>
        <TouchableOpacity style={{ marginTop: 5 }}>
          <AntDesign
            name="lock"
            color="black"
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
      <TouchableOpacity 
        onPress={() => navigation.navigate('Rest')}
        color="green">
        <Text style={{ marginBottom: 8, marginLeft: 100,color : "black" }}>Forget Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLogin()}
        color="blue">
        <Text style={{ color: 'white', fontStyle: 'italic', fontSize: 16, textAlign: 'center' }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.click}
        onPress={() => navigation.navigate('Signup')}
        color="green">
        <Text style={{ color: 'white', fontStyle: 'italic', fontSize: 16, textAlign: 'center', }}>Signup</Text>
      </TouchableOpacity>
        <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:"12%",}}>
      <TouchableOpacity onPress={onShare}>
      <EvilIcons name="sc-facebook" size={36}
       color="navy"
      style={{marginRight: 35}}/>  
      </TouchableOpacity>
       <TouchableOpacity  onPress={onShare} >
      <EvilIcons
      name="sc-google-plus"
      color="red"
       style={{marginLeft: 3}}
      size={30}
      /></TouchableOpacity>
     <TouchableOpacity  onPress={onShare}>
     <EvilIcons
      name="sc-twitter"
      color="blue"
       style={{marginLeft: 35}}
      size={30}
      /></TouchableOpacity>
    </View>
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
   click: {
   alignContent:'center',
    justifyContent:"center",
    borderWidth: 1,
    height: "4%",
    marginTop: 8,
    width: "50%",
    textAlign: "center",
    borderRadius: 20,
    borderColor: "white",
    backgroundColor:"green",
},
  button: {
    alignContent:'center',
    justifyContent:"center",
    borderWidth: 1,
    height: "4%",
    marginTop: 8,
    width: "50%",
    textAlign: "center",
    borderRadius: 20,
    borderColor: "white",
    backgroundColor:"green",
  },
});
export default LoginsScreen;


