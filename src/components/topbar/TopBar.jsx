// import "./topbar.css"
// import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AdbIcon from '@mui/icons-material/Adb';
import CustomizedSwitches from "./Switch";


const pages = ['Crypto', 'Wallet', 'Blockchain', 'Prices', 'News', 'Exchange', 'Trading', 'Earn', 'Write', 'Login', 'Register'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
// export default function TopBar() {

  // const {user, dispatch} = useContext(Context);
  // const PF = "http://localhost:5000/images/"


  // const handleLogout = ()=>{
    // dispatch({ type: "LOGOUT" })
  // }
  // return (
    // <div className='top'>
        // {/* <div className="topLeft">
        // <i className="topIcon fa-brands fa-facebook-square"></i>
        // <i className="topIcon fa-brands fa-twitter-square"></i>
        // <i className="topIcon fa-brands fa-pinterest-square"></i>
        // <i className="topIcon fa-brands fa-instagram-square"></i>
        // </div>
       
        // <div className="topCenter">
        //     <ul className="topList">
        //         <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
        //         <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
        //         <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
        //         <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
        //         <li className="topListItem" onClick={handleLogout}>
        //           {user && "LOGOUT"}
        //         </li>
          
        //     </ul>
         
        // </div> 
        // <div className="topRight">
        //   {
        //     user ? (
        //       <Link to="/settings">
        //       <img 
        //       className="topImg"
        //       src={ PF + user.profilePic} alt="" />
        //       </Link>
        //     ) : (
        //       <ul className="topList">
        //       <li className="topListItem">
        //       <Link className="link" to="/login">LOGIN</Link>
        //       </li>
        //       <li className="topListItem">
        //       <Link className="link" to="/register">REGISTER</Link>
        //       </li>
        //       </ul>
        //     )}
         
        //     <i className="topSearchIcon fas fa-search"></i>
        // </div> */}
      

  // </div>
  // )
// }


//   const ResponsiveAppBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const {user, dispatch} = useContext(Context);
//   const PF = "http://localhost:5000/images/"


//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(1),
//       width: 'auto',
//     },
//   }));
  
//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }));
  
//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         width: '12ch',
//         '&:focus': {
//           width: '20ch',
//         },
//       },
//     },
//   }));

//   return (
//     <AppBar position="static" style={{backgroundColor:'white'}}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
           
//             }}
//           >
//             <img src='https://i.ibb.co/HqHLzj3/logo.jpg' height="60px" width="250px" />
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
        
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page}
//                  onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
        
//                 </MenuItem>
        
//               ))}
//             </Menu>
//           </Box>
//           {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             <img src='https://i.ibb.co/HqHLzj3/logo.jpg' height="60px" width="250px" />
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: '#424242', display: 'block' , }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//           <Search style={{border: '1px solid #424242'}} >
//             <SearchIconWrapper >
//               <SearchIcon style={{color: '#424242'}}/>
//             </SearchIconWrapper>
//             <StyledInputBase style={{color: '#424242'}}
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 {/* <Avatar alt="Remy Sharp" src={ PF + user.profilePic} /> */}
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default ResponsiveAppBar;




// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


// mui search bar started
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
// search bar ended

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{backgroundColor:'white'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
                        <img src='https://i.ibb.co/Wnk76Tg/logoo.jpg' height="60px" width="250px" />

            </Typography>

            {/* mobile nav bar menu  started =====================================================*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{color:"#444"}} />
            </IconButton>


            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => ( */}
                {/* <MenuItem key={page} onClick={handleCloseNavMenu}> */}
                  {/* <Typography textAlign="center">{page}</Typography> */}
                  <Button  component="a"
              href=""
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block', fontWeight: 700
              }}
              >
                Crypto
              </Button>
              <Button  component="a"
              href=""
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block', fontWeight: 700 
              }}
              >
                Wallet
              </Button>
              <Button  component="a"
              href=""
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block', fontWeight: 700 
              }}
              >
                Blockchain
              </Button>
              <Button  component="a"
              href="/cryptoPrices"
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block', fontWeight: 700 
              }}
              >
                Crypto Prices
              </Button>
              <Button  component="a"
              href=""
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block', fontWeight: 700 
              }}
              >
                News
              </Button>
              <Button  component="a"
              href=""
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block', fontWeight: 700 
              }}
              >
                Exchange
              </Button>
              <Button  component="a"
              href=""
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block', fontWeight: 700 
              }}
              >
                Trading
              </Button>
              {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> */}
              <Button  component="a"
              href=""
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block', fontWeight: 700 
              }}
              >
                Earn
              </Button>
              {/* </Box> */}
       
              <Button  component="a"
              href='/write'
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444' , fontWeight: 700
              }}
              >
                Write
              </Button>
              <Button  component="a"
              href="/register"
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block', fontWeight: 700 
              }}
              >
                Register
              </Button>
              <Button  component="a"
              href="/login"
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block', fontWeight: 700 
              }}
              >
                Login
              </Button>
            
                {/* </MenuItem> */}
              {/* ))              } */}
            </Menu>
          </Box>
          {/* mobile nav bar menu  ended ===================================================================*/}

          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#444',
              textDecoration: 'none',
            }}
          >
             <img src='https://i.ibb.co/Wnk76Tg/logoo.jpg' height="60px" width="250px" />
          </Typography>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box> */}


          
          <Button  component="a"
              href=""
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block', fontWeight: 700
              }}
              >
                Crypto
              </Button>
              <Button  component="a"
              href=""
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block', fontWeight: 700 
              }}
              >
                Wallet
              </Button>
              <Button  component="a"
              href=""
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block', fontWeight: 700 
              }}
              >
                Blockchain
              </Button>
              <Button  component="a"
              href="cryptoPrices"
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block', fontWeight: 700 
              }}
              >
                Crypto Prices
              </Button>
              <Button  component="a"
              href="/"
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block', fontWeight: 700 
              }}
              >
                News
              </Button>
              <Button  component="a"
              href=""
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block', fontWeight: 700 
              }}
              >
                Exchange
              </Button>
              <Button  component="a"
              href=""
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block', fontWeight: 700 
              }}
              >
                Trading
              </Button>
              {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> */}
              <Button  component="a"
              href=""
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block', fontWeight: 700 
              }}
              >
                Earn
              </Button>
              {/* </Box> */}

              { user ? ( <Button  component="a"
              href='/write'
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block' , fontWeight: 700
              }}
              >
                Write
              </Button>):(
<>
              <Button  component="a"
              href="/register"
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block', fontWeight: 700 
              }}
              >
                Register
              </Button>
              <Button  component="a"
              href="/login"
                // key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#444', display: 'block', fontWeight: 700 
              }}
              >
                Login
              </Button>
              </>
              )}
             
          




            <Search style={{border: '1px solid #444', marginRight: '10px'}}>
            <SearchIconWrapper style={{color: '#444'}}>
              <SearchIcon />
            </SearchIconWrapper >
            <StyledInputBase  style={{color: '#444'}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                { user ? (
                <Avatar alt="User" src={ PF + user.profilePic} />
                ):(
                <Avatar sx={{display: 'none'}} alt="User" src={'https://images.pexels.com/photos/11674118/pexels-photo-11674118.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'} />

                ) }
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            <CustomizedSwitches/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
