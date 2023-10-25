import { AuthLayout } from "@/components/layouts";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";

const LoginPage = () => {
  return (
    <AuthLayout title="Log In">
      <Box sx={{ width: 300, padding: "10px 20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1" component="h1" >
              Log In
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField label="E-mail" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              color="secondary"
              className="circular-btn"
              size="large"
              fullWidth
            >
              Log In
            </Button>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="end">
            <Link href={"/auth/register"}>
              <Typography variant="caption">
                Don't have an account??
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

export default LoginPage;
