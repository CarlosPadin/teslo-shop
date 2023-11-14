import { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import { Box, Button, Chip, Grid, TextField, Typography } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";
import { AuthLayout } from "@/components/layouts";
import { validations } from "@/utils";
import { tesloApi } from "@/api";
import { AuthContext } from "@/context";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onRegister = async ({name, email, password}: Inputs) => {
    setShowError(false);
    const { hasError, message } = await registerUser(name, email, password);
    
    if (hasError) {
      setShowError(true);
      setErrorMessage( message! );
      setTimeout(() => {setShowError(false)}, 3000);
      return;
    }

    router.replace('/');
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={handleSubmit(onRegister)} noValidate>
        <Box sx={{ width: 300, padding: "10px 20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1" component="h1">
                Register
              </Typography>
              {showError && (
                <Chip
                  label="Email / Password incorrect"
                  color="error"
                  icon={<ErrorOutline />}
                  className="fadeIn"
                  sx={{display: "flex", flexDirection: 'center'}}
                />
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Full name"
                variant="outlined"
                fullWidth
                {...register("name",
                {
                  required: "You must fill this field",
                  minLength: { value: 2, message: "2 charachters minimum" },
                })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
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
                {...register("password",
                {
                  required: "You must fill this field",
                  minLength: { value: 6, message: "6 charachters minimum" },
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextField
                label="Repeat your password"
                type="password"
                variant="outlined"
                fullWidth
                {...(register("password"),
                {
                  required: true,
                  minLength: { value: 6, message: "6 charachters minimum" },
                })}
              />
            </Grid> */}

            <Grid item xs={12}>
              <Button
                type="submit"
                color="secondary"
                className="circular-btn"
                size="large"
                fullWidth
              >
                Create account
              </Button>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="end">
              <Link href={"/auth/login"}>
                <Typography variant="caption">
                  Already have an account??
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
