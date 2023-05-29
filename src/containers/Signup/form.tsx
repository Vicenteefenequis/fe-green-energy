import { FormikProps, withFormik } from 'formik';
import React from 'react';
import { User } from '../../models/user';

type FormValues = User.Register;

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
      <div>
        <label
          htmlFor="first_name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          First name
        </label>
        <div className="mt-2">
          <input
            value={values.first_name}
            onChange={(e) => setFieldValue('first_name', e.target.value)}
            id="first_name"
            name="first_name"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="last_name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Last name
        </label>
        <div className="mt-2">
          <input
            value={values.last_name}
            onChange={(e) => setFieldValue('last_name', e.target.value)}
            id="last_name"
            name="last_name"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          User name
        </label>
        <div className="mt-2">
          <input
            value={values.username}
            onChange={(e) => setFieldValue('username', e.target.value)}
            id="username"
            name="username"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={values.password}
            onChange={(e) => setFieldValue('password', e.target.value)}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

const SignupForm = withFormik<FormProps, FormValues>({
  handleSubmit: (values, { props }) => {
    props.onSubmit(values);
  },
})(Form);

export default SignupForm;
