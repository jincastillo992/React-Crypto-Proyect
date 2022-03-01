import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {

  const useStyles = makeStyles(() => ({
    NotFoundContent:{
      textAlign: "center",
      // height: 400,
      display: "flex",
      flexDirection: "column",
      paddingTop: 25,
      justifyContent: "space-around",
    }
  })
  )
    const classes = useStyles();

  return (
    <div>
      <Container className={classes.NotFoundContent}>
        <h1>404</h1>
        <h2>Page not found :(</h2> <br/>
        <img src="https://c.tenor.com/7PWz5OSSLeAAAAAC/homer-simpson-crying.gif" alt="crying homer" style={{
          width: 400,
          justifyContent: "center",
          alignSelf: "center",
          marginBottom: 25,
        }}/>
        <Link to="/">Volver al Home...</Link>
      </Container>
    </div>
  )
}

export default NotFound