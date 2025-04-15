import { useEffect, useState } from 'react';
// import { useCart } from '../context/CartContext';
import { Card, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import  CartButton  from '../components/CartButton';

const Home = () => {
  const [items, setItems] = useState([]);
  // const { addToCart } = useCart();

  useEffect(() => {
    fetch('http://localhost:3000/api/items')
      .then(res => res.json())
      .then(setItems);
  }, []);

  const renderRegretLevel = (level) => '🔥'.repeat(level);

  return (
    <div>
      <Typography variant="h3" gutterBottom>Impulse Buy Simulator</Typography>
      <Grid container spacing={3}>
        {items.map(item => (
          <Grid item xs={12} md={4} key={item._id}>
            <Card>
              <CardMedia component="img" height="140" image={item.imageUrl} alt={item.name} />
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>{item.description}</Typography>
                <Typography>${item.price.toFixed(2)}</Typography>
                <Typography>Regret Level: {renderRegretLevel(item.regretLevel)}</Typography>
                <CartButton item={item} />
                {/* <Button variant="contained" onClick={() =>{ console.log("adding to cart: ", item); addToCart(item)}}>Add to Cart</Button> */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Link to="/cart">
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
          View Cart
        </Button>
      </Link>
    </div>
  );
};

export default Home;