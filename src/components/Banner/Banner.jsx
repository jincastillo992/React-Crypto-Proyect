import React, { lazy, Suspense } from 'react'
import { CircularProgress, Container, makeStyles, Typography } from '@material-ui/core';

const Carousel = lazy(()=> import('../Carousel/Carousel'));

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
        <Suspense fallback={<CircularProgress style={{ color: "gold" }} size={50} thickness={1}/>}>
          <Carousel />
        </Suspense>
      </Container>
    </div>
  )
}

export default Banner