import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="on"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Complete Name"
          defaultValue=""
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-required"
          type="date"
        />
        <TextField
          id="outlined-required"
          label="Career"
          type="text"
        />
      </div>

    </Box>
  );
}



export default FormPropsTextFields;