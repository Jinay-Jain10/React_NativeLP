import { StatusBar } from 'expo-status-bar';
import React, {useContext, useState,useEffect} from 'react';
import { 
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Pressable,
  Modal,
  Switch,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  View,
  Button,
  TextInput,
  Image, 
  ImageBackground, 
  Alert} from 'react-native';
import { FavouritesContext } from './context/FavouritesContext';
import { FlatList } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";



const Favourites=()=>{
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search",
    });
  }, []);
  const {favourites,removeFromFavourites}=useContext(FavouritesContext);
  const handleRemoveFromFavourites=(title)=>{
    removeFromFavourites(title);
  }
    return(
        <View style={styles.container}>
          <View style={{backgroundColor:'#8c7bba',height:90, width:'100%'}}>
            <TouchableOpacity style={{paddingTop:45,paddingLeft:25}} onPress={()=>navigation.navigate("Home")}>
                <Ionicons name="arrow-back" size={28} color="black" />     
            </TouchableOpacity>
            </View>
          <Text style={{fontSize:28, fontWeight:'bold',marginBottom:5,marginTop:15}}>Favourite Movies</Text>
          {favourites.length>0 ? (
            <FlatList
            data={favourites}
            keyExtractor={(item)=>item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>(
              <View style={styles.box}> 
                <Image source={{uri:`https://image.tmdb.org/t/p/w500${item.poster_path}`,}}
                style={{width:100,heigt:150,borderRadius:10}}
                />
                <Text style={{fontSize:16,fontWeight:700,flexShrink:1,color:'black',marginTop:10,marginLeft:10}}>{item.title}</Text>
                <TouchableOpacity style={styles.remove} onPress={()=>handleRemoveFromFavourites(item.title)}>
                  {/* <Text style={{color:'white',fontSize:15}}>Remove</Text> */}
                  <AntDesign name="delete" size={24} color="black" />
                </TouchableOpacity>
              </View>
              
            )}
            
            />
            
          ):(
            <Text style={{fontSize:20}}>No Favourites.</Text>
          )}
        </View>
    );
};


export default Favourites;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingBottom:10,
  },
    remove:{
      marginLeft:285,
      position:"absolute",
      marginTop:100
    },
    box: {
      flexDirection: "row",
      marginTop: 30,
      height:150,
      width:320,
      borderRadius:10,
      position:'relative'
    },
});   