import * as React from "react";
import Stack from "@mui/material/Stack";
import { registerReceipt } from "../services/user-ws";
import { uploadURL } from "../services/api.js";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Axios from "axios";
import {
  IconButton,
  Button,
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import {ButtonLoading} from "./index.js"


const UploadButtons = () => {


  const [uploadSuccess, setUploadSuccess] = useState(false);


  const Input = styled("input")({
    display: "none",
  });

  const handleUpload = async (e) => {
    const image = e.target.files[0]; //aqui está almacenado toda la imagen.
    setUploadSuccess((prevValue)=>!prevValue)
    const formData = new FormData();
    formData.append("image", image);

    Axios.post(uploadURL, formData)
      .then((responseAxios) => {
        console.log("img uploaded url", responseAxios.data.url.uri);
        registerReceipt(formData).then((res) => {
          if (res.status) {
            console.log("UPLOAD SUCCESS", res.data);
            setUploadSuccess((prevValue)=>!prevValue)

          } else {
            console.log("AM AN ERROR",res.data.errorMessage);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
<>
{(uploadSuccess ) ? (
  <ButtonLoading/>
) : (


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

          <label htmlFor="icon-button-file">
            Have you started? Upload your picture
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



)}
</>

  );
};

export default UploadButtons;





