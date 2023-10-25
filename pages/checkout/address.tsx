import { ShopLayout } from "@/components/layouts";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const AddressPage = () => {
  return (
    <ShopLayout title="Address" pageDescription="Confirm address">
      <Typography variant="h1" component="h1">
        Addres
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField label="Name" variant="standard" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Last Name" variant="standard" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Address" variant="standard" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Address 2 (opcional)"
            variant="standard"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Postal Code" variant="standard" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="City" variant="standard" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Country</InputLabel>
            <Select variant="standard" label="country" value={1}>
              <MenuItem value={1}>Cuba</MenuItem>
              <MenuItem value={2}>Panama</MenuItem>
              <MenuItem value={3}>USA</MenuItem>
              <MenuItem value={4}>Espana</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Phone" variant="standard" fullWidth />
        </Grid>
      </Grid>

      <Box display="flex" justifyContent="center" sx={{ mt: 5 }}>
        <Button color="secondary" className="circular-btn" size="large">
          Check buy
        </Button>
      </Box>
      
    </ShopLayout>
  );
};

export default AddressPage;
