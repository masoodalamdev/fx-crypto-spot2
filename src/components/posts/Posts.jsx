import { Grid } from "@mui/material"
import Post from "../post/Post"
import "./posts.css"

export default function Posts({posts}) {
  return (
    // <div className="posts">
    //   {posts.map(p=>(
    //   <Post post={p}/>
    //   ))}
    // </div>
    <Grid container xs={9}>
       {posts.map(p=>(
       <Post post={p}/>
       ))}
    </Grid>
  )
}
