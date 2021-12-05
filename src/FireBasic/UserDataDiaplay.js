import React, { useEffect, useState } from 'react'
import { getDocs,collection, doc, deleteDoc } from "firebase/firestore/lite"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';

import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button, IconButton } from '@mui/material';
import {useNavigate} from "react-router-dom"

export default function UserDataDiaplay(props) {
  let history= useNavigate()
    const [user,setUser]=useState([])
    const [update,setUpadate]=useState(true)
    const getUserData= async()=>{
       const document=await getDocs(collection(props.db, "user_response"))
       let docu=[]
       document.forEach((doc) => {
                docu.push(doc)
       })
       return docu
      }
      let  updatingItem = (item) =>{
        let k=item.data()
      }
     let  deletingItem = async(id) =>{
       
      await deleteDoc(doc(props.db, "user_response", id)).then(function(res){
        setUpadate(!update)
      });
      }
            //doc.data() is never undefined for query doc snapshots
      
     
       
        
        // setDocument(docSnap);
        // console.log(document)
        // console.log(docSnap)
        // document.forEach((doc) => {

        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data()); } )
     

    useEffect(()=>{
       getUserData().then(function(res){
        setUser(res)
        
       })
      
       
    },[update])
   
    
    return (
       
        <div>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {user.map((item)=>
      <div key={item.id}><ListItem alignItems="flex-start" > 
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={item.data().name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {item.data().address}
                <IconButton  varient="standard" onClick={()=>deletingItem(item.id)} edge="end" style={{display:"absolute", left:"100%"}}>
                <DeleteIcon style={{display:"end"}} /> Delete
                </IconButton>
                <br/>
                <Button  varient="standard" color="secondary" onClick={()=>updatingItem(item)} edge="end" style={{display:"absolute", left:"100%"}}>
                Update/Edit
                </Button>
              </Typography><br/>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {item.data().occupation}<br></br>
              </Typography>
               {item.data().bio}
            </React.Fragment>
          }
        />
      </ListItem><Divider variant="inset" component="li" /></div>)}
      <Divider variant="inset" component="li" />
     
    </List>
        </div>
    )
}
