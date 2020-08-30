import React from "react";
import "./AppHeader.css";
import { Link } from "react-router-dom";
//UI import
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import MailIcon from "@material-ui/icons/Mail";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";
import { makeStyles } from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },

  mainBar: {
    backgroundColor: "white",
    borderStyle: "inset",
    borderTop: "0",
    borderLeft: "0",
    borderRight: "0",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    color: "black",
    position: "absolute",
    left: "50%",
    display: "block",
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  logIn: {
    marginRight: "5px",
    color: "#84E0CB",
  },

  signUp: {
    marginRight: "5px",
    marginLeft: "5px",
    color: "#84E0CB",
  },
}));

function AppHeader() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={3} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.mainBar} elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            className="menuButton"
            aria-label="open drawer"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon style={{ color: "#84E0CB" }} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={handleClose}
              style={{ backgroundColor: "#84E0CB", color: "white" }}
            >
              로그인
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              style={{ backgroundColor: "#84E0CB", color: "white" }}
            >
              회원가입
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              style={{ backgroundColor: "#84E0CB", color: "white" }}
            >
              장바구니
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              style={{ backgroundColor: "#84E0CB", color: "white" }}
            >
              마이페이지
            </MenuItem>
          </Menu>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/">
              <img src={require("./logo-us.svg")} alt="우리 로고 이미지" />
              우리
            </Link>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button className={classes.logIn} href="/accounts/login">
              LOG IN
            </Button>
            <Button className={classes.signUp} href="/accounts/signup">
              SIGN UP
            </Button>
            <IconButton
              aria-label="show 4 new mails"
              color="default"
              style={{ marginRight: "10px", marginLeft: "10px" }}
            >
              <Badge badgeContent={3} color="secondary">
                <MailIcon style={{ color: "#84E0CB" }} />
              </Badge>
            </IconButton>
            <IconButton
              aria-label="show 17 new notifications"
              color="default"
              href="/accounts/profile"
            >
              <PersonIcon style={{ color: "#84E0CB" }} />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon style={{ color: "black" }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default AppHeader;
