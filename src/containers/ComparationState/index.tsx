import { Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import BreadCrumb from "../../components/BreadCrumb";

// import { Container } from './styles';

const ComparationState: React.FC = () => {
  const { state } = useParams<{ state: string }>();

  const routes = [
    {
      link: "/",
      text: "Listagem de Projetos",
    },
    {
      link: `/comparar/estado/${state}`,
      text: "Comparar Estados",
    },
  ];
  return (
    <div>
      <Header />
      <BreadCrumb routes={routes} />
      <Typography>Seu estado selecionado: {state}</Typography>
    </div>
  );
};

export default ComparationState;
