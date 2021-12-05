import React, { useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function FirstHook() {
  let history= useNavigate()
    const [profile,setProfile] = useState({name:"",address:"",age:""})
    const [count,setCount] = useState(0)
    function handler(event){
       setProfile({...profile,[event.target.id]:event.target.value})}
    useEffect(()=>{
      console.log("This is use Effect");
    })
    useEffect(()=>{
      console.log("This is count Effect",count);
    },[count])

       
    return (
        <div>
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
      <TextField id="name" name="name" label="Name" variant="filled" onChange={handler}/>
      <TextField id="address" name="address" label="Address" variant="outlined" onChange={handler}/>
      <TextField id="age" name="age" label="Age" variant="standard" onChange={handler} />
      <Button onClick={()=>{setCount(count+1)}} variant="outlined" color="secondary">Increase count</Button>
      <Button onClick={()=>history("./kkk")}>Timer</Button>
    </Box>
        </div>
    )
}











