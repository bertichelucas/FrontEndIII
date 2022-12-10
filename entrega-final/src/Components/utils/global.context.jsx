import { useState } from "react";
import { useReducer } from "react";
import { createContext, useContext } from "react";

const initialState = {theme: "Light", data: []}

const ContextGlobal = createContext(initialState);

const reducer = (state, action) => {
    switch(action.type){
        case 'Dark':
            return {...state, theme: 'Dark'}
        case 'Light':
            return {...state, theme: 'Light'}
        default: 
            //Caso de data
            return {...state, data: action.payload}
    }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

    const [contextState, dispatchContextState] = useReducer(reducer, initialState)

    const [favs, setFavs] = useState(localStorage.getItem('favs')? JSON.stringify(localStorage.getItem('favs')): [])

    return (
        <ContextGlobal.Provider value={{contextState, dispatchContextState, setFavs, favs}}>
        {children}
        </ContextGlobal.Provider>
    );
};

export const useContextProvider = () =>{
    return useContext(ContextGlobal)
}
