import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, CardHeader, Avatar, IconButton, Grid, ButtonBase, Paper, Box } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import {MoreHorizIcon, MoreVertIcon }from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card >
         
      <CardMedia  style={{ height: "50px" }} className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
     
    
     
        <Grid container spacing={1}>
         
         
          
            <Box m={0.75} p={0.75}>
                <Typography className={classes.title} variant="h5">
                {post.title}
                </Typography>
               </Box>
              
              
            
          
            <Box m={0.75} p={0.75}>
              <Typography  className={classes.title} variant="subtitle1">Price: £ {post.price}</Typography> 
              </Box>
            
          </Grid>
        
      
      
      
    
      <CardActions>
        <Button size="small">BUY NOW</Button>
        <Button size="small">OFFER</Button>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
      <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
       
      </CardActions>
    </Card>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
    
    
    
    
    
    
    
    
    
    )







};

export default Post;
