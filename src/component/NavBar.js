import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import UserAvatar from "../component/UserAvatar";
import { logout, getAuth } from "../store";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  logoutIcon: {
    // [theme.breakpoints.down("xs")]: {
    //   flexGrow: 1
    // }
    display: "flex",
    alignItems: "center"
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  headerOptions: {
    display: "flex",
    marginRight: "50px"
  },
  headerOptionItems: {
    marginRight: "20px",
    padding: "5px",
    cursor: "pointer"
  }

}));

const NavBar = (props) => {
  const dispatch = useDispatch();
  const { user: { name } } = useSelector(getAuth);

  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL)
    setAnchorEl(null);
  };

  const handleOptionClick = pageURL => {
    history.push(pageURL);
  };

  const handleLogout = () => {
    dispatch(logout());
  }

  const menuItems = [
    {
      menuTitle: "Home",
      pageUrl: "/"
    },
    {
      menuTitle: "Documents",
      pageUrl: "/documents"
    },
    {
      menuTitle: "Install Base",
      pageUrl: "/installbase"
    },
    {
      menuTitle: "Error Code",
      pageUrl: "/errorcodes"
    },
    {
      menuTitle: "Password",
      pageUrl: "/passwords"
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <div
            className={classes.logoutIcon}
          >
            <UserAvatar handleLogout={handleLogout} name={name}/>
          </div>
         
          {isMobile ? (
            <>
              <IconButton
                edge="start" 
                className={classes.menuButton} 
                color="inherit" 
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => handleMenuClick(item.pageUrl)}
                  >
                    {item.menuTitle}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              {menuItems.map((item, index) => (
                <Typography
                  key={index} 
                  onClick={() => handleOptionClick(item.pageUrl)}
                  className={classes.headerOptionItems}
                >
                  {item.menuTitle}
                </Typography>
              ))}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(NavBar);