import { CartList, OrderSummary } from "@/components/cart";
import { ShopLayout } from "@/components/layouts";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";

const SummaryPage = () => {
  return (
    <ShopLayout
      title="Order Summary"
      pageDescription="Order Summary ready to buy"
    >
      <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
        Order Summary
      </Typography>

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

              <Divider variant="middle" sx={{ mt: 2 }}/>

              <Box display="flex" justifyContent="end">
                <Link
                  href="/checkout/address"
                  style={{ textDecoration: "none" }}
                >
                  <Typography variant="button">Edit</Typography>
                </Link>
              </Box>

              <OrderSummary />


              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="'circular-btn" fullWidth>
                  Confirm
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default SummaryPage;
