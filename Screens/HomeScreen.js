import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
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
// import { useNavigation } from '@react-navigation/native';
// 18 and 24 is used as hook for navigation .... useNavigation hook can be used in other components as well hence is a more flexible option
// otherwise pass prop navigation in the main function as in 23..... the prop can only be used in the same component for example- here it can only be used in the Screens component

const logoImage=require("./homeimage.png")
export default function HomeScreen({navigation}){
    // const navigation=useNavigation();
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={logoImage}/>
            <Text style={styles.text}>MoviesNow</Text>
            <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis quam vehicula, consequat leo in, ultrices felis. Proin non consequat justo. Phasellus eu cursus dui. Aliquam ac sollicitudin lorem. Cras orci libero, consequat vitae justo vel, ornar</Text>
            <Button
            style={styles.button}
            color={"purple"}
             title="Start"
             onPress={()=>
             navigation.navigate("Login")
              }
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:50,
    margin:30,
    borderRadius:30
  },
  text:{
    fontSize:30,
    color:"white",
    marginBottom:20,
    justifyContent:'center',
    alignItems:'center',
  },
  content:{
    paddingHorizontal:25,
    paddingBottom:35,
    textAlign:'center',
    color:'white'
  },
  image:{
    flex: 1,
    resizeMode: 'contain',
    margin:30
  }
});

