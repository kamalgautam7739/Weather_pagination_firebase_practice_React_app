import { Button, TextField } from "@mui/material";
import {useLocation} from 'react-router-dom';

import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Route } from "react-router";

import "firebase/firestore";

import { collection, addDoc } from "firebase/firestore/lite";

export default function UserForm(props,route) {
  const location=useLocation();
  const [profile, setProfofile] = useState({
    name: "",
    address: "",
    email: "",
    phoneNo: "",
    occupation: "",
    bio: "",
  });

  function handleChange(e) {
    profile[e.target.id] = e.target.value;
    setProfofile({ ...profile, profile });
  }
  const saveChange = async () => {
    await addDoc(collection(props.db, "user_response"), {
      name: profile.name,
      address: profile.address,
      bio: profile.bio,
      email: profile.email,
      phoneN0: profile.phoneNo,
      occupation: profile.occupation,
    })
      .then(function (response) {
        alert("Succcessfully added Data");
      })
      .catch(function (error) {
        alert("Couldnot add data");
      });
  };
  return (
    <div style={{ marginTop: "15px" }}>
      <h1>User Form Demo</h1>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            id="name"
            
            label="Name"
            width="30%"
            minRows={1}
            
            variant="outlined"
            onChange={handleChange}
            helperText="Enter valid Name"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            minRows={1}
            onChange={handleChange}
            helperText="Enter valid Address"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="phoneNo"
            label="Phone NO."
            variant="outlined"
            minRows={1}
            onChange={handleChange}
            helperText="Enter valid Phoneno."
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            minRows={1}
            onChange={handleChange}
            helperText="Enter valid Email"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="occupation"
            label="Occupation"
            minRows={1}
            variant="outlined"
            onChange={handleChange}
            helperText="Enter valid Occupation"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="bio"
            multiline
            fullWidth
            rows={3}
            onChange={handleChange}
            label="Your Bio"
            variant="outlined"
            helperText="Enter your bio"
          />
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Button onClick={saveChange} variant="outlined">
          Submit
        </Button>
      </Grid>
    </div>
  );
}
