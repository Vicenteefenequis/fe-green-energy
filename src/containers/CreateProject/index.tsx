import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProjectForm from "./form";
import { useIndicatorMutation } from "../../queries/useIndicatorMutation";
import BreadCrumb from "../../components/BreadCrumb";

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
      <BreadCrumb routes={[{ link: "/", text: "Projetos" }]} />
      <ProjectForm onSubmit={(values) => mutateIndicator(values)} />
    </div>
  );
};

export default ProjectCity;
