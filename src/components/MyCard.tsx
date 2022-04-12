import React, { FC, useState } from "react";

import {CardMedia, CardContent, Typography, IconButton} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from '@mui/material/Card';
import { Character } from "../Pages/Characters";
import { useNavigate } from "react-router-dom";


type MyCardProps = {
  name:string, 
  image:string, 
  character: Character
}

const MyCard: FC<MyCardProps> = (props:MyCardProps) => {

    const {name, image, character} = props;
    const navigate = useNavigate()


    return(
      <>
      <Card onClick={() => navigate(String(character.id))}>
          <CardMedia
            component="img"
            width="300px"
            image={image}
          />

          <CardContent>  
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>

          <IconButton aria-label="add to favorites">
            <FavoriteIcon  />
          </IconButton>
              
      </Card>
      </>
  
    )
}

export default MyCard