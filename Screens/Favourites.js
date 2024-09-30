import { StatusBar } from 'expo-status-bar';
import React, {useContext, useState} from 'react';
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


const Favourites=()=>{
  const {favourites,removeFromFavourites}=useContext(FavouritesContext);
  const handleRemoveFromFavourites=(title)=>{
    removeFromFavourites(title);
  }
    return(
        <View style={{marginHorizontal:10,marginVertical:10}}>
          <Text style={{fontSize:28, fontWeight:'bold',marginBottom:5}}>Favourite Movies</Text>
          {favourites.length>0 ? (
            <FlatList
            data={favourites}
            keyExtractor={(item)=>item.title}
            renderItem={({item})=>(
              <View > 
                <Image source={{uri:`https://image.tmdb.org/t/p/w500${item.poster_path}`}}
                style={{width:100,heigt:150}}
                />
                <Text style={{fontSize:20,marginTop:10}}>{item.title}</Text>
                <TouchableOpacity style={styles.remove} onPress={()=>handleRemoveFromFavourites(item.title)}>
                  <Text style={{color:'white',fontSize:15}}>Remove</Text>
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
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical:50,
    },
    remove:{
      backgroundColor:'#c42525',
      height:30,
      width:80,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10
    }
});   