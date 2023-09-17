import React from "react";
import { useSignupMutation } from "../../queries/useSignupMutation";
import SignupForm from "./form";
import { Link } from "react-router-dom";
import SideImage from "../../components/SideImage";

const Signup: React.FC = () => {
  const { mutate: mutateSignup } = useSignupMutation();

  return (
    <SideImage>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-45 w-auto"
            src="https://cdn.dribbble.com/users/2092693/screenshots/5551684/green_energy-01.jpg"
            alt="Green Energy"
          />
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registre sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <SignupForm onSubmit={(e) => mutateSignup(e)} />
        </div>
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="text-sm text-center">
            <Link
              to={"/entrar"}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Já tem uma conta? Faça Login
            </Link>
          </div>
        </div>
      </div>
    </SideImage>
  );
};

export default Signup;
