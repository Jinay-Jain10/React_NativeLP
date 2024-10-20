import { StatusBar } from 'expo-status-bar';
import React, {useContext, useState,useEffect} from 'react';
import { 
  Text,
View,
TextInput,
TouchableOpacity,
FlatList,
ActivityIndicator,
StyleSheet} from 'react-native';
import axios from 'axios';
import ChatBubble from './ChatBubble';
import {speak,isSpeakingAsync,stop} from 'expo-speech';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { useChat } from './context/ChatContext';



const Chatbot=()=>{

    const {chat,setChat}=useChat();

    const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerTransparent: true,
    });
  }, []);

    const [userInput,setUserInput]=useState("");
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const [isSpeaking,setIsSpeaking]=useState(false);

    const API_KEY= '-';

    const handleUserInput=async()=>{
        let updatedChat=[
            ...chat,
            {
                role:"user",
                parts:[{text:userInput}],
            },
        ];

        setLoading(true);
        setChat(updatedChat);

        try{
            const response= await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
                {
                    contents:updatedChat,
                }
            );
            console.log("Gemini API response:",response.data);

            const modelResponse=
            response.data?.candidates?.[0]?.content?.parts?.[0]?.text || " ";
            if(modelResponse){
                const updatedChatWithModel=[
                    ...updatedChat,
                    {
                        role:"model",
                        parts:[{text:modelResponse}],
                    },
                ];
                setChat(updatedChatWithModel);
                setUserInput("");
            }
        }catch(error){
            console.error("Error calling Gemini API:",error);
            console.error("Error response:",error.response);
            setError("An error occurred. Please try again.");
        } finally{
            setLoading(false);
        }
    };

    const handleSpeech=async(text)=>{
        if (isSpeaking)
        {
            stop();
            setIsSpeaking(false);
        } else{
            if(!(await isSpeakingAsync())){
                speak(text);
                setIsSpeaking(true);
            }
        }
    };

    const renderChatItem=({item})=>(
        <ChatBubble
            role={item.role}
            text={item.parts[0].text}
            onSpeech={()=>handleSpeech(item.parts[0].text)}
        />
    );

    return(
        <View style={styles.container}>
        <TouchableOpacity 
        style={{paddingTop:50}}
        onPress={()=>navigation.navigate("HomePage")}
        >
      <Ionicons name="arrow-back" size={28} color="black" />     
    </TouchableOpacity>
            <Text style={styles.title}>Gemini Chatbot</Text>
            <FlatList
                data={chat}
                showsVerticalScrollIndicator={false}
                renderItem={renderChatItem}
                keyExtractor={(item,index)=>index.toString()}
                contentContainerStyle={styles.chatContainer}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Type your message'
                    placeholderTextColor="#aaa"
                    value={userInput}
                    onChangeText={setUserInput}
                />
                <TouchableOpacity style={styles.button} onPress={handleUserInput}>
                <Ionicons name="send" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {loading && <ActivityIndicator style={styles.loading} color="#333"/>}
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f8f8f8f",
      paddingLeft:16,
      paddingRight:16,
      paddingBottom:15
    },
    title:{
       fontSize:24,
       fontWeight:"bold",
       color:'#333',
       marginBottom:20,
       textAlign:'center', 
    },
    chatContainer:{
        flexGrow:1,
        justifyContent:'flex-end'
    },
    inputContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
    },
    input:{
        flex:1,
        height:50,
        marginRight:10,
        padding:8,
        borderColor:'black',
        borderWidth:1,
        borderRadius:25,
        color:'#333',
        backgroundColor:'#fff',
    },
    button:{
        padding:10,
        backgroundColor:"#95A4DE",
        borderRadius:25,
    },
    buttonText:{
        color:'black',
        textAlign:'center'
    },
    loading:{
        marginTop:10,
    },
    error:{
        color:'red',
        marginTop:10,
    }
  });   
export default Chatbot;