import { useContext, useState } from "react";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { ErrorOutline } from "@mui/icons-material";
import { Box, Button, Chip, Grid, TextField, Typography } from "@mui/material";
import { tesloApi } from "@/api";
import { AuthLayout } from "@/components/layouts";
import { validations } from "@/utils";
import { AuthContext } from "@/context";
import { useRouter } from "next/router";

type Inputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [showError, setShowError] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();

  const onLogin = async ({ email, password }: Inputs) => {
    setShowError(false);

    const isValidLogin = await loginUser(email, password);

    if (!isValidLogin) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      return;
    }

    router.replace("/");
  };

  return (
    <AuthLayout title="Log In">
      <form onSubmit={handleSubmit(onLogin)} noValidate>
        <Box sx={{ width: 300, padding: "10px 20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1" component="h1">
                Log In
              </Typography>
              {showError && (
                <Chip
                  label="Email / Password incorrect"
                  color="error"
                  icon={<ErrorOutline />}
                  className="fadeIn"
                  sx={{ display: "flex", flexDirection: "center" }}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                label="E-mail"
                variant="outlined"
                fullWidth
                {...register("email", {
                  required: "You must fill this field",
                  validate: validations.isEmail,
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                {...register("password", {
                  required: "You must fill this field",
                  minLength: { value: 6, message: "6 charachters minimum" },
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
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
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
