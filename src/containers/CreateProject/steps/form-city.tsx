import { FormikErrors, FormikProps, withFormik } from "formik";
import React, { useEffect, useMemo } from "react";
import * as Yup from "yup";
import { Box, TextField, Grid } from "@mui/material";
import { ControlStep } from "..";
import { useStepContext } from "../hook";

type FormValues = {
    city: string;
    population: number;
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
                        name="city"
                        required
                        value={values.city}
                        fullWidth
                        id="city"
                        label="Cidade"
                        autoFocus
                        error={hasError("city")}
                        onChange={e => setFieldValue("city", e.target.value)}
                        helperText={hasError("city") && errors.city}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="population"
                        label="População"
                        id="population"
                        type="number"
                        value={values.population}
                        error={hasError("population")}
                        onChange={e => setFieldValue("population", e.target.value)}
                        helperText={hasError("population") && errors.population}
                    />
                </Grid>

                <ControlStep />
            </Grid>
        </Box>
    );
};

const validationSchema = Yup.object().shape({
    city: Yup.string().required("Campo obrigatório"),
    population: Yup.string().required("Campo obrigatório"),
});

const FormStepCity = withFormik<FormProps, FormValues>({
    validationSchema: validationSchema,
    handleSubmit: (values, { props }) => {
        props.onSubmit(values);
    },
})(Form);

export default FormStepCity;
