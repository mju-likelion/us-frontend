// import React, { useState } from 'react';
// import './App.css';

// import { fade, makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';
// import Button from '@material-ui/core/Button';
// import PersonIcon from '@material-ui/icons/Person';


// function App() {
//   //state
//   const [count, setCount] = useState(0);


//   return (
//     <div className="App" style={{flex: 1}}>
//       {/* 매인 네비바 className=mainBar */}
//       <AppBar position="static" className="mainBar" style={{backgroundColor: 'white', boxShadow: '1'}}>
//         <Toolbar>
//           {/* 메뉴 햄버거바 className=menuButon */}
//           <IconButton
//             edge="start"
//             className="menuButton"
//             color="black"
//             aria-label="open drawer"
//           >
//             <MenuIcon />
//           </IconButton>
//           {/* 타이틀 className=title */}
//           <Typography className="title" variant="h6" noWrap>
//             우리
//           </Typography>
//           {/* 우측 아이콘들 className=section */}
//           <div className="section">
//             <Button style={{marginRight: '10px'}}>로그인</Button>
//             <Button variant="outlined" style={{marginRight: '10px', marginLeft: '10px'}}>SIGN UP</Button>
//             <IconButton aria-label="show 4 new mails" color="black" style={{marginRight: '10px', marginLeft: '10px'}}>
//               {/* badgeContent = 알림 수 */}
//               <Badge badgeContent={3} color="secondary"> 
//                 <MailIcon />
//               </Badge>
//             </IconButton>
//             <IconButton aria-label="show 17 new notifications" color="black">
//                 <PersonIcon />
//             </IconButton>
//           </div>
//         </Toolbar>
//       </AppBar>
//       <br />
//       {/* 서브바 className=subBar */}
//       <AppBar position="static" className="subBar" style={{backgroundColor: 'white', boxShadow: 'none'}}>
//         <Toolbar>
//           <Button color="black" className="tools"><h2 className="btn-text">우리의 리뷰</h2></Button>
//           <Button color="black" className="tools"><h2 className="btn-text">우리의 장터</h2></Button>
//           <Button color="black" className="tools"><h2 className="btn-text">우리의 꿀팁</h2></Button>
//         </Toolbar>
//       </AppBar>
//         <p>우리와 함께 삶의 질을 높여보세요</p>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click Me
//       </button>
//     </div>
//   );
// }

// export default App;
