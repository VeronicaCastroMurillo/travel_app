import * as React from 'react';
import Box from '@mui/material/Box';
import FormPropsTextFields from '../components/form';
import SelectTextFields from '../components/countrySelector';
import LoadingButtonGroup from '../components/boton';
import { Balance } from '@mui/icons-material';

export default function CompleteForm() {
    return (
        <Box>
            <h1 style={{color: 'black'}}>
                Bienvenido Usuario
            </h1>
            <FormPropsTextFields />
            <SelectTextFields />
            <LoadingButtonGroup />
        </Box>
    )
}