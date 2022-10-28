import * as React from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { registerReceipt } from "../services/user-ws";
import { uploadURL} from "../services/api.js"
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Axios from 'axios'
import {
  Typography,
  Box,
  IconButton,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Navigate } from "react-router-dom";

const UploadButtons = ({
  user,
  setUser,
  authentication,
  sendMessage,
  editHandler,
}) => {
  const [values, setValues] = useState({
    imageUrl: undefined,
  });



  const Input = styled("input")({
    display: "none",
  });

  const handleUpload = async (e) => {
    
    
    const image = e.target.files[0]; //aqui está almacenado toda la imagen.
    console.log("yo soy " , image)
    const formData = new FormData();
    formData.append("image", image);
    console.log("yo soy formData", formData)

    Axios.post(uploadURL,formData).then(
      (responseAxios)=>{
      
        console.log("yo soy url imagen subida", responseAxios.data.url.uri)
    registerReceipt(formData)
      .then((res) => {
        if (res.status) {
          console.log("yo soy res de upload", res.data)
          
        } else {
          console.log(res.data.errorMessage)
        }
      })
    })
      .catch((err) => {
        console.log(err)
      });
  };

  return (
    <>

<Stack direction="row" alignItems="center" spacing={2}>
              
                
              <Button variant="contained" component="label">
                <Input
                  accept="image/*"
                  id="icon-button-file"
                  name="imageUrl"
                  type="file"
                  onChange={handleUpload}
                />

<label htmlFor="icon-button-file" >
                Upload your picture
              </label>
                </Button>


                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  sx={{ mb: 2 }}
                >
                  <AddAPhotoIcon />
                </IconButton>
                
              </Stack>


    </>
  );
};

export default UploadButtons;

/* 

    
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>

      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <
      </IconButton>
    




    
    */
