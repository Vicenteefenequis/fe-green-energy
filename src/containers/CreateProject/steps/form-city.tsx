import { FormikErrors, FormikProps, withFormik } from "formik";
import React, { useEffect, useMemo } from "react";
import * as Yup from "yup";
import {
  Box,
  TextField,
  Grid,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { ControlStep } from "..";
import { useStepContext } from "../hook";
import { useLocationListQuery } from "../../../queries/useLocationListQuery";
import { TYPE_LOCATION } from "../../../interfaces/api";
import Loader from "../../../components/Loader";

type FormValues = {
  city: string;
  population: number;
};

type FormProps = {
  onSubmit: (values: FormValues) => void;
};

const Form: React.FC<FormProps & FormikProps<FormValues>> = ({
  handleSubmit,
  setFieldValue,
}) => {
  const { data, isLoading } = useLocationListQuery(TYPE_LOCATION.CITY);

  if (isLoading) return <Loader isLoading={true} />;

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2} px={5}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Cidade</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Cidade"
            onChange={(e) => setFieldValue("location", e.target.value)}
          >
            {data?.map((value) => (
              <MenuItem value={value.id}>{value.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <ControlStep />
      </Grid>
    </Box>
  );
};

const validationSchema = Yup.object().shape({
  location: Yup.string().required("Campo obrigatório"),
});

const FormStepCity = withFormik<FormProps, FormValues>({
  validationSchema: validationSchema,
  handleSubmit: (values, { props }) => {
    props.onSubmit(values);
  },
})(Form);

export default FormStepCity;
