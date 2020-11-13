import React, { useState, useEffect } from 'react';
import { getPosts } from '../actions/posts';
import ProductCard from '../components/Posts/ProductCard';


import { useDispatch, useSelector } from 'react-redux';
import useStyles from '../styles';
import { Container, Grid } from '@material-ui/core';

import Footer from '../components/footer/Footer'
import Header from '../components/header/Head';






export default function HomeScreen() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
        <div>
     
        
          <Header/>
       
              <ProductCard setCurrentId={setCurrentId} />
            
            <Footer/>
        
     
    </div>
    );
}
