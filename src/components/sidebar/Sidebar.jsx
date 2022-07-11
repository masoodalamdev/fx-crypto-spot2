import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Divider } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Sidebar() {
  const [cat, setCats] = useState([]);

  useEffect(()=>{
    const getCats = async ()=>
    {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats()
  },[])
  

  return (
//     <div className="sidebar">
//         <div className="sidebarItem">
//             <span className="sidebarTitle">ABOUT ME</span>
//             <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgiHq0mb4pNtN8O1xbD_8UP_W_XOGKtsuQQymw_C0oKJ6Wa-sPD6baAuPCIQGIWA2y3dh8O5s_qEH766p9J8HK1PiqWuzgPhLtZG3wQABHyaFt4baX-hlZWnO4J_AnKC2AH44FucaBhz7HYZUgQ1sF5v3vfb34yb_MizvmEjD9tumTPZgIq3TFgkdtj/s1600/banner.jpg" alt="" />
//         <p>
      
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laboriosam dolores consectetur eum rerum, nam nihil fugiat dolorum, consequuntur reiciendis aliquam dolor pariatur tenetur voluptates suscipit? Ex saepe corporis voluptate.
//         </p>
//         </div>
//         <div className="sidebarItem">
//           <span className="sidebarTitle">CATEGORIES</span>
//           <ul className="sidebarList">

//             {cat.map(c=>(
//             <Link to={`/?cat=${c.name}`} className="link">
//             <li className="sidebarListItem">{c.name}</li>
//             </Link>

//             ))}

//           </ul>
//         </div>
//         <div className="sidebarItem">
//           <span className="sidebarTitle">FOLLOW US</span>
//           <div className="sidebarSocial">
//         <i className="sidebarIcon fa-brands fa-facebook-square"></i>
//         <i className="sidebarIcon fa-brands fa-twitter-square"></i>
//         <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
//         <i className="sidebarIcon fa-brands fa-instagram-square"></i>
//           </div>
//         </div>
//     </div>


<Grid container xs={3}
>
 
  {/* <Grid item >
    <Item style={{border: "1px solid red"}}>
         <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://images.pexels.com/photos/12553640/pexels-photo-12553640.jpeg" alt="" style={{width:'280px', height: '300px'}}/>
        <p>
      
Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi laboriosam dolores consectetur eum rerum, nam nihil fugiat dolorum, consequuntur reiciendis aliquam dolor pariatur tenetur voluptates suscipit? Ex saepe corporis voluptate.
        </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">

            {cat.map(c=>(
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>

            ))}

          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook-square"></i>
        <i className="sidebarIcon fa-brands fa-twitter-square"></i>
        <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
        <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          </div>
        </div>
     </div>
    </Item>


  </Grid> */}
 

 <Card sx={{}} className="sidebar2">
  <Typography variant="h6">About me</Typography>
        <CardMedia
        component="img"
        height="194"
        image="https://images.pexels.com/photos/12553640/pexels-photo-12553640.jpeg"
        alt="Paella dish"
      />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="New Crypto Launching Soon"
        subheader="Hello world"
      />
    
      <CardContent>
        <Typography variant="body2" color="text.secondary"  className="postDescription" >
        Its about section baby <Divider></Divider>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores enim autem minima fugit laborum fuga eos. Cumque culpa libero saepe veniam magnam obcaecati ipsam adipisci fuga! Dolor, vitae culpa.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
     
      </CardActions>
   
    </Card>
</Grid>
  )
}
