import "./post.css"; 
import { Link } from "react-router-dom"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';

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


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function Post({ post }) {
  const PF = "http://localhost:5000/images/"

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
<>

<Grid item xs={4} className="card">

        <Card sx={{}} >
        <CardMedia
        component="img"
        height="194"
        image={PF + post.photo}
        alt="Paella dish"
      />
      <CardHeader component={Link} to={`/post/${post._id}`} className="link"
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
        title={post.title}
        subheader={new Date(post.createdAt).toDateString()}
      />
    
      <CardContent>
        <Typography variant="body2" color="text.secondary"  className="postDescription" >
        {post.desc}
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
        

    {/* <div className="post">
        {post.photo && (

          <img className="postImg"
          src={PF + post.photo} alt="" />
          )}
    <div className="postInfo">
        <div className="postCategories">
          {post.categories.map(c=>(
            <span className="postCategories">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
        <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        <p className="postDescription">{post.desc}
        </p>

    </div>

    </div>   */}
    </>
  )
          }

