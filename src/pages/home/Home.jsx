import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "axios";
import "./home.css"
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Carousel from "../../components/carousel/Carousel";
import BottomBar from "../../components/bottomBar/BottomBar";

export default function Home() {
  const [posts,setPosts] = useState([]);
  const {search} = useLocation()
  
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data)
    };
    fetchPosts();
  },[search])
  return (
    <>
            {/* <Header/> */}
            <Carousel/>
    <div  className="home">
        <Posts posts={posts} />
        <Sidebar/>
    </div>
 
    </>
  )
}
