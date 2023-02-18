import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Button } from 'bootstrap';
import React from 'react';
import { useNavigate,useState } from 'react-router-dom';

function Signup() {
    const navigation =useNavigate()
    const [Data, setData] = useState();
  return (
    <Box>
        <Box>
            <span>Your Name:</span>
            <TextField id='outlined-basic' value={Data} label="Your Name:" variant='outlined' onChange={(e)=>setData(console.log(e.target.value))}></TextField>
        </Box>
        <Box>
            <span>Your Email:</span>
            <TextField id='outlined-basic' variant='outlined'></TextField>
        </Box>
        <Box>
        <Button variant="contained" onClick={()=>navigation("/home")}>Sign Up</Button>
        </Box>
    </Box>
    
  );
}

export default Signup;
