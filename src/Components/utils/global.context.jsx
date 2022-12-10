import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useReducer } from "react";
import { createContext } from "react";

//Me re-perdi con el cambio de tema y no creo que me de el tiempo de corregirlo D:  
export const initialState = {theme: "", data: []}

const reducer = (state, action) => {
  switch (action.type) {
    case "theme" :
      return {theme : state.theme === "light" ? "dark" : "light"}
    default :
      throw new Error()
  }
}

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [theme, dispatch] = useReducer(reducer, initialState);
  const [odontologo, setOdontologo] = useState([])
  const [favoritos, setFavoritos] = useState([])
  const KEY = "card.info"

  useEffect(() => {
    const storedFavoritos = JSON.parse(localStorage.getItem(KEY))
    if(storedFavoritos) {
      setFavoritos(storedFavoritos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(favoritos))
  }, [favoritos])

  const getOdontologo = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setOdontologo(res.data))
  }

  useEffect(() => {
    getOdontologo()
  }, [])
  
  return (
    <ContextGlobal.Provider value={{
      odontologo,
      theme,
      dispatch,
      favoritos,
      setFavoritos,
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => {
  return useContext(ContextGlobal)
}
