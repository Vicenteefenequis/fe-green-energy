import { FormikProps, withFormik } from "formik";
import React from "react";
import { User } from "../../models/user";
import { Fields } from "./Fields";
import { Typography } from "@mui/material";

type FormValues = Fields;

type FormProps = {
  onSubmit: (values: FormValues) => void;
};

const Form: React.FC<FormProps & FormikProps<FormValues>> = ({
  handleSubmit,
  values,
  setFieldValue,
}) => {
  return (

    <form className="space-y-6" onSubmit={handleSubmit}>

    <div className="mt-2">
    <div className="bg-white shadow-md rounded-md p-4">
    <Typography>
            Descrição do projeto
        </Typography>
      <div className="space-y-2">
        <div className="flex items-center">
          <label
            htmlFor="titulo"
            className="block text-sm font-medium leading-6 text-gray-900 w-1/4"
          >
            Título
          </label>
          <div className="mt-2 w-3/4">
            <input
              value={values.titulo}
              onChange={(e) => setFieldValue("titulo", e.target.value)}
              id="titulo"
              name="titulo"
              required
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="flex items-center">
          <label
            htmlFor="descricao"
            className="block text-sm font-medium leading-6 text-gray-900 w-1/4"
          >
            Descrição
          </label>
          <div className="mt-2 w-3/4">
            <input
              value={values.descricao}
              onChange={(e) => setFieldValue("descricao", e.target.value)}
              id="descricao"
              name="descricao"
              required
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
   </div>
      </div>
      <div className="left">
        <button
          type="submit"
          className="rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Salvar
        </button>
      </div> 
    </form>
  );
};

const CadastroForm = withFormik<FormProps, FormValues>({
  handleSubmit: (values, { props }) => {
    props.onSubmit(values);
  },
})(Form);

export default CadastroForm;
