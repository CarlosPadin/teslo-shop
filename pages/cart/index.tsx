import { useContext } from "react";

import { CartList, OrderSummary } from "@/components/cart";
import { ShopLayout } from "@/components/layouts";
import { CartContext } from "@/context";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

const CartPage = () => {
  const {cart} = useContext(CartContext);


  return (
    <ShopLayout title={`Cart - ${cart.length}`}  pageDescription="Shoping cart of the store">
      <Typography variant="h1" component="h1">
        Cart
      </Typography>

      <Grid container>

        <Grid item xs={12} sm={7}>
          <CartList editable={true}  />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Card className="sumary-card">
            <CardContent>
              <Typography variant="h2">Order</Typography>
              <Divider sx={{ my: 1 }} />
              <OrderSummary cart={cart}/>

              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="'circular-btn" fullWidth>
                  Checkout
                </Button>
              </Box>

            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default CartPage;
