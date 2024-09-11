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
  import {Entypo} from "@expo/vector-icons";


export default function HomeScreen({navigation}){

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const [error,setError]=useState({});
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const[loading,setLoading]=useState(false);
  const [showPassword,setShowPassword]=useState(true);
    
    const validateForm = () => {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      let error = {};

      if (!name) {error.name = "Name is required"};
      if (!reg.test(email)) {error.email="Please enter a valid Email ID"};
      if (password.length<6) error.password = "Password should contain more than 6 characters";
      if (!(age<100 && age>0)) error.age="Please enter valid age"
  
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
        console.log("Submitted",name,age, email, password);
        setEmail("");
        setPassword("");
        setError({});
        setAge("");
        setName("");
      }
    };


    return(
      <ScrollView>
        <KeyboardAvoidingView style={styles.container}>
        <Image source={require("./image.png")}  style={styles.backgroundImage}/>
        <View style={styles.back}>
            <Text style={{fontSize:30 , marginBottom:50,marginTop:50, color:'white'}}>Create Account</Text>

            <Text style={styles.textEmail}>Enter Your Name:</Text>
            <TextInput 
              style={styles.textInput} 
              value={name}
              onChangeText={(text)=>setName(text)}
              autoCapitalize
              autoCorrect={true}
            />
            {error.name ? (
          <Text style={styles.errorText}>{error.name}</Text>
        ) : null}


            
            <Text style={styles.textEmail}>Enter Your Age:</Text>
            <TextInput 
              style={styles.textInput} 
              value={age}
              onChangeText={(text)=>setAge(text)}
            />
            {error.age ? (
          <Text style={styles.errorText}>{error.age}</Text>
        ) : null}


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

            {loading?(<ActivityIndicator size="large" color="#571919"/>):(
            <Button
             color={"gray"}
             title="Register"
             onPress={handleSubmit}
            />
            )}
            </View>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1c',
    alignItems: 'center',
  },
  textEmail:{
    fontSize:20,
    color:'white'
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
    color:'black',
    marginTop:20,
    fontWeight:700,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  backgroundImage:{
    opacity:0.20,
    position:'relative'
  },
  back:{
    position:'absolute',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eye:{
    paddingLeft:160,
    position:'absolute',
    paddingTop:410
  },
});