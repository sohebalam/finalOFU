import { AppBar, Button, Container, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import theme from '../../theme'
import './head.css'


const useStyles = makeStyles(()=>({
    typographyStyles:  {
        flex: 1 
    }
})) 

const Header = () => {
    
    return (
        <>
        <AppBar position="static" color="primary" >
            




         <Toolbar>
         
         <Typography  edge='start' ><h3>OpenFreeUni</h3></Typography>
             <IconButton  aria-label='menu'> {<img src="../images/v3.png" height="40px" alt="logo"/>}</IconButton> 
             
             <Typography variant='h6' style={{flex: 1}}></Typography>
             <Button style={{color: 'white'}} edge='start' aria-label='menu'> Login</Button>
             <Button style={{color: 'white'}} edge='start' aria-label='menu'> Register</Button>
        </Toolbar>
        
        </AppBar>
        <hr />
       </>
      
        
     


    )
}

export default Header
