import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { doc, updateDoc, setDoc, getDoc } from "firebase/firestore";
import themeContext from "../config/themeContext";
import { auth, db } from '../firebase/firebase.config';
const ProfileScreen = () => {
  const theme = useContext(themeContext);
  const [name, setName] = useState(null);
  const [bio, setBio] = useState(null);
  const [email, setEmail] = useState(null);
  const [contact, setContact] = useState(null);
  useEffect(() => {
    const readData = async () => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setName(docSnap.data().Name);
        setBio(docSnap.data().Bio);
        setEmail(docSnap.data().Email);
        setContact(docSnap.data().Phone);
      }
    };
    readData();
  }, []);

  const saveData = async () => {
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      Name: name,
      Bio: bio,
      Email: email,
      Phone: contact,
    })
      .then(() => {
        alert("Profile Updated Successfully");
      });
  };
  const UpdateProfile = async () => {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await updateDoc(docRef, {
        Name: name,
        Bio: bio,
        Email: email,
        Phone: contact,
      })
        .then(() => {
          alert("Profile Updated Successfully");
        })
        .catch((error) => {
          console.error("Error updating document:", error);
        });
    } else {
      await setDoc(docRef, {
        Name: name,
        Bio: bio,
        Email: email,
        Phone: contact,
      })
        .then(() => {
          alert("Profile Created Successfully");
        })
        .catch((error) => {
          console.error("Error creating document:", error);
        });
    }
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image
        source={require("../assets/logos.jpg")}
        style={styles.profileImage}
      />
      <View style={styles.action}>
        <Text style={styles.infoLabel}>Name:</Text>
        <TextInput
          onChangeText={(text) => setName(text)}
          style={styles.textInput}
          value={name}
        />
      </View>
      <View style={styles.action}>
        <Text style={styles.infoLabel}>Bio:</Text>
        <TextInput
          onChangeText={(text) => setBio(text)}
          style={styles.textInput}
          value={bio}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.action}>
        <Text style={styles.infoLabel}>Email:</Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          style={styles.textInput}
          value={email}
        />
      </View>
      <View style={styles.action}>
        <Text style={styles.infoLabel}>Contact:</Text>
        <TextInput
          onChangeText={(text) => setContact(text)}
          style={styles.textInput}
          value={contact}
        />
      </View>
      {name === null && (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => saveData()}>
          <Text style={styles.buttonText}>Save Data</Text>
        </TouchableOpacity>
      )}
      {name !== null && (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => UpdateProfile()}>
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  profileImage: {
    backgroundColor: "#fff",
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 55,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "red",
    marginBottom: 16,
  },
  infoLabel: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 5,
    fontWeight: "bold",
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 3,
    flex: 1,
    marginLeft: 8,
  },
  button: {
    backgroundColor: 'blue',
    height: 50,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default ProfileScreen;
