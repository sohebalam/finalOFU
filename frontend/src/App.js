import React from "react"
import { Container } from "@material-ui/core"

import { BrowserRouter, Route, Switch } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import HomeScreen from "./pages/HomeScreen"
import UploadScreen from "./pages/UploadScreen"
import Header from "./components/Header"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/upload" component={UploadScreen} exact></Route>
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/login" exact component={LoginPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Container>
  )
}

export default App
