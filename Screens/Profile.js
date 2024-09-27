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
  Text,
  View,
  Button,
  TextInput,
  Image, 
  ImageBackground, 
  Alert} from 'react-native';
  import {Info} from './Signup'
 
const logoImage=require("./Images/user.png")

export default function Profile(navigation){
  const {email} = useContext(Info);

    return(
        <View style={styles.container}> 
          <Image style={styles.image} source={logoImage}/>
          <View style={{paddingTop:20}}>
          <Text style={{fontSize:20,fontWeight:700,color:'black',paddingTop:20}}>Name:</Text>
          <TextInput style={styles.textInput} >User</TextInput>
          <Text style={{fontSize:20,fontWeight:700,color:'black',paddingTop:20}}>Email:</Text>
          <TextInput style={styles.textInput} >{email}</TextInput>
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
      borderRadius:20
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