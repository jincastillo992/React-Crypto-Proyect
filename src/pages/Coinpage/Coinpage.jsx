import { Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import CoinInfo from '../../components/CoinInfo/CoinInfo';
import { SingleCoin } from '../../config/Api';
import { CryptoState } from '../../context/CryptoContext';
import ReactHtmlParser from 'react-html-parser';
import { numberWithCommas} from '../../components/Carousel/Carousel';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebase';

const Coinpage = () => {
  const {id} = useParams();
  const [coin, setCoin] = useState();
  const {currency, symbol, user, favorites, setAlert} = CryptoState();
  
  const fetchCoin = async() => {
    const {data} = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  console.log(coin);

  useEffect(() => {
    fetchCoin();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      [theme.breakpoints.down("md")]:{
        flexDirection: "column",
        alignItems: "center",
      },
    },
    sidebar: {
      width: "30%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
    },
    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Open Sans",
    },
    description:{
      width: "100%",
      fontFamily: "Open Sans",
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: "justify",
    },
    marketData: {
      alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      width: "100%",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        alignItems: "start",
      },
    },
  }));

  const inFavorites = favorites.includes(coin?.id)

  const addToFavorites = async() => {
    const coinRef = doc(db, "favorites", user.uid);
    try {
      await setDoc(coinRef,{
        coins:favorites?[...favorites, coin.id] : [coin.id]
      });
      setAlert({
        open: true,
        message: `${coin.name} agregado a tu lista de favoritos`,
        type: "success"
      })
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error"
      })
    }
  }

  const removeFromFavorites = async() => {
    const coinRef = doc(db, "favorites", user.uid);
    try {
      await setDoc(coinRef,
        {coins: favorites.filter((fav) => fav !== coin?.id)},
        {merge: "true"}
        );
      setAlert({
        open: true,
        message: `${coin.name} quitado a tu lista de favoritos`,
        type: "success"
      })
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error"
      })
    }
  }

  const classes = useStyles();

  if (!coin) return <LinearProgress style={{backgroundColor: "gold"}} />

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img src={coin?.image.large} alt={coin?.name} height = "200" style={{marginBottom: 20}} />
        <Typography variant="h3" className={classes.heading}>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className={classes.description}>
          {ReactHtmlParser(coin?.description.es.split(". ")[0])}.
        </Typography>
        <div className={classes.marketData}>
        <span style={{display: "flex"}}>
            <Typography variant="h5" className={classes.heading}>
              Rank:
            </Typography>
            &nbsp;&nbsp;
            <Typography variant="h5" style={{ fontFamily: "Open Sans",}}>
              {coin?.market_cap_rank}
            </Typography>
          </span>
          <span style={{display: "flex"}}>
            <Typography variant="h5" className={classes.heading}>
              Precio actual:
            </Typography>
            &nbsp;&nbsp;
            <Typography variant="h5" style={{ fontFamily: "Open Sans",}}>
              {symbol}{" "}
              {numberWithCommas(coin?.market_data.current_price[currency.toLowerCase()])}
            </Typography>
          </span>
          <span style={{display: "flex"}}>
            <Typography variant="h5" className={classes.heading}>
              Valor de Mercado:
            </Typography>
            &nbsp;&nbsp;
            <Typography variant="h5" style={{ fontFamily: "Open Sans",}}>
              {symbol}{" "}
              {numberWithCommas(coin?.market_data.market_cap[currency.toLowerCase()].toString().slice(0, -6))} MM
            </Typography>
          </span>
          {user && (
            <Button variant="outlined"
            style={{
              width: "100%",
              height: 40,
              backgroundColor: inFavorites ? "#ff0000" : "#EEBC1D",
            }}
            onClick={inFavorites ? removeFromFavorites : addToFavorites}>
              {inFavorites ? "Quitar de favoritos" : "Agregar a favoritos"}
            </Button>
          )}
        </div>
      </div>
      <CoinInfo coin={coin} />
    </div>
  )
}
export default Coinpage