import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./Screens/HomeScreen";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import HomePage from "./Screens/HomePage";
import Favourites from "./Screens/Favourites";
import Profile from "./Screens/Profile";
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
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



const stack=createStackNavigator()
const Tab=createMaterialBottomTabNavigator()

function StackNavigator(){
  return(
    <stack.Navigator
    initialRouteName='HomeScreen' 
    screenOptions={{
    headerStyle:{backgroundColor:'purple',}, 
    headerTintColor:"white",
    headerTitleAlign:"center",
    headerTitleStyle:{fontWeight:"bold"},
    headerRight:()=>(
      <Pressable onPress={()=> console.warn("Menu button pressed")}>
        <Text style={{color: "#fff", fontSize: 14}}>Menu</Text>
      </Pressable>
    ),
    // contentStyle:{
    //   backgroundColor:"black",
    // }
  }}>
    <stack.Screen 
      name="MoviesNow" 
      component={HomeScreen}
    />
    <stack.Screen name="Login" component={Login}/>
    <stack.Screen name="Signup" component={Signup}/>
    <stack.Screen name="HomePage" component={TabNavigator}/>
  </stack.Navigator>
  )
}

function TabNavigator(){
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomePage}/>
      <Tab.Screen name='Profile' component={Profile}/>
      <Tab.Screen name='Favourites' component={Favourites}/>
    </Tab.Navigator>
    )
}
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}
