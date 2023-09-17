import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useIndicatorMutation } from "../../queries/useIndicatorMutation";

const Main: React.FC = () => {
  const navigate = useNavigate();
  const { mutate: mutateIndicator, isSuccess: isSuccessIndicatorMutation } =
    useIndicatorMutation();

  useEffect(() => {
    if (!isSuccessIndicatorMutation) return;
    navigate("/");
  }, [isSuccessIndicatorMutation, navigate]);

  return (
    <div>
      <Header />
      <nav
        className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400 "
            >
              Projeto
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-3 h-3 mx-1 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                className="ml-1 text-sm font-medium text-gray-700  md:ml-2 dark:text-gray-400"
              >
                Registro
              </a>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Main;
