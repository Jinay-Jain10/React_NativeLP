import { StatusBar } from 'expo-status-bar';
import React, {useState,useContext} from 'react';
import { 
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Pressable,
  Modal,
  Switch,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  View,
  Button,
  TextInput,
  Image, 
  ImageBackground, 
  Alert} from 'react-native';
import {Entypo} from "@expo/vector-icons";

  
import { UserContext } from './UserContext'; 
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const logoImage=require("./Images/user.png")

const Profile=()=>{
  const {user} =useContext(UserContext);


  const [profileImage,setProfileImage]=useState(null);
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

    return(
        <View style={styles.container}>
          <View>
          <TouchableOpacity style={styles.image} onPress={openImagePicker}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <View style={styles.placeholder}>
              <Entypo name="user" size={40} color="white" />
            </View>
          )}
        </TouchableOpacity>
          </View>
          
          {/* <Image style={styles.image} source={logoImage}/> */}
          <View style={{paddingTop:20}}>
          <Text style={{fontSize:20,fontWeight:700,color:'black',paddingTop:20}}>Name:</Text>
          <TextInput style={styles.textInput} >{user.name}</TextInput>
          <Text style={{fontSize:20,fontWeight:700,color:'black',paddingTop:20}}>Email:</Text>
          <TextInput style={styles.textInput} >{user.email}</TextInput>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      paddingVertical:50,
    },
    image:{
      height:100,
      width:100,
      borderRadius:20,
      backgroundColor:'black'
    },
    textInput:{
      fontSize:20,
      borderWidth:2,
      borderColor:'black',
      marginBottom:20,
      marginTop:10,
      borderRadius:10,
      height:60,
      width:300,
      paddingHorizontal:10,
      color:"gray",
    },
});   

export default Profile;