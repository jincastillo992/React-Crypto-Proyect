import { Box, Button, TextField } from '@material-ui/core';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { CryptoState } from '../../context/CryptoContext';
import { auth } from '../../pages/Firebase/firebase';

const Signup = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {setAlert} = CryptoState();

  const handleSubmit = async () => {
    if(password !== confirmPassword){
      setAlert({
        open: true,
        message: "Las contraseñas no coinciden",
        type: "error"
      });
      return;
    }
    try{
      const result = await createUserWithEmailAndPassword(auth, email, password);
      setAlert({
        open: true,
        message: `Cuenta creada exitosamente. Bienvenido ${result.user.email}`,
        type: "success",
      });
      handleClose();
    } catch(error){
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
      return;
    }
  }
  
  return (
    <Box 
    p={3}
    style={{
      display: "flex",
      flexDirection: "column", 
      gap: "20px",
    }}>
      <TextField variant="outlined"
      type="email"
      label="Ingresar Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      fullWidth/>
      <TextField variant="outlined"
      type="password"
      label="Ingresar Contraseña"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      fullWidth/>
      <TextField variant="outlined"
      type="password"
      label="Confirmar Contraseña"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      fullWidth/>
      <Button variant="contained"
      size="large"
      style={{ backgroundColor: "#EEBC1D" }}
      onClick={handleSubmit}>
        Crear
      </Button>
    </Box>
  )
}

export default Signup