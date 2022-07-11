import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import BottomBar from "./components/bottomBar/BottomBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import CryptoPrices from "./pages/cryptoPrices/CryptoPrices";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import AdvertiseWithUs from "./pages/advertiseWithUs/AdvertiseWithUs";
import React from "react";
import "./app.css"
import ReactDOM from 'react-dom';

function App() {
  const {user} = useContext(Context);
  const [isLit, setLit] = React.useState(true);
  const brightness = isLit ? "lit" : "dark";
  return (<>
 <div className={`room ${brightness}`}>

    the room is {isLit ? 'lit' : 'dark'}
    <br />
  <button onClick={() => setLit(!isLit)}>
    flip
  </button>

    <BrowserRouter className="room">

        <TopBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={user ? <Home/> : <Register />}/>
          <Route path="/login" element={user ? <Home/> : <Login />}/>
          <Route path="/write" element={user ? <Write/> : <Register/>}/>
          <Route path="/cryptoPrices" element={<CryptoPrices/>}/>
          <Route path="/settings" element={user ? <Settings/> : <Register/>}/>
          <Route path="/post/:postId" element={<Single/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="/advertiseWithUs" element={<AdvertiseWithUs/>}/>
        </Routes>
        <BottomBar/>
  </BrowserRouter>  
 </div>
  </>
  );
}

export default App;
