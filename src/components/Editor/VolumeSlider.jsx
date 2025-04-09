import * as React from 'react';
import "../../styles/variables.css";
import { Box, Slider, Stack } from '@mui/material';


export default function VolumeSlider({ audioRef }) {
  const [value, setValue] = React.useState(30); // Default volume

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (audioRef?.current) {
      audioRef.current.volume = newValue / 100
    }
  };

  React.useEffect(() => {
    if (audioRef?.current) {
      audioRef.current.volume = value / 100; 
    }
  }, [audioRef, value]);
  


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


// Example Use Case
// function App() {
//   const audioRef = useRef(null);

//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.play().catch((e) => {
//         console.log('Autoplay failed:', e); 
//       });
//     }
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <audio ref={audioRef} src={song} loop />
//         <VolumeSlider audioRef={audioRef} />
//       </header>
//     </div>
//   );
// }