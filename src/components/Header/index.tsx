import React from "react";
import { Link } from "react-router-dom";
import { useWhoAmi } from "../../queries/useWhoAmi";

const Header: React.FC = () => {
  const { data: whoAmi } = useWhoAmi();

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-green-600">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center">
            <img
              src="https://cdn.dribbble.com/users/2092693/screenshots/5551684/green_energy-01.jpg"
              className="h-12 mr-3 rounded-full"
              alt="Green Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Green Energy
            </span>
          </Link>
          <div className="flex items-center">
            {whoAmi?.first_name ? (
              <p className="text-white font-semibold">
                {whoAmi.first_name.toUpperCase()}
              </p>
            ) : (
              <Link className="text-white font-semibold" to="/entrar">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
