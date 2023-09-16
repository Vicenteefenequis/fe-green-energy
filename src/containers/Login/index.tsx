import React, { useEffect } from "react";
import LoginForm from "./form";
import { useAuthMutation } from "../../queries/useAuthMutation";
import { Link, useNavigate } from "react-router-dom";
import SideImage from "../../components/SideImage";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { mutate: mutateAuth, isSuccess, data } = useAuthMutation();

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("@auth", JSON.stringify(data));
      navigate("/");
    }
  }, [data, isSuccess, navigate]);
  return (
    <SideImage>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-45 w-auto"
            src="https://cdn.dribbble.com/users/2092693/screenshots/5551684/green_energy-01.jpg"
            alt="Green Energy"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Entrar na sua conta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginForm onSubmit={(e) => mutateAuth(e)} />
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="text-sm text-center">
            <Link
              to={"/registro"}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Não tem uma conta? Registre-se
            </Link>
          </div>
        </div>
      </div>
    </SideImage>
  );
};

export default Login;
