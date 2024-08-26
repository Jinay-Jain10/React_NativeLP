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
        console.log("Submitted", email, password);
        setEmail("");
        setPassword("");
        setError({});
       
        navigation.navigate("HomePage");
        
      }
    };


    return(
        <View style={styles.container}>
            <Text style={styles.textEmail}>Enter Your Email:</Text>
            <TextInput 
              style={styles.textInput} 
              placeholder='Email ID'
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
              placeholder='Password'
              value={password}
              onChangeText={(text)=>setPassword(text)}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={showPassword}
              />
            <View style={styles.eye}>
            <TouchableOpacity  onPress={()=>{setShowPassword(!showPassword);}}>
              {showPassword ? (
                <Entypo name='eye-with-line' size={24} color="black"/>
              ) : ( <Entypo name="eye" size={24} color="black"/>)
              }
            </TouchableOpacity>
            </View>
              {error.password ? (
                <Text style={styles.errorText}>{error.password}</Text>
               ) : null}

            
          
            <Button
             color={"gray"}
             title="Login"
             onPress={handleSubmit }
            //  onPress={()=>
            //  navigation.navigate("HomePage")
            //   }
            />
            <Pressable 
            style={styles.register}
            onPress={()=>
             navigation.navigate("Signup")
              }>
             <Text>New User? Register Now</Text>
            </Pressable>
            
          
        </View>
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:50,
    margin:30,
    borderRadius:30
  },
  textEmail:{
    fontSize:20,
  },
  textInput:{
    fontSize:20,
    color:'black',
    borderWidth:2,
    borderColor:'black',
    marginBottom:20,
    marginTop:10,
    borderRadius:10,
    height:40,
    width:200,
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
    paddingLeft:160,
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
});
