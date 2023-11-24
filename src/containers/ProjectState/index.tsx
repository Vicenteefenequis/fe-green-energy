import React from "react";
import Header from "../../components/Header";
import MapChart from "../../components/MapChart";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { useLocationListQuery } from "../../queries/useLocationListQuery";
import { TYPE_LOCATION } from "../../interfaces/api";
import Loader from "../../components/Loader";

const ProjectState: React.FC = () => {
  const navigate = useNavigate();

  const { data: stateFilter, isLoading } = useLocationListQuery(
    TYPE_LOCATION.STATE
  );

  if (isLoading) return <Loader isLoading />;

  return (
    <Box>
      <Header />
      <Box sx={{ mx: 5, my: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Mapa de indicadores por estado
        </Typography>

        <Typography variant="body1">
          Selecione um estado para visualizar os indicadores e poder comparar
          entre eles.
        </Typography>
      </Box>
      <MapChart
        selectState={(state) =>
          stateFilter?.some((stateFilter) => stateFilter.acronym === state)
            ? navigate(`/comparar/estado/${state}`)
            : toast.error("Estado sem dados disponíveis")
        }
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
