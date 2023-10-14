import { FormikErrors, FormikProps, withFormik } from "formik";
import React from "react";
import { User } from "../../models/user";
import * as Yup from "yup";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, TextField, Grid, Link, FormHelperText } from "@mui/material";

type FormValues = User.Register;

type FormProps = {
  onSubmit: (values: FormValues) => void;
  isLoadingSignup: boolean;
};

const Form: React.FC<FormProps & FormikProps<FormValues>> = ({
  handleSubmit,
  values,
  setFieldValue,
  errors,
  isLoadingSignup,
  submitCount,
}) => {
  const hasError = (field: keyof FormikErrors<User.Register>) =>
    !!errors[field] && submitCount > 0;

  return (
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
            error={hasError("first_name")}
            onChange={e => setFieldValue("first_name", e.target.value)}
            helperText={hasError("first_name") && errors.first_name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="last_name"
            label="Sobre Nome"
            name="last_name"
            error={hasError("last_name")}
            autoComplete="family-name"
            onChange={e => setFieldValue("last_name", e.target.value)}
            helperText={hasError("last_name") && errors.last_name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            error={hasError("email")}
            onChange={e => setFieldValue("email", e.target.value)}
            helperText={hasError("email") && errors.email}

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
            error={hasError("password1")}
            onChange={e => setFieldValue("password1", e.target.value)}
            helperText={hasError("password1") && errors.password1}
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
            error={hasError("password2")}
            onChange={e => setFieldValue("password2", e.target.value)}
            helperText={hasError("password2") && errors.password2}
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
  );
};

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("Campo obrigatório"),
  last_name: Yup.string().required("Campo obrigatório"),
  email: Yup.string().email("Email inválido").required("Campo obrigatório"),
  password1: Yup.string()
    .min(8, "Senha tem que ter no minínimo 8 caracteres")
    .required("Campo obrigatório"),
  password2: Yup.string().oneOf([Yup.ref("password1")], "Senhas não conferem"),
});

const SignupForm = withFormik<FormProps, FormValues>({
  validationSchema: validationSchema,
  handleSubmit: (values, { props }) => {
    props.onSubmit(values);
  },
})(Form);

export default SignupForm;
