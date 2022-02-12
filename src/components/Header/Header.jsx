import { AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../../context/CryptoContext';

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Open Sans",
    fontWeight: "bold",
    cursor: "pointer",
  }
}))

const Header = () => {

  const classes = useStyles();
  const history = useHistory();
  const { currency, setCurrency} = CryptoState();
  const darkTheme = createTheme({
    palette:{
      primary:{
        main: "#ffff"
      },
      type: "dark",
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography onClick={() => history.push("/")} className={classes.title}>
              Crypto Hunter
            </Typography>
            <Select style={{
              width: 100,
              height: 40,
              marginLeft: 15,
            }} value={currency}
            onChange={(e) => setCurrency(e.target.value)}>
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"CLP"}>CLP</MenuItem>    
            </Select>
          </Toolbar>
        </Container>
      </AppBar>  
    </ThemeProvider>
  )
};

export default Header;