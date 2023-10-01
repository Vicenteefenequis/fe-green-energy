import * as React from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import LoadingButton from "@mui/lab/LoadingButton";
import { Container } from "@mui/material";
import { useSignupMutation } from "../../queries/useSignupMutation";
import { User } from "../../models/user";

export default function SignUp() {
  const { mutate: signup, isLoading: isLoadingSignup } = useSignupMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const payload = {
      first_name: data.get("first_name"),
      last_name: data.get("last_name"),
      email: data.get("email"),
      password1: data.get("password1"),
      password2: data.get("password2"),
    } as User.Register;

    signup(payload);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, mb: 3, bgcolor: "green" }}>
          <ElectricBoltIcon />
        </Avatar>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="first_name"
                required
                fullWidth
                id="first_name"
                label="Nome"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="last_name"
                label="Sobre Nome"
                name="last_name"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password1"
                label="Senha"
                type="password"
                id="password1"
                autoComplete="new-password"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password2"
                label="Repetir Senha"
                type="password"
                id="password2"
                autoComplete="re-password"
              />
            </Grid>
          </Grid>

          <LoadingButton
            loading={isLoadingSignup}
            loadingPosition="start"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ mt: 3, mb: 2 }}
          >
            Registrar
          </LoadingButton>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/entrar" variant="body2">
                Você já tem uma conta? Entrar
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
