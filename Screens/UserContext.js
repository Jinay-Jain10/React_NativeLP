import React,{createContext,useState} from "react";

export const UserContext=createContext();

export const UserProvider=({children})=>{
    const [profile,setProfile]=useState({
        profilePicture:null,
        username:'',
        email:'',
    });

    const updateProfilePicture=(newImageUri)=>{
        setProfile((prevProfile)=>({
            ...prevProfile,
            profilePicture:newImageUri,
        }));
    };

    const updateUsername=(newUsername)=>{
        setProfile((prevProfile)=>({
            ...prevProfile,
            name:newUsername,
        }));
    };

    const updateEmail=(newEmail)=>{
        setProfile((prevProfile)=>({
            ...prevProfile,
            email:newEmail
        }));
    };

    return(
        <UserContext.Provider value={{ profile,updateProfilePicture,updateUsername,updateEmail }}>
            {children}
        </UserContext.Provider>
    );
};