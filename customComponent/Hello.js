import {StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,ActivityIndicator,ScrollView,Pressable,Modal, Text, View,Button,TextInput, Image, ImageBackground, Alert} from 'react-native';


export default function Hello({name}){
    return(
        <View>
            <Text>Hello and Welcome {name}</Text>
        </View>
    );
}