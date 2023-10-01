import React from "react";
import { MAPPED_INDICATORS } from "../../models/indicator";
import BreadCrumb from "../../components/BreadCrumb";
import Header from "../../components/Header";
import MapChart from "../../components/MapChart";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const ProjectState: React.FC = () => {
  const navigate = useNavigate();

  const routes = [
    {
      link: "/",
      text: "Listagem de Projetos",
    },
    {
      link: "/criar/projeto/estado",
      text: "Criar Projeto Estado",
    },
  ];
  const INDICATORS_CHART = [
    {
      title: "Goiás",
      content: "GO",
      chart: [
        {
          label:
            MAPPED_INDICATORS["total_residential_electricity_use_per_capita"],
          value: 14,
        },
        {
          label: MAPPED_INDICATORS["percentage_electricity_supply"],
          value: 36,
        },
      ],
    },
    {
      title: "Amazonas",
      content: "AM",
      chart: [
        {
          label:
            MAPPED_INDICATORS["total_residential_electricity_use_per_capita"],
          value: 54,
        },
        {
          label: MAPPED_INDICATORS["percentage_electricity_supply"],
          value: 45,
        },
      ],
    },
    {
      title: "Pará",
      content: "PA",
      chart: [
        {
          label:
            MAPPED_INDICATORS["total_residential_electricity_use_per_capita"],
          value: 36,
        },
        {
          label: MAPPED_INDICATORS["percentage_electricity_supply"],
          value: 56,
        },
      ],
    },
    {
      title: "Maranhão",
      content: "MA",
      chart: [
        {
          label:
            MAPPED_INDICATORS["total_residential_electricity_use_per_capita"],
          value: 98,
        },
        {
          label: MAPPED_INDICATORS["percentage_electricity_supply"],
          value: 89,
        },
      ],
    },
  ];

  return (
    <Box>
      <Header />
      <BreadCrumb routes={routes} />
      <MapChart
        selectState={(state) => navigate(`/comparar/estado/${state}`)}
      />
    </Box>
  );
};

export default ProjectState;

{
  /* <IndicatorItem
        indicatorLabel={"total_residential_electricity_use_per_capita"}
        charts={[{ label: "asd", value: 1 }]}
      />
      <IndicatorListItem indicators={INDICATORS_CHART} /> */
}
