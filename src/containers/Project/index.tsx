import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useIndicatorById } from "../../queries/useIndicator";
import Loader from "../../components/Loader";
import Chart from "react-google-charts";
import { Box, Button, Typography } from "@mui/material";
import SelectLocation from "./select-location";

const OPTIONS = {
  vAxis: { title: "Valor" },
  hAxis: { title: "Cidades" },
  seriesType: "bars",
  series: { 1: { type: "line" } },
};

const Project: React.FC = () => {
  const { id = "" } = useParams<{ id: string }>();
  const [location, setLocation] = React.useState<{ lat: number | undefined, long: number | undefined }>({ lat: undefined, long: undefined });

  const { data: indicators, isLoading: isLoadingIndicator } = useIndicatorById(
    { id, latitude: location?.lat, longitude: location?.long }
  );

  const [openModal, setOpenModal] = React.useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const uncertifiedLocation = indicators?.find(indicator => 
    indicator.data?.some(item => !item.is_certified)
  )?.data?.[0]?.location_name;

  return (
    <>
      <Header />
      <Box sx={{
        mx: 2,
        my: 5,
        gap: 2,
        display: "flex",
        flexDirection: "column"
      }}>
        <Typography
          variant="h4"
          noWrap
          sx={{

            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          Principais indicadores energeticos
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 200,
            textDecoration: "none",
          }}
        >
          Compilação dos principais indicadores energéticos conforme estabelecido pela norma ISO 37120:2017. Esses indicadores fornecem uma visão clara do uso de energia elétrica residencial per capita e da porcentagem de habitantes de diferentes cidades com fornecimento regular de energia elétrica. Além disso, oferecemos uma funcionalidade inovadora que permite aos usuários visualizar o impacto potencial da energia fotovoltaica. Ao clicar nesta opção, é possível observar como os dados se transformariam com a integração desta fonte de energia sustentável. Esta ferramenta visa não apenas informar, mas também inspirar a adoção de soluções energéticas mais limpas e eficientes nas cidades.
        </Typography>
      </Box>
      <Button
        sx={{
          mx: 2,
        }}
        onClick={handleClickOpen}
        color="primary"
        variant="contained"
        size="small"
      >
        Geração de energia fotovoltaica
      </Button>
      <Loader isLoading={isLoadingIndicator} />

      {indicators?.map((indicator, key) => (
        <Chart
          key={key}
          chartType="ComboChart"
          width="100%"
          height="400px"
          data={[
            ["Cidades", `${indicator.unit}`, "Media"],
            ...indicator?.data.map((data) => [
              data.location_name,
              data.value,
              indicator.average
            ]) || [],
          ]}
          options={{
            ...OPTIONS,
            title: indicator.name,
          }}
        />
      ))}
        <SelectLocation 
          show={openModal} 
          onClose={handleClose} 
          onSelectLocation={(lat, long) => setLocation({ lat, long })}
          locationName= {uncertifiedLocation}
/>    </>
  );
};

export default Project;
