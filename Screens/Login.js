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
  Alert,
  TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Entypo} from "@expo/vector-icons";




export default function Login({navigation}){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [error,setError]=useState({});
    const [showPassword,setShowPassword]=useState(true);
    const[loading,setLoading]=useState(false);
   
    
    const validateForm = () => {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      let error = {};
  
      if (!reg.test(email)) {error.email="Please enter a valid Email ID"};
      if (password.length<6) error.password = "Password should contain more than 6 characters";
  
      setError(error);
  
      return Object.keys(error).length === 0;
    };

    const handleSubmit = () => {
      if (validateForm()) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigation.navigate("HomePage");
        }, 2000);
        console.log("Submitted", email, password);
        setEmail("");
        setPassword("");
        setError({});        
      }
    };


    return(
        <View style={styles.container}>
          <Image source={require("./background_image.png")}  style={styles.backgroundImage}/>
          <View style={styles.back}>
          <Text style={{fontSize:30 , marginBottom:50, color:'white'}}>Welcome Back</Text>
            <Text style={styles.textEmail}>Enter Your Email:</Text>
            <TextInput 
              style={styles.textInput} 

              value={email}
              onChangeText={(text)=>setEmail(text)}
              autoCapitalize="none"
              autoCorrect={true}
              keyboardType="email-address"
            />
            {error.email ? (
          <Text style={styles.errorText}>{error.email}</Text>
        ) : null}
            <Text style={styles.textEmail}>Enter Your Password:</Text>      
            <TextInput 
              style={styles.textInput}
              value={password}
              onChangeText={(text)=>setPassword(text)}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={showPassword}
              />
            <View style={styles.eye}>
            <TouchableOpacity  onPress={()=>{setShowPassword(!showPassword);}}>
              {showPassword ? (
                <Entypo name='eye-with-line' size={24} color="white"/>
              ) : ( <Entypo name="eye" size={24} color="white"/>)
              }
            </TouchableOpacity>
            </View>
              {error.password ? (
                <Text style={styles.errorText}>{error.password}</Text>
               ) : null}

            
            {loading?(<ActivityIndicator size="large" color="purple"/>):(
            <Button
             color={"purple"}
             title="Login"
             onPress={handleSubmit }
            />
            )}
            <Pressable 
            style={styles.register}
            onPress={()=>
             navigation.navigate("Signup")
              }>
             <Text style={{color:'white'}}>New User? Register Now</Text>
            </Pressable>
            
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1c',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:50,
    
  },
  textEmail:{
    fontSize:20,
    color:'white',
  },
  textInput:{
    fontSize:20,
    color:'white',
    borderWidth:2,
    borderColor:'white',
    marginBottom:20,
    marginTop:10,
    borderRadius:10,
    height:40,
    width:200,
    paddingHorizontal:10
  },
  register:{
    fontSize:35,
    color:'white',
    marginTop:20,
    fontWeight:700,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  eye:{
    paddingLeft:160,
    position:'absolute',
    paddingTop:130
  },
  textInputPassword:{
    fontSize:40,
    color:'black',
    borderWidth:2,
    borderColor:'black',
    marginBottom:20,
    marginTop:10,
    borderRadius:10,
    height:40,
    paddingLeft:10,
  },
  passwordInput:{
    fontSize:20,
  },
  backgroundImage:{
    opacity:0.3,
    position:'relative'
  },
  back:{
    position:'absolute',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
