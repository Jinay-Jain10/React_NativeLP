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
  Alert} from 'react-native';


export default function HomeScreen({navigation}){

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const [error,setError]=useState({});
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
    
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
        console.log("Submitted",name,age, email, password);
        setEmail("");
        setPassword("");
        setError({});
        // setName("");
        setAge("");
        navigation.navigate("HomePage");
        setName("");
      }
    };


    return(
      <ScrollView>
        <KeyboardAvoidingView style={styles.container}>
            <Text style={{fontSize:30 , marginBottom:50}}>Create Account</Text>

            <Text style={styles.textEmail}>Enter Your Name:</Text>
            <TextInput 
              style={styles.textInput} 
              placeholder='Name'
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
              placeholder='Age'
              value={age}
              onChangeText={(text)=>setAge(text)}
            />
            {error.age ? (
          <Text style={styles.errorText}>{error.age}</Text>
        ) : null}


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
              secureTextEntry
            />
              {error.password ? (
          <Text style={styles.errorText}>{error.password}</Text>
        ) : null}


            <Button
             color={"gray"}
             title="Register"
             onPress={handleSubmit}
            //  onPress={()=>
            //  navigation.navigate("")
            //   }
            />
        </KeyboardAvoidingView>
        </ScrollView>
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
});