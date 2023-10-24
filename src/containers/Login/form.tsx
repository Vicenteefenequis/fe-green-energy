import { FormikErrors, FormikProps, withFormik } from "formik";
import React from "react";
import { User } from "../../models/user";
import * as Yup from "yup";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, TextField, Grid, Link, FormHelperText } from "@mui/material";

type FormValues = User.Login;

type FormProps = {
    onSubmit: (values: FormValues) => void;
    isLoadingLogin: boolean;
};

const Form: React.FC<FormProps & FormikProps<FormValues>> = ({
    handleSubmit,
    values,
    setFieldValue,
    errors,
    isLoadingLogin,
    submitCount,
}) => {
    const hasError = (field: keyof FormikErrors<User.Login>) =>
        !!errors[field] && submitCount > 0;

    return (
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
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
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        error={hasError("password")}
                        onChange={e => setFieldValue("password", e.target.value)}
                        helperText={hasError("password") && errors.password}
                    />

                </Grid>


            </Grid>

            <LoadingButton
                loading={isLoadingLogin}
                loadingPosition="start"
                variant="contained"
                fullWidth
                type="submit"
                sx={{ mt: 3, mb: 2 }}
            >
                Entrar
            </LoadingButton>

            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link href="/registro" variant="body2">
                        Você não tem uma conta? Registre-se
                    </Link>
                </Grid>
            </Grid>
        </Box>
    );
};

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    password: Yup.string()
        .min(8, "Senha tem que ter no minínimo 8 caracteres")
        .required("Campo obrigatório"),
});

const SignupForm = withFormik<FormProps, FormValues>({
    validationSchema: validationSchema,
    handleSubmit: (values, { props }) => {
        props.onSubmit(values);
    },
})(Form);

export default SignupForm;
