import { FC } from "react";

import { Box, IconButton, Typography } from "@mui/material";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";

interface Props {
  maxValue: number;
  currentValue: number;

  // Methods
  updateQuantity: (newValue: number) => void;
}

export const ItemCounter:FC<Props> = ({ currentValue, maxValue, updateQuantity}) => {
  

  return (
    <Box display='flex' alignItems='center'  >
        <IconButton onClick={() => updateQuantity(currentValue - 1)} disabled={currentValue <= 1}>
            <RemoveCircleOutline />
        </IconButton>
        <Typography variant="button" sx={{ width: 40, textAlign: 'center'}}> {currentValue} </Typography> 
        <IconButton onClick={() => updateQuantity(currentValue + 1)} disabled={currentValue >= maxValue} >
            <AddCircleOutline />
        </IconButton>
    </Box>
  )
}

