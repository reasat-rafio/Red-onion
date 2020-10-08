import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CreateIcon from "@material-ui/icons/Create";

import logo from "../../../hot-onion-restaurent-resources/logo2.png";
import { ListItemIcon } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setSnackbar } from "../../redux/Actions/snackbarAction";
import { logOut } from "../../redux/Actions/userFormAction";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logo: {
    height: "30px",
    cursor: "pointer",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
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
  crtAccount: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.grey,
  },
}));

function Header() {
  // Getting the user auth from redux
  const auth = useSelector((state) => state.auth);

  // To Login Page
  const Login = () => {
    window.location.pathname = "/login";
  };

  // Logout from the site

  const LogOut = () => {
    dispatch(logOut());
    dispatch(setSnackbar(true, "success", "Logout Successfully"));
  };

  // To Signup page
  const Signup = () => {
    window.location.pathname = "/signup";
  };

  // Number of food added to cart
  const [cart, setCart] = useState(0);

  const state = useSelector((state) => state.selectedFootStore);
  useEffect(() => {
    setCart(state.inCart);
  }, [state]);

  // Go To The Cart Section or Show error if there is no item in cart
  const dispatch = useDispatch();
  const goToCart = () => {
    if (!cart == 0) {
      window.location.pathname = "/review";
    } else {
      dispatch(setSnackbar(true, "error", "Your Cart Is Empty"));
    }
  };

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
    >
      {auth.isLoggedIn ? (
        <MenuItem onClick={LogOut}>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          Log out
        </MenuItem>
      ) : (
        <MenuItem onClick={Login}>
          <ListItemIcon>
            <LockOpenOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Login
        </MenuItem>
      )}

      <MenuItem className={classes.crtAccount} onClick={Signup}>
        <ListItemIcon>
          <CreateIcon fontSize="small" />
        </ListItemIcon>
        Create Account
      </MenuItem>
    </Menu>
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
      <MenuItem onClick={goToCart}>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={cart} color="secondary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Food Cart</p>
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
      <AppBar elevation={0} color="primary" position="static">
        <Toolbar>
          <img src={logo} className={classes.logo} alt="logo" />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              onClick={goToCart}
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={cart} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
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
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default Header;
