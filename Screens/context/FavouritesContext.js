import React, {createContext,useState} from "react";

export const FavouritesContext =createContext();

export const FavouritesProvider =({children})=>{
    const [favourites,setFavourites]= useState([]);

    const addToFavourites=(movie)=>{
        setFavourites([...favourites,movie]);
    };

    const removeFromFavourites=(title)=>{
        setFavourites(favourites.filter((movie)=>movie.title!==title));
    };

    return(
        <FavouritesContext.Provider value={{favourites,addToFavourites,removeFromFavourites}}>
            {children}
        </FavouritesContext.Provider>
    );
};