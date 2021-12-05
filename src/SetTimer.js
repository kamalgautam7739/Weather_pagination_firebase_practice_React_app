import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function SetTimer() {
    const [time,setTime] = useState();
    function handleChange(){
       setTimeout(() => {
           alert("The time out is over")
           
       }, (time*1000));

    }
    return (
         
        <div>
            <div>This is Timer app.</div>
            <TextField variant="filled" label="Give Time" helperText="Give time in seconds" style={{width:"100%"}} onChange={(event)=>setTime(event.target.value)} ></TextField>
            <Button onClick={handleChange}>Go</Button>
        </div>
    )
}
