import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlepost.css"
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';


// import "./post.css";
import * as React from 'react';
import { styled } from '@mui/material/styles';
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



export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})
  const PF = "http://localhost:5000/images/"
  const {user} = useContext(Context)
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

useEffect(()=>{
  const getPost = async ()=>{
    const res = await axios.get("/posts/" + path); 
    setPost(res.data);
    setTitle(res.data.title);
    setDesc(res.data.desc);

  };
  getPost()
},[path])
  const handleDelete = async ()=>{
    try{
      await axios.delete(`/posts/${post._id}`, {data:{username:user.username}});
      window.location.replace("/")
    }catch(err){

    }
  }

  const handleUpdate = async ()=>{
    try{
      await axios.put(`/posts/${post._id}`, {
        username:user.username,
        title,
        desc
        });
      setUpdateMode(false)
    }catch(err){

    }
  }

  return (
    <>
    {/* <div className="singlePost">
        <div className="singlePostWrapper">
          {post.photo && (
            <img src={PF + post.photo} alt="" className="singlePostImg" />
          )}{
            updateMode ? <input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e)=>setTitle(e.target.value)} /> : (
          
            <h1 className="singlePostTitle">
              {title}
              {post.username === user?.username && (
                <div className="singlePostEdit">
            <i class="singlePostIcon fa-regular fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
            <i class="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
            </div>
              )}
            </h1>
                )}
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author:
                <Link to={`/?user=${post.username}`} className="link">
                 <b>{post.username}</b>
                </Link>
                 </span>
                <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>  
                {updateMode ? (
                  <textarea className="singlePostDescriptionInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
                ) : (
                <p className="singlePostDescription">{desc}</p>     
                   )}
                   {updateMode && (
                   <button className="singlePostButton" onClick={handleUpdate}>Update</button>
                   )}
        </div>
    </div> */}




 
  <Card className="singlePost">
  <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        R
      </Avatar>
    }
    action={
      <IconButton aria-label="settings">
      </IconButton>
    }
    // title={title}
    title= {<Typography variant="h1" component="div" gutterBottom className="singlePostTitle">
   {title}
  </Typography>
    }
    subheader= {
    <Link to={`/?user=${post.username}`} className="link">
     <b>
     {'Author: ' +  post.username}
    
     </b>
    </Link>
    }
  />
  <CardMedia className="singlePostImg"
    component="img"
    // height="194"
    image={PF + post.photo}
    alt="Paella dish"
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary">
      {desc}
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
      <FavoriteIcon />
    </IconButton>
    <IconButton aria-label="share">
      <ShareIcon />
    </IconButton>
    {/* <ExpandMore
      expand={expanded}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <ExpandMoreIcon />
    </ExpandMore> */}
  </CardActions>
  {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
      <Typography paragraph>Method:</Typography>
      <Typography paragraph>
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
      </Typography>
      <Typography paragraph>
        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
        large plate and set aside, leaving chicken and chorizo in the pan. Add
        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
        stirring often until thickened and fragrant, about 10 minutes. Add
        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
      </Typography>
      <Typography paragraph>
        Add rice and stir very gently to distribute. Top with artichokes and
        peppers, and cook without stirring, until most of the liquid is absorbed,
        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
        mussels, tucking them down into the rice, and cook again without
        stirring, until mussels have opened and rice is just tender, 5 to 7
        minutes more. (Discard any mussels that don&apos;t open.)
      </Typography>
      <Typography>
        Set aside off of the heat to let rest for 10 minutes, and then serve.
      </Typography>
    </CardContent>
  </Collapse> */}
</Card>
</>
);
}




// =============== mui
// import "./post.css";
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';  
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';





// export default function SinglePost() {
//   // const PF = "http://localhost:5000/images/"

//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };


//     const location = useLocation();
//   const path = location.pathname.split("/")[2];
//   const [post, setPost] = useState({})
//   const PF = "http://localhost:5000/images/"
//   const {user} = useContext(Context)
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");
//   const [updateMode, setUpdateMode] = useState(false);

// useEffect(()=>{
//   const getPost = async ()=>{
//     const res = await axios.get("/posts/" + path); 
//     setPost(res.data);
//     setTitle(res.data.title);
//     setDesc(res.data.desc);

//   };
//   getPost()
// },[path])
//   const handleDelete = async ()=>{
//     try{
//       await axios.delete(`/posts/${post._id}`, {data:{username:user.username}});
//       window.location.replace("/")
//     }catch(err){

//     }
//   }

//   const handleUpdate = async ()=>{
//     try{
//       await axios.put(`/posts/${post._id}`, {
//         username:user.username,
//         title,
//         desc
//         });
//       setUpdateMode(false)
//     }catch(err){

//     }
//   }

//   return (
    // <div className="post">
    //     {post.photo && (

    //       <img className="postImg"
    //       src={PF + post.photo} alt="" />
    //       )}
    // <div className="postInfo">
    //     <div className="postCategories">
    //       {post.categories.map(c=>(
    //         <span className="postCategories">{c.name}</span>
    //       ))}
    //     </div>
    //     <Link to={`/post/${post._id}`} className="link">
    //     <span className="postTitle">{post.title}</span>
    //     </Link>
    //     <hr />
    //     <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
    //     <p className="postDescription">{post.desc}
    //     </p>

    // </div>

    // </div>


    // mui post

//     <Card sx={{  }}
//      className="SinglePost">
      
//       <Link to={`/post/${post._id}`} className="link">
//       <CardHeader className="singlePostWrapper"
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }

        
//         title={post.title}
//         // to={`/post/${post._id}`} 

//         subheader={new Date(post.createdAt).toDateString()}
//       />

//       <CardMedia
//         component="img"
//         height="194"
//         image={PF + post.photo}
//         alt="Paella dish"
//         />
//         </Link>
//       <CardContent>
//         <Typography variant="body2" color="text.secondary" 
//         className="postDescription"
//         >
//           {post.desc}
//         </Typography>
//       </CardContent>
//       <Typography>

//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//       </Typography>

//     </Card>




//   )
// }
