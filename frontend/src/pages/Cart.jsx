import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
    console.log("cart: ", cart);
  return (
    <div>
      <Typography variant="h4" gutterBottom>Your Impulse Cart</Typography>
      {cart.length === 0 ? <Typography>No impulse buys yet...</Typography> : (
        <List>
          {cart.map(item => (
            <ListItem key={item._id}>
              <ListItemText primary={item.name} secondary={`$${item.totalPrice.toFixed(2) || 0}`} />
              <ListItemText secondary={item.cartQuantity} />
              <Button color="error" onClick={() => removeFromCart(item._id)}>Remove</Button>
            </ListItem>
          ))}
        </List>
      )}
      <Link to="/">
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Continue Shopping Like an Idiot.
        </Button>
      </Link>
    </div>
  );
};

export default Cart;