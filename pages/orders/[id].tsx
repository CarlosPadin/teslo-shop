import { useContext } from "react";
import Link from "next/link";

import { CartList, OrderSummary } from "@/components/cart";
import { ShopLayout } from "@/components/layouts";
import {
  CreditCardOffOutlined,
  CreditScoreOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { CartContext } from "@/context";

const OrderPage = () => {
  const {cart} = useContext(CartContext);
  
  return (
    <ShopLayout
      title="Order Summary 123abc"
      pageDescription="Order Summary ready to buy"
    >
      <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
        Order: 123abc
      </Typography>

      {/* <Chip
        sx={{ my: 2 }}
        label="Payment pending"
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlined />}
      /> */}
      <Chip
        sx={{ my: 2 }}
        label="Already Paid"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlined />}
      />

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Card className="sumary-card">
            <CardContent>
              <Typography variant="h2">Summary (3 items)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent="end">
                <Link
                  href="/checkout/address"
                  style={{ textDecoration: "none" }}
                >
                  <Typography variant="button">Edit</Typography>
                </Link>
              </Box>

              <Typography variant="subtitle1">Deliver:</Typography>
              <Typography>Carlos Padin</Typography>
              <Typography>16 #259, Plaza</Typography>
              <Typography>10400</Typography>
              <Typography>Havana, Cuba</Typography>
              <Typography>+53 xxxx xxxx</Typography>

              <Divider variant="middle" sx={{ mt: 2 }} />

              <Box display="flex" justifyContent="end">
                <Link
                  href="/checkout/address"
                  style={{ textDecoration: "none" }}
                >
                  <Typography variant="button">Edit</Typography>
                </Link>
              </Box>

              <OrderSummary cart={cart}/>

              <Box sx={{ mt: 3 }}>
                <h1>Pagar</h1>
                <Chip
                  sx={{ my: 2 }}
                  label="Already Paid"
                  variant="outlined"
                  color="success"
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrderPage;
