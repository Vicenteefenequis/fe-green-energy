import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import ProjectForm from "./form";
import { useIndicatorMutation } from "../../queries/useIndicatorMutation";
import Main from "../ProjectMain/Main";

const CreateProject: React.FC = () => {
  const navigate = useNavigate();
  const { mutate: mutateIndicator, isSuccess: isSuccessIndicatorMutation } =
    useIndicatorMutation();

  useEffect(() => {
    if (!isSuccessIndicatorMutation) return;
    navigate("/");
  }, [isSuccessIndicatorMutation, navigate]);

  return (
    <div>
      <Main/>
           <ProjectForm onSubmit={(values) => mutateIndicator(values)} />
    </div>
  );
};

export default CreateProject;
