import { StatusBar } from 'expo-status-bar';
import React, {useCallback, useContext, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { 
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Pressable,
  Modal,
  Switch,
  KeyboardAvoidingView,
  FlatList,
  Text,
  View,
  Button,
  TextInput,
  Image, 
  ImageBackground, 
  Alert,
  TouchableOpacity} from 'react-native';
import { useEffect } from 'react';
import axios from 'axios';
import {Entypo} from "@expo/vector-icons";
import { FavouritesContext } from './context/FavouritesContext';
import { UserContext } from './UserContext';


const apiKey= 'edc4d9f10438f15ca8b98605eca2464a'
const baseURL='https://api.themoviedb.org/3'


const HomePage=({})=>{

    const {addToFavourites}=useContext(FavouritesContext);
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [bookmark,setBookmark]=useState(false);
    const popularMoviesEndpoint=`${baseURL}/movie/popular?language=en-US&page=1?api_key=${apiKey}`

   


    const apiCall = async (endpoint,params) => {
      const options={
        method:'GET',
        headers:{
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGM0ZDlmMTA0MzhmMTVjYThiOTg2MDVlY2EyNDY0YSIsIm5iZiI6MTcyNTk2MDc2Ny42MTkxOSwic3ViIjoiNjZkZmY3OGIwMDAwMDAwMDAwYTQ2OTczIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.6Sahm-tMOcT-9KQv1xqNRNaoRZcvomA9uUhN366Y9xw'
        },
        url: endpoint,
        params:params?params:{}
      } 
      
      try{
        const response=await axios.request(options);
        return response.data;
      }catch(error){
        console.warn('error: ',error);
        return{}
      }
    }

    const fetchPopularMovies=()=>{
      return apiCall(popularMoviesEndpoint);
    }
    const getPopularMovies=async()=>{
      const data= await fetchPopularMovies();
      if(data && data.results) setData(data.results);
      setLoading(false);
    }

    useEffect(()=>{
      getPopularMovies();
    },[])

    const handleAddToFavourites=(movie)=>{
      setBookmark(false);
      addToFavourites(movie);
    }

    return(
      <View style={styles.container} >
        <Text style={{fontSize:25,color:'black',alignItems:'center'}}>Popular Movies</Text>
        <View >
        {
          data.length ? 
          <FlatList
          data={data}
          keyExtractor={(item)=>item.id.toString()}
          renderItem={({item})=>(

          <View style={styles.box}>
            <Image 
            source={{uri:`https://image.tmdb.org/t/p/w500${item.poster_path}` }}
            style={{width:100,height:100,borderRadius:10}}
            />
            <View >
              <TouchableOpacity onPress={()=>handleAddToFavourites(item)}>
              <Entypo 
              name={bookmark ? "heart": "heart-outlined"}
              size={28}
              color={bookmark ? "red" : "black"}
              />
              </TouchableOpacity>
            <Text style={{fontSize:20,fontWeight:700,color:'black',paddingHorizontal:15}}>{item.title}</Text>
            {/* <Text numberOfLines={1} style={{fontSize:10,flexShrink:1,color:'black',paddingVertical:5,paddingHorizontal:15,flex:1}}>{item.overview}</Text> */}
            <Text style={{fontSize:10,flexShrink:1,fontWeight:600,color:'gray',paddingHorizontal:15,}}>Release Date: {item.release_date}</Text>
            <Text style={{fontSize:10,flexShrink:1,fontWeight:600,color:'gray',paddingHorizontal:15,}}>Popularity: {item.popularity}</Text>
            </View>
          </View>
          )}
          />
          :
          null          
        }
        </View>
      </View>
    )
  }

  export default HomePage;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingBottom:40,
      paddingTop:10,
      alignItems:'center'
    },
    box:{
      paddingHorizontal:20,
      paddingBottom:10,
      paddingRight:100,
      flexDirection:'row',
      paddingTop:30
    }
});   