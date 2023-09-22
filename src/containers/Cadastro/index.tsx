import React, { useEffect } from "react";
import CadastroForm from "./form";

const Cadastro: React.FC = () => {

  return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <CadastroForm onSubmit={(e) => alert("Criando...")} />
        </div>
      </div>
  );
};

export default Cadastro;