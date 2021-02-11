import React, { useState, useEffect } from "react"

import { Grid, Button, Link, CircularProgress, Box } from "@material-ui/core"

import { signin } from "../actions/auth"
import Avatar from "@material-ui/core/Avatar"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import { useDispatch, useSelector } from "react-redux"
import { Alert } from "@material-ui/lab"
import Googlelogin from "../components/Googlelogin"
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const initialState = {
  email: "",
  password: "",
}

const Login = ({ location }) => {
  const classes = useStyles()
  const [form, setForm] = useState(initialState)
  const dispatch = useDispatch()
  const history = useHistory()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(signin(form, history))
  }

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ backgroundColor: "white", padding: "1rem" }}
    >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {/* {error && <Alert severity="error">{error}</Alert>}
        {loading && <CircularProgress />} */}
        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href={`/register`} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box
        display="flex"
        style={{
          marginTop: "2rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Googlelogin />
      </Box>
    </Container>
  )
}
export default Login
