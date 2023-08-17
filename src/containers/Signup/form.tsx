import { FormikProps, withFormik } from "formik";
import React, { useEffect } from "react";
import { User } from "../../models/user";
import * as Yup from "yup";

type FormValues = User.Register;

type FormProps = {
  onSubmit: (values: FormValues) => void;
  error?: User.Register;
};

const Form: React.FC<FormProps & FormikProps<FormValues>> = ({
  handleSubmit,
  values,
  setFieldValue,
  errors,
  error,
  setErrors,
}) => {
  useEffect(() => {
    if (!error) return;
    setErrors(error);
  }, [error, setErrors]);

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="first_name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Nome
        </label>
        <div className="mt-2">
          <input
            value={values.first_name}
            onChange={(e) => setFieldValue("first_name", e.target.value)}
            id="first_name"
            name="first_name"
            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {errors.first_name && (
            <span className="text-red-900 text-xs">{errors.first_name}</span>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="last_name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Sobrenome
        </label>
        <div className="mt-2">
          <input
            value={values.last_name}
            onChange={(e) => setFieldValue("last_name", e.target.value)}
            id="last_name"
            name="last_name"
            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {errors.last_name && (
            <span className="text-red-900 text-xs">{errors.last_name}</span>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email
        </label>
        <div className="mt-2">
          <input
            value={values.email}
            onChange={(e) => setFieldValue("email", e.target.value)}
            id="email"
            name="email"
            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {errors.email && (
            <span className="text-red-900 text-xs">{errors.email}</span>
          )}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Senha
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password1"
            type="password"
            autoComplete="current-password"
            value={values.password1}
            onChange={(e) => setFieldValue("password1", e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {errors.password1 && (
            <span className="text-red-900 text-xs">{errors.password1}</span>
          )}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Repita senha
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password2"
            type="password"
            autoComplete="current-password"
            value={values.password2}
            onChange={(e) => setFieldValue("password2", e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {errors.password2 && (
            <span className="text-red-900 text-xs">{errors.password2}</span>
          )}
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Registrar
        </button>
      </div>
    </form>
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
