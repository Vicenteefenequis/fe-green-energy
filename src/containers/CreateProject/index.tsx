import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProjectForm from "./form";
import { useIndicatorMutation } from "../../queries/useIndicatorMutation";
import BreadCrumb from "../../components/BreadCrumb";
import Header from "../../components/Header";

const ProjectCity: React.FC = () => {
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
      <BreadCrumb routes={[{ link: "/", text: "Listagem de Projetos" }, { link: "/criar/projeto", text: "Criar Projeto Cidade" }]} />
      <ProjectForm onSubmit={(values) => mutateIndicator(values)} />
    </div>
  );
};

export default ProjectCity;
