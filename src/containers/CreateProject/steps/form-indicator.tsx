
















import { FormikErrors, FormikProps, withFormik } from "formik";
import React, { useEffect, useMemo } from "react";
import * as Yup from "yup";
import { Box, TextField, Grid } from "@mui/material";
import { ControlStep } from "..";
import { useStepContext } from "../hook";

type FormValues = {
    total_residential_electricity_use: number;
    number_of_people_with_regular_connection: number;
    total_electricity_use: number;
    total_electricity_consumption_in_public_buildings: number;
    total_area_of_these_buildings: number;
    total_electricity_consumption_produced_from_renewable: number;
    total_energy_consumption: number;
    total_number_of_consumer_interruptions: number;
    total_number_of_consumers_served: number;
    sum_of_the_duration_of_all_interruptions: number;
    total_number_of_interruptions: number;
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
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2} px={5}>
                <Grid item xs={12}>
                    <TextField
                        required
                        autoFocus
                        fullWidth
                        name="total_residential_electricity_use"
                        id="total_residential_electricity_use"
                        label="Uso de energia elétrica residencial total(kWh)"
                        type="number"
                        value={values.total_residential_electricity_use}
                        error={hasError("total_residential_electricity_use")}
                        onChange={e => setFieldValue("total_residential_electricity_use", e.target.value)}
                        helperText={hasError("total_residential_electricity_use") && errors.total_residential_electricity_use}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="number_of_people_with_regular_connection"
                        label="Número de habitantes com ligação regular à rede de distribuição"
                        id="number_of_people_with_regular_connection"
                        type="number"
                        value={values.number_of_people_with_regular_connection}
                        error={hasError("number_of_people_with_regular_connection")}
                        onChange={e => setFieldValue("number_of_people_with_regular_connection", e.target.value)}
                        helperText={hasError("number_of_people_with_regular_connection") && errors.number_of_people_with_regular_connection}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="total_electricity_use"
                        label="Uso total de energia elétrica (kWh)"
                        id="total_electricity_use"
                        type="number"
                        value={values.total_electricity_use}
                        error={hasError("total_electricity_use")}
                        onChange={e => setFieldValue("total_electricity_use", e.target.value)}
                        helperText={hasError("total_electricity_use") && errors.total_electricity_use}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="total_electricity_consumption_in_public_buildings"
                        id="total_electricity_consumption_in_public_buildings"
                        type="number"
                        label="Consumo total de energia elétrica em edifícios públicos(kWh)"
                        value={values.total_electricity_consumption_in_public_buildings}
                        error={hasError("total_electricity_consumption_in_public_buildings")}
                        onChange={e => setFieldValue("total_electricity_consumption_in_public_buildings", e.target.value)}
                        helperText={hasError("total_electricity_consumption_in_public_buildings") && errors.total_electricity_consumption_in_public_buildings}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="total_area_of_these_buildings"
                        label="Área total destes edifícios (𝑚2)"
                        id="total_area_of_these_buildings"
                        type="number"
                        value={values.total_area_of_these_buildings}
                        error={hasError("total_area_of_these_buildings")}
                        onChange={e => setFieldValue("total_area_of_these_buildings", e.target.value)}
                        helperText={hasError("total_area_of_these_buildings") && errors.total_area_of_these_buildings}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="total_electricity_consumption_produced_from_renewable"
                        label="Consumo total de energia elétrica produzida a partir de fontes renováveis"
                        id="total_electricity_consumption_produced_from_renewable"
                        type="number"
                        value={values.total_electricity_consumption_produced_from_renewable}
                        error={hasError("total_electricity_consumption_produced_from_renewable")}
                        onChange={e => setFieldValue("total_electricity_consumption_produced_from_renewable", e.target.value)}
                        helperText={hasError("total_electricity_consumption_produced_from_renewable") && errors.total_electricity_consumption_produced_from_renewable}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="total_energy_consumption"
                        label="Consumo total de energia"
                        id="total_energy_consumption"
                        type="number"
                        value={values.total_energy_consumption}
                        error={hasError("total_energy_consumption")}
                        onChange={e => setFieldValue("total_energy_consumption", e.target.value)}
                        helperText={hasError("total_energy_consumption") && errors.total_energy_consumption}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="total_number_of_consumer_interruptions"
                        label="Número total de interrupções ao consumidor"
                        id="total_number_of_consumer_interruptions"
                        type="number"
                        value={values.total_number_of_consumer_interruptions}
                        error={hasError("total_number_of_consumer_interruptions")}
                        onChange={e => setFieldValue("total_number_of_consumer_interruptions", e.target.value)}
                        helperText={hasError("total_number_of_consumer_interruptions") && errors.total_number_of_consumer_interruptions}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="total_number_of_consumers_served"
                        id="total_number_of_consumers_served"
                        label="Número total de consumidores atendidos"
                        type="number"
                        value={values.total_number_of_consumers_served}
                        error={hasError("total_number_of_consumers_served")}
                        onChange={e => setFieldValue("total_number_of_consumers_served", e.target.value)}
                        helperText={hasError("total_number_of_consumers_served") && errors.total_number_of_consumers_served}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="sum_of_the_duration_of_all_interruptions"
                        id="sum_of_the_duration_of_all_interruptions"
                        label="Soma da duração de todas as interrupções(h)"
                        type="number"
                        value={values.sum_of_the_duration_of_all_interruptions}
                        error={hasError("sum_of_the_duration_of_all_interruptions")}
                        onChange={e => setFieldValue("sum_of_the_duration_of_all_interruptions", e.target.value)}
                        helperText={hasError("sum_of_the_duration_of_all_interruptions") && errors.sum_of_the_duration_of_all_interruptions}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="total_number_of_interruptions"
                        label="Número total de interrupções"
                        id="total_number_of_interruptions"
                        type="number"
                        value={values.total_number_of_interruptions}
                        error={hasError("total_number_of_interruptions")}
                        onChange={e => setFieldValue("total_number_of_interruptions", e.target.value)}
                        helperText={hasError("total_number_of_interruptions") && errors.total_number_of_interruptions}
                    />
                </Grid>

                <ControlStep />
            </Grid>
        </Box>
    );
};

const validationSchema = Yup.object().shape({
    total_residential_electricity_use: Yup.string().required("Campo obrigatório"),
    number_of_people_with_regular_connection: Yup.string().required("Campo obrigatório"),
    total_electricity_use: Yup.string().required("Campo obrigatório"),
    total_electricity_consumption_in_public_buildings: Yup.string().required("Campo obrigatório"),
    total_area_of_these_buildings: Yup.string().required("Campo obrigatório"),
    total_electricity_consumption_produced_from_renewable: Yup.string().required("Campo obrigatório"),
    total_energy_consumption: Yup.string().required("Campo obrigatório"),
    total_number_of_consumer_interruptions: Yup.string().required("Campo obrigatório"),
    total_number_of_consumers_served: Yup.string().required("Campo obrigatório"),
    sum_of_the_duration_of_all_interruptions: Yup.string().required("Campo obrigatório"),
    total_number_of_interruptions: Yup.string().required("Campo obrigatório"),
});

const FormStepIndicator = withFormik<FormProps, FormValues>({
    validationSchema: validationSchema,
    handleSubmit: (values, { props }) => {
        props.onSubmit(values);
    },
})(Form);

export default FormStepIndicator;



