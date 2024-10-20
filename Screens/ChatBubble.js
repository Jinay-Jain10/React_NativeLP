import React, {useContext, useState,useEffect} from 'react';
import { 
  Text,
View,
TextInput,
TouchableOpacity,
FlatList,
ActivityIndicator,
StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const ChatBubble=({role,text,onSpeech})=>{
    return(
        <View
        style={[
            styles.chatItem,
            role==="user"?styles.userChatItem : styles.modelChatItem,
        ]}
        >
            <Text style={styles.chatText}>{text}</Text>
            {role==="model" && (
                <TouchableOpacity onPress={onSpeech} style={styles.speakerIcon}>
                    <Ionicons name="volume-high-outline" size={24} color="#fff" />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles=StyleSheet.create({
    chatItem:{
        marginBottom:10,
        padding:10,
        borderRadius:10,
        maxWidth:'70%',
        position:'relative',
    },
    userChatItem:{
        alignSelf:'flex-end',
        backgroundColor:"#007aff",
    },
    modelChatItem:{
        alignSelf:'flex-start',
        backgroundColor:'#000',
    },
    chatText:{
        fontSize:16,
        color:'#fff',
    },
    speakerIcon:{
        position:'absolute',
        bottom:5,
        right:5,
    },
});

export default ChatBubble;