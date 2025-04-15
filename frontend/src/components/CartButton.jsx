import { useCart } from "../context/CartContext"; 
import { Button, Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useState } from "react";

export default function CartButton({ item }) {
    const [open, setOpen] = useState(false);
    const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log("adding to cart: ", item);
      addToCart(item);
      setOpen(true);
    };


    
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setToggle(false);
    //     }, 1500); // Hide the alert after 2 seconds
    
    //     return () => clearTimeout(timer); // Cleanup the timer on unmount
    // }, [toggle]); // Only run this effect when toggle changes

    return (
        <>
            <Button variant="contained" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                open={open}
                autoHideDuration={1500}
                onClose={() => setOpen(false)}
                message="Item added to cart"
            />
            {/* { toggle ? <Alert severity="info" style={{ marginTop: "10px" }}>item added to Cart</Alert> : null } */}
        </>         

  );
}

