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
import {Entypo} from "@expo/vector-icons";
import { UserProvider } from './Screens/UserContext';


const stack=createStackNavigator()
const Tab=createMaterialBottomTabNavigator()

function StackNavigator(){
  return(
    <stack.Navigator
    initialRouteName='HomeScreen' 
    screenOptions={{
    headerStyle:{backgroundColor:'#8c7bba',}, 
    headerTintColor:"white",
    headerTitleAlign:"center",
    headerTitleStyle:{fontWeight:"bold"},
    headerRight:()=>(
      <Pressable onPress={()=> console.warn("Menu button pressed")}>
        <Text style={{color: "#fff", fontSize: 14}}>Menu</Text>
      </Pressable>
    ),
    // headerLeft:()=>(
    //   <Pressable onPress={()=> console.warn("Are you sure you want to go back")}>
    //     <Text style={{color: "#fff", fontSize: 14}}>Back</Text>
    //   </Pressable>
    // )
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
      <Tab.Screen 
      name='Home' 
      component={HomePage}
      options={{
        tabBarIcon:({focused})=>{
          return(
            <View style={{alignItems:"center", justifyContent:"center"}}>
              <Entypo name="home" size={27} color={focused ? "#8c7bba":"#111"}/>
            </View>
          )
        }
      }}
      />
      <Tab.Screen 
      name='Favourites' 
      component={Favourites}
      options={{
        tabBarIcon:({focused})=>{
          return(
            <View style={{alignItems:"center", justifyContent:"center"}}>
              <Entypo name="star" size={27} color={focused ? "#8c7bba":"#111"}/>
            </View>
          )
        }
      }}
      />
      <Tab.Screen 
      name='Profile' 
      component={Profile}
      options={{
        tabBarIcon:({focused})=>{
          return(
            <View style={{alignItems:"center", justifyContent:"center"}}>
              <Entypo name="user" size={27} color={focused ? "#8c7bba":"#111"}/>
            </View>
          )
        }
      }}
      />
    </Tab.Navigator>
    )
}
const App=()=> {
  return (
    <UserProvider>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
