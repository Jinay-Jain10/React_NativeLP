import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { createContext } from 'react';
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
          <Image   style={styles.backgroundImage}/>
          <View style={styles.back}>
          <Text style={{fontSize:38,fontWeight:600 , marginBottom:50, color:'black'}}>Welcome Back !!</Text>
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
                <Entypo name='eye-with-line' size={28} color="black"/>
              ) : ( <Entypo name="eye" size={28} color="black"/>)
              }
            </TouchableOpacity>
            </View>
              {error.password ? (
                <Text style={styles.errorText}>{error.password}</Text>
               ) : null}

            
            {loading?(<ActivityIndicator size="large" color="#8c7bba"/>):(
            <TouchableOpacity
            style={{height:40, width:100, backgroundColor:'#8c7bba',borderRadius:10 ,justifyContent:'center',alignItems:'center'}}
             color={'black'}
             onPress={handleSubmit}
            > 
            <Text style={{color:'white', fontSize:20 }}>Login</Text>
            </TouchableOpacity>
            )}

            <Pressable 
            style={styles.register}
            onPress={()=>
             navigation.navigate("Signup")
              }>
             <Text style={{color:'black'}}>New User? Register Now</Text>
            </Pressable>
            
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbf9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:50,
    
  },
  textEmail:{
    fontSize:22,
    color:'black',
  },
  textInput:{
    fontSize:20,
    color:'black',
    borderWidth:2,
    borderColor:'black',
    marginBottom:20,
    marginTop:10,
    borderRadius:10,
    height:50,
    width:250,
    paddingHorizontal:10
  },
  register:{
    fontSize:35,
    color:'black',
    marginTop:20,
    fontWeight:700,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  eye:{
    paddingLeft:190,
    position:'absolute',
    paddingTop:160
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
    opacity:0.2,
    position:'relative'
  },
  back:{
    position:'absolute',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
