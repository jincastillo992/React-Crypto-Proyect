import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { CryptoState } from '../../context/CryptoContext';
import { Avatar } from '@material-ui/core';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../pages/Firebase/firebase';
import { numberWithCommas } from '../Carousel/Carousel';
import { AiFillDelete} from 'react-icons/ai';
import { doc, setDoc } from 'firebase/firestore';

// const useStyles = makeStyles({
//   container: {
//     width: 350,
//     padding: 25,
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//     fontFamily: "Open Sans",
//     backgroundColor: "#424242",
//     color: "#ffff"
//   },
//   profile: {
//     flex: 1,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: "20px",
//     height: "92%",
//   },
//   logout: {
//     height: "8%",
//     width: "100%",
//     backgroundColor: "#EEBC1D",
//     marginTop: 20,
//   },
//   picture: {
//     width: 200,
//     height: 200,
//     cursor: "pointer",
//     backgroundColor: "#EEBC1D",
//     objectFit: "contain",
//   },
//   favorites: {
//     flex: 1,
//     width: "100%",
//     backgroundColor: "grey",
//     borderRadius: 10,
//     padding: 15,
//     paddingTop: 10,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: 12,
//     overflowY: "scroll",
//   },
//   coin: {
//     padding: 10,
//     borderRadius: 5,
//     color: "black",
//     width: "100%",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#EEBC1D",
//     boxShadow: "0 0 3px black",
//   },
// });

// const logOut= () =>{
//   signOut(auth)
// }

// export default function UserSidebar() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     right: false,
//   });

//   const {user, setAlert, favorites, coins, symbol} = CryptoState();

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const removeFromFavorites = async(coin) => {
//     const coinRef = doc(db, "favorites", user.uid);
//     try {
//       await setDoc(coinRef,
//         {coins: favorites.filter((fav) => fav !== coin?.id)},
//         {merge: "true"}
//         );
//       setAlert({
//         open: true,
//         message: `${coin.name} quitado a tu lista de favoritos`,
//         type: "success"
//       })
//     } catch (error) {
//       setAlert({
//         open: true,
//         message: error.message,
//         type: "error"
//       })
//     }
//   }

//   const logOut= () =>{
//     signOut(auth)
//     setAlert({
//       open: true,
//       message: "Sesi??n cerrada exitosamente",
//       type: "success",
//     })
//     toggleDrawer()
//   }

//   return (
//     <div>
//       {['right'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Avatar
//             onClick={toggleDrawer(anchor, true)}
//             style={{
//               height: 38,
//               width: 38,
//               marginLeft: 15,
//               cursor: "pointer",
//               backgroundColor: "#EEBC1D"
//             }}
//             src={user.photoURL}
//             alt={user.displayName || user.email}
//           />
//           <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
//             <div className={classes.container}>
//               <div className={classes.profile}>
//                 <Avatar className={classes.picture}
//                 src={user.photoURL}
//                 alt={user.displayName || user.email} />
//                 <span style={{
//                     width: "100%",
//                     fontSize: 20,
//                     textAlign: "center",
//                     fontWeight: "bolder",
//                     wordWrap: "normal",
//                 }}>
//                   {user.displayName || user.email}
//                 </span>
//                 <div className={classes.favorites}>
//                 <span style={{ fontSize: 15 }}>
//                     Favoritos
//                   </span>
//                   {coins.map(coin => {
//                     if(favorites.includes(coin.id))
//                       return(
//                         <div className={classes.coin}>
//                           <span>
//                             {coin.name}
//                           </span>
//                           <span style={{
//                             display: "flex",
//                             gap: 8
//                           }}>
//                             {symbol}
//                             {numberWithCommas(coin.current_price.toFixed(2))}
//                             <AiFillDelete style={{cursor: "pointer"}} fontsize="16" 
//                             onClick={() => removeFromFavorites(coin)}
//                             />
//                           </span>
//                         </div>
//                     )
//                   })}
//                 </div>
//               </div>
//               <Button variant="contained" className={classes.logout} onClick={logOut}>
//                 Cerrar sesi??n
//               </Button>
//             </div>
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import { Avatar, Button } from "@material-ui/core";
// import { CryptoState } from "../../CryptoContext";
// import { signOut } from "firebase/auth";
// import { auth, db } from "../../firebase";
// import { numberWithCommas } from "../CoinsTable";
// import { AiFillDelete } from "react-icons/ai";
// import { doc, setDoc } from "firebase/firestore";

const useStyles = makeStyles({
  container: {
    width: 350,
    padding: 25,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Open Sans",
  },
  profile: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    height: "92%",
  },
  logout: {
    height: "8%",
    width: "100%",
    backgroundColor: "#EEBC1D",
    marginTop: 20,
  },
  picture: {
    width: 200,
    height: 200,
    cursor: "pointer",
    backgroundColor: "#EEBC1D",
    objectFit: "contain",
  },
  favorites: {
    flex: 1,
    width: "100%",
    backgroundColor: "grey",
    borderRadius: 10,
    padding: 15,
    paddingTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
    overflowY: "scroll",
  },
  coin: {
    padding: 10,
    borderRadius: 5,
    color: "black",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EEBC1D",
    boxShadow: "0 0 3px black",
  },
});

export default function UserSidebar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const { user, setAlert, favorites, coins, symbol } = CryptoState();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logOut = () => {
    signOut(auth);
    setAlert({
      open: true,
      message: "Sesi??n cerrada",
      type: "success",
    });

    toggleDrawer();
  };

  const removeFromFavorites = async (coin) => {
    const coinRef = doc(db, "favorites", user.uid);
    try {
      await setDoc(
        coinRef,
        { coins: favorites.filter((wish) => wish !== coin?.id) },
        { merge: true }
      );

      setAlert({
        open: true,
        message: `${coin.name} quitado de tu lista de favoritos`,
        type: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Avatar
            onClick={toggleDrawer(anchor, true)}
            style={{
              height: 38,
              width: 38,
              marginLeft: 15,
              cursor: "pointer",
              backgroundColor: "#EEBC1D",
            }}
            src={user.photoURL}
            alt={user.displayName || user.email}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div className={classes.container}>
              <div className={classes.profile}>
                <Avatar
                  className={classes.picture}
                  src={user.photoURL}
                  alt={user.displayName || user.email}
                />
                <span
                  style={{
                    width: "100%",
                    fontSize: 25,
                    textAlign: "center",
                    fontWeight: "bolder",
                    wordWrap: "break-word",
                  }}
                >
                  {user.displayName || user.email}
                </span>
                <div className={classes.favorites}>
                  <span style={{ fontSize: 15, textShadow: "0 0 5px black" }}>
                    Favoritos
                  </span>
                  {coins.map((coin) => {
                    if (favorites.includes(coin.id))
                      return (
                        <div className={classes.coin}>
                          <span>{coin.name}</span>
                          <span style={{ display: "flex", gap: 8 }}>
                            {symbol}{" "}
                            {numberWithCommas(coin.current_price.toFixed(2))}
                            <AiFillDelete
                              style={{ cursor: "pointer" }}
                              fontSize="16"
                              onClick={() => removeFromFavorites(coin)}
                            />
                          </span>
                        </div>
                      );
                    else return <></>;
                  })}
                </div>
              </div>
              <Button
                variant="contained"
                className={classes.logout}
                onClick={logOut}
              >
                Cerrar sesi??n
              </Button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}