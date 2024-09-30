import { StatusBar } from 'expo-status-bar';
import React, {useContext, useState} from 'react';
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

import {Entypo} from "@expo/vector-icons";
import { UserContext } from './UserContext';
import * as ImagePicker from 'expo-image-picker';




const Signup=({navigation})=>{
  const {user,setUser}=useContext(UserContext);

  const [profileImage,setProfileImage]=useState(null);
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const [error,setError]=useState({});
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const[loading,setLoading]=useState(false);
  const [showPassword,setShowPassword]=useState(true);

  const openImagePicker = async () => {
    // Request permission to access media library
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }
  
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    };
  
    const result = await ImagePicker.launchImageLibraryAsync(options);
  
    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };
    
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
        const userData={
          email:email,
          name:name,
          image:profileImage,
        };
        setUser(userData);
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
        <View style={{flex:1,justifyContent:'center',alignItems:'center',position:'relative'}}>
            <Text style={{fontSize:38,fontWeight:600 , marginBottom:50,marginTop:50, color:'black'}}>Create Account</Text>

            <Text style={styles.textEmail}>Enter A profile picture:</Text>
            <TouchableOpacity style={styles.image} onPress={openImagePicker}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.image} />
          ) : (
            <Image 
            source={{uri:profileImage}}
            style={styles.image}
            />
          )}
          {/* <View>
            <Image source={require("../t/ProfileLogo.png")}/>
          </View> */}
        </TouchableOpacity>



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
                <Entypo name='eye-with-line' size={24} color="black"/>
              ) : ( <Entypo name="eye" size={24} color="black"/>)
              }
            </TouchableOpacity>
            </View>
              {error.password ? (
          <Text style={styles.errorText}>{error.password}</Text>
        ) : null}
            

            {loading?(<ActivityIndicator size="large" color="#571919"/>):(
            <TouchableOpacity
            style={{height:40, width:100, backgroundColor:'#8c7bba',borderRadius:10 ,justifyContent:'center',alignItems:'center'}}
             color={'black'}
             onPress={handleSubmit}
            > 
            <Text style={{color:'white', fontSize:20 }}>Register</Text>
            </TouchableOpacity>
            )}
            </View>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}
export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    paddingBottom:30
  },
  textEmail:{
    fontSize:20,
    color:'black'
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
  backgroundImage:{
    opacity:0.20,
    position:'relative'
  },
  eye:{
    paddingLeft:190,
    position:'absolute',
    paddingTop:575
  },
  image:{
    height:100,
    width:100,
    borderRadius:20,
  },
});