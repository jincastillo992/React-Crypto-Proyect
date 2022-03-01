import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { CoinList } from '../config/Api';
import { auth, db } from '../pages/Firebase/firebase';

const Crypto = createContext();

const CryptoContext = ({children}) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState({
    open: false,
    message: "", 
    type: "success"
  })

  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    if(user){
      const coinRef = doc(db, "favorites", user.uid);
      var unsubscribe = onSnapshot(coinRef, coin => {
        if(coin.exists()){
          setFavorites(coin.data().coins);
        }else{
          console.log("lista de favoritos vacía");
        }
      })
      return () => {
        unsubscribe();
      }
    }
  }, [user])
  

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if(user)setUser(user);
      else setUser(null);
      console.log(user);
    });
  }, []);
  

  const fetchCoins = async() => {
    setLoading(true);
    const {data} = await axios.get(CoinList(currency));
    console.log(data);
    setCoins(data); 
    setLoading(false);
  }
  
  useEffect(() => {
    if(currency === "USD") setSymbol("US$");
    if(currency === "CLP") setSymbol("CLP$");
    else if (currency === "EUR") setSymbol("€");
  }, [currency])
  
  return (
    <Crypto.Provider value={{currency, symbol, setCurrency, coins, loading, fetchCoins, alert, setAlert, user, favorites}}>
      {children}
    </Crypto.Provider>
  )
}

export default CryptoContext;
export const CryptoState = () => {
  return useContext(Crypto)
};