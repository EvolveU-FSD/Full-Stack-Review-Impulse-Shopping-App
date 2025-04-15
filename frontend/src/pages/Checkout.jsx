import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { Card, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
 
  const { cart } = useCart();

  const cartSum = ()=> {
    let sum = 0;
    cart.forEach(item => {
      sum += item.price;
    });
    return sum;
  }

  return (
    <div>
      <Typography variant="h3" gutterBottom>Checkout</Typography>
      <Typography variant="h5" gutterBottom>Total: ${cartSum()}</Typography>
    
    </div>
  );
};

export default Home;