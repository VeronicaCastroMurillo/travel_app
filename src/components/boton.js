import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';


function LoadingButtonGroup() {

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button>Crear Usuario</Button>
        <Button onClick={() => { navigate('/list')}}>Ver Detalles</Button>
        <Button>Actualizar Datos</Button>
        <Button>Borrar Datos</Button>
      </ButtonGroup>
    </Box>
  );
}


export default LoadingButtonGroup;