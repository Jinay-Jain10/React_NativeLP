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
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile=()=>{
  const {user,setUser} =useContext(UserContext);
  const logoImage=user.profileImage;



  const [profileImage,setProfileImage]=useState(null);
  const openImagePicker = async () => {
    // Request permission to access media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }
  
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    };
  
    const result = await ImagePicker.launchImageLibraryAsync(options);
  
    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

    return(
        <View style={styles.container}>
          <View>
          <TouchableOpacity onPress={openImagePicker} style={styles.image} >
          {user.image ? (
            <Image source={{ uri: user.image }} style={styles.image} />
          ) : (
            <View style={styles.image}>
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

          <View style={{justifyContent:'center'}}>
            <TouchableOpacity style={{paddingVertical:20,justifyContent:'center'}} title="Change Profile Picture" onPress={openImagePicker}>
              <Text style={styles.button}>Edit Profile Picture</Text>
            </TouchableOpacity>
          </View>
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
    button:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#8c7bba',
      width:150,
      height:40,
      borderRadius:20,
      marginLeft:70,
      paddingHorizontal:15,
      paddingVertical:10,
      fontWeight:'700',
      color:'white'
    }
});   

export default Profile;