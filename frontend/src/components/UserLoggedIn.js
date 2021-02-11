import { Button, Typography, Link, Box } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import PersonIcon from "@material-ui/icons/Person"
import AssignmentIcon from "@material-ui/icons/Assignment"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import { useHistory, useLocation } from "react-router-dom"

const UserLoggedIn = () => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("profile"))
  )

  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    const token = userInfo?.token

    setUserInfo(JSON.parse(localStorage.getItem("profile")))
  }, [location])

  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" })
    history.push("/")
    setUserInfo(null)
  }
  const registerHandler = () => {}
  const loginHandler = () => {}

  return (
    <>
      {userInfo ? (
        <>
          <Box
            style={{
              marginRight: "0.25rem",
              marginLeft: "0.75rem",
              marginTop: "0.75",
            }}
          >
            <Typography style={{ marginTop: "0.25rem" }}>
              {" "}
              Hello {userInfo.result.givenName} {userInfo.result.familyName}
              {userInfo.result.name}
            </Typography>
          </Box>
          <Box style={{ marginTop: "0.25rem" }}>
            <Button
              color="inherit"
              onClick={logoutHandler}
              style={{ marginRight: "0.5rem" }}
            >
              <ExitToAppIcon style={{ marginRight: "0.25rem" }} />
              LogOut
            </Button>
          </Box>
        </>
      ) : (
        <>
          {" "}
          <Button color="inherit" onClick={registerHandler}>
            <Link style={{ color: "white" }} href="/register">
              <AssignmentIcon style={{ marginRight: "0.25rem" }} />
              Register
            </Link>
          </Button>
          <Button color="inherit" onClick={loginHandler}>
            <Link style={{ color: "white" }} href="/login">
              <PersonIcon style={{ marginRight: "0.25rem" }} />
              Login
            </Link>
          </Button>
        </>
      )}
    </>
  )
}
export default UserLoggedIn
