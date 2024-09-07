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
  import Favourites from "./Screens/Favourites";
  import Profile from "./Screens/Profile";


const Tab=createBottomTabNavigator();
const screenOptions={
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position:'absolute',
    height:60,
    background:'#fff',
    bottom:0,
    right:0,
    left:0,
    elevation:0
  }
}


  export default function HomePage(){
    return(
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.screen name="HomePage" component={HomePage}/>
            <Tab.screen name="Favourites" component={Favourites}/>
            <Tab.screen name="Profile" component={Profile}/>
          </Tab.Navigator>
        </NavigationContainer>
        // <View style={styles.container}> 
        //     <Text style={{fontSize:30}}>Welcome !!</Text>
        // </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical:50,
    }
});   