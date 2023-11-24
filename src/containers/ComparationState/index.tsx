import {
  Box,
  Button,
  Card,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useStateBatchQuery } from "../../queries/useStateBatchQuery";
import Loader from "../../components/Loader";
import Chart from "react-google-charts";
import { useLocationListQuery } from "../../queries/useLocationListQuery";
import { TYPE_LOCATION } from "../../interfaces/api";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const OPTIONS = {
  vAxis: { title: "Valor" },
  hAxis: { title: "Cidades" },
  seriesType: "bars",
  series: { 1: { type: "line" } },
};
const ComparationState: React.FC = () => {
  const { state = "" } = useParams<{ state: string }>();
  const [selectedStates, setSelectedStates] = useState<string[]>([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const { data: stateFilter } = useLocationListQuery(TYPE_LOCATION.STATE);

  const { data: dataIndicators, isLoading: isLoadingBatch } =
    useStateBatchQuery([...selectedStates, state]);

  return (
    <div>
      <Header />
      <Loader isLoading={isLoadingBatch} />
      <Card sx={{ p: 2 }}>
        <Chip
          deleteIcon={<EditIcon />}
          onDelete={() => navigate("/criar/projeto/estado")}
          label={
            stateFilter?.find((stateFilter) => stateFilter.acronym === state)
              ?.name
          }
        />
        {selectedStates
          .filter((state) => !!state)
          .map((state, key) => (
            <Chip
              key={key}
              sx={{ mx: 2 }}
              onDelete={() =>
                setSelectedStates((old) => old.filter((item) => item !== state))
              }
              label={
                stateFilter?.find(
                  (stateFilter) => stateFilter.acronym === state
                )?.name
              }
            />
          ))}
        <Button endIcon={<AddIcon />} sx={{ ml: 5 }} onClick={handleOpen}>
          Adicionar
        </Button>
      </Card>

      <Box sx={{ mt: 5, my: 5, mx: 10 }}>
        {dataIndicators?.map((indicator, key) => (
          <Chart
            key={key}
            chartType="ComboChart"
            width="100%"
            height="400px"
            data={[
              ["Cidades", `${indicator.unit}`, "Media"],
              ...(indicator?.data.map((data) => [
                data.location_name,
                data.value,
                indicator.average,
              ]) || []),
            ]}
            options={{
              ...OPTIONS,
              title: indicator.name,
            }}
          />
        ))}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Selecione um Estado para Comparar Indicadores da norma ISO
            37120:2017
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Isso ajudará você a entender melhor as métricas de energia partes do
            Brasil.
          </Typography>
          <FormControl fullWidth sx={{ my: 5 }}>
            <InputLabel id="demo-simple-select-label">Estados</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Estados"
              displayEmpty
              onChange={(event) => {
                setSelectedStates((old) => [
                  ...old,
                  old.includes(event.target.value as string)
                    ? ""
                    : (event.target.value as string),
                ]);
                setOpen(false);
              }}
            >
              {stateFilter
                ?.filter((s) => s.acronym !== state)
                .filter((state) => !selectedStates.includes(state.acronym))
                .map((state, key) => (
                  <MenuItem key={key} value={state.acronym}>
                    {state.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
};

export default ComparationState;
