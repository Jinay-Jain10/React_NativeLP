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

export default function Profile(navigation){
    return(
        <View style={styles.container}> 
            <Text style={{fontSize:30,color:'white'}}>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical:50,
    }
});   