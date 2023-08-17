import React from "react";
import { useSignupMutation } from "../../queries/useSignupMutation";
import SignupForm from "./form";

// import { Container } from './styles';

const Signup: React.FC = () => {
  const { mutate: mutateSignup, error } = useSignupMutation();

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-45 w-auto"
          src="https://cdn.dribbble.com/users/2092693/screenshots/5551684/green_energy-01.jpg"
          alt="Green Energy"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Registre sua conta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <SignupForm
          onSubmit={(e) => mutateSignup(e)}
          error={error?.response?.data}
        />
      </div>
    </div>
  );
};

export default Signup;
