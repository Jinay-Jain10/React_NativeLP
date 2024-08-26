import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./Screens/HomeScreen"
import Login from "./Screens/Login"
import Signup from "./Screens/Signup"
import HomePage from './Screens/HomePage';
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



const stack=createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName='HomeScreen' 
        screenOptions={{
        headerStyle:{backgroundColor:'lightblue',}, 
        headerTintColor:"white",
        headerTitleAlign:"center",
        headerTitleStyle:{fontWeight:"bold"},
        headerRight:()=>(
          <Pressable onPress={()=> console.warn("Menu button pressed")}>
            <Text style={{color: "#fff", fontSize: 14}}>Menu</Text>
          </Pressable>
        ),
        contentStyle:{
          backgroundColor:"lightblue",
        }
      }}>
        <stack.Screen 
          name="Home" 
          component={HomeScreen}
        />
        <stack.Screen name="Login" component={Login}/>
        <stack.Screen name="Signup" component={Signup}/>
        <stack.Screen name="HomePage" component={HomePage}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

