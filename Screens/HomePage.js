import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
import Favourites from './Favourites';
import Profile from './Profile'

const HomePageTab=createBottomTabNavigator();
// const screenOptions={
//   tabBarShowLabel:false,
//   headerShown:false,
//   tabBarStyle:{
//     position:'absolute',
//     height:60,
//     background:'#fff',
//     bottom:0,
//     right:0,
//     left:0,
//     elevation:0
//   }
// }


  export default function HomePage(navigation){
    return(
      <View>
        <Text>WELCOME</Text>
      </View>
          // <HomePageTab.Navigator screenOptions={{ headerShown: false }}>
          //   <HomePageTab.Screen name="HomePage" component={HomePage}/>
          //   <HomePageTab.Screen name="Favourites" component={Favourites}/>
          //   <HomePageTab.Screen name="Profile" component={Profile}/>
          // </HomePageTab.Navigator>
    )
  }

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'white',
//       alignItems: 'center',
//       justifyContent: 'center',
//       paddingVertical:50,
//     }
// });   