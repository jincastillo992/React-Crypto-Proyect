import React from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core';
import Carousel from '../Carousel/Carousel';

const useStyles = makeStyles((theme) => ({
  banner:{
    backgroundImage: "url(./banner.jpeg)",
  },
  bannerContent:{
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline:{
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}))

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography variant="h2"
          style={{
            fontWeight: "bold",
            marginBottom: 15,
            fontFamily: "Open Sans",
          }}
          >
          Crypto Hunter
          </Typography >
          <Typography variant="subtitle2"
          style={{
            color: "darkgrey",
            textTransform: "capitalize",
            fontFamily: "Open Sans",
          }}>Obtén toda la Información de tus Criptodivisas favoritas</Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  )
}

export default Banner