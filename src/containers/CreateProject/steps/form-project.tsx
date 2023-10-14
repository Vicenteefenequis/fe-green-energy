import { FormikErrors, FormikProps, withFormik } from "formik";
import React, { useEffect, useMemo } from "react";
import * as Yup from "yup";
import { Box, TextField, Grid, Link, Button } from "@mui/material";
import { ControlStep } from "..";

type FormValues = {
    name: string;
    description: string;
};

type FormProps = {
    onSubmit: (values: FormValues) => void;
};

const Form: React.FC<FormProps & FormikProps<FormValues>> = ({
    handleSubmit,
    values,
    setFieldValue,
    errors,
    submitCount,
}) => {
    const hasError = (field: keyof FormikErrors<FormValues>) =>
        !!errors[field] && submitCount > 0;




    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2} px={5}>
                <Grid item xs={12}>
                    <TextField
                        autoComplete="given-name"
                        name="name"
                        required
                        value={values.name}
                        fullWidth
                        id="name"
                        label="Nome"
                        autoFocus
                        error={hasError("name")}
                        onChange={e => setFieldValue("name", e.target.value)}
                        helperText={hasError("name") && errors.name}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="description"
                        label="Descrição"
                        id="description"
                        value={values.description}
                        error={hasError("description")}
                        onChange={e => setFieldValue("description", e.target.value)}
                        helperText={hasError("description") && errors.description}
                    />
                </Grid>

                <ControlStep />
            </Grid>
        </Box>
    );
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório"),
    description: Yup.string().required("Campo obrigatório"),
});

const FormStepProject = withFormik<FormProps, FormValues>({
    validationSchema: validationSchema,
    handleSubmit: (values, { props }) => {
        props.onSubmit(values);
    },
})(Form);

export default FormStepProject;
