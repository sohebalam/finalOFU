import React from "react"
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Button,
  Link,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from "@material-ui/core/styles"
import UserLoggedIn from "../components/UserLoggedIn.js"
import logo from "../images/v3.png"
import theme from "../theme"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const NavBar = () => {
  const classes = useStyles()
  return (
    <Box component="nav" marginBottom="1rem">
      <AppBar position="static" style={{ color: "primary" }}>
        <Toolbar>
          <IconButton
            aria-label="menu"
            // onClick={handleClick}
          >
            {" "}
            {<img src={logo} height="40px" alt="logo" />}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            OpenFreeUni
          </Typography>

          <UserLoggedIn />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
