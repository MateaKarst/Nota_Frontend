import * as React from 'react';
import "../styles/variables.css";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';


export default function VolumeSlider() {
  const [value, setValue] = React.useState(30); // Default volume

  const handleChange = (event, newValue) => {
    setValue(newValue); 
  };

  return (
    <Box sx={{ width: 200 }}>
    <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
        <Slider
        value={value}
        onChange={handleChange}
        sx={{
    width: 200,
    color: 'white', 
    '& .MuiSlider-thumb': {
      backgroundColor: 'white', 
      '&:hover, &.Mui-focusVisible': {
        boxShadow: '0 0 0 2px white', 
      },
      '&:focus': {
        boxShadow: '0 0 0 2px white', 
      },
    },
    '& .MuiSlider-track': {
      backgroundColor: 'white', 
    },
    '& .MuiSlider-rail': {
      backgroundColor: 'white', 
    },
  }}
    />
    </Stack>
    </Box>
  );
}
