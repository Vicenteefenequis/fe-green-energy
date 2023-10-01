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
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { IndicatorItem } from "../ProjectState/components";
import { KEY_INDICATOR, MAPPED_INDICATORS } from "../../models/indicator";

const STATES_MOCK = ["Goiás", "São Paulo", "Rio de Janeiro", "Espirito santo"];

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

const ComparationState: React.FC = () => {
  const { state = "" } = useParams<{ state: string }>();
  const [selectedStates, setSelectedStates] = useState<string[]>([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Card sx={{ p: 2 }}>
        <Chip
          deleteIcon={<EditIcon />}
          onDelete={() => navigate("/criar/projeto/estado")}
          label={state}
        />
        {selectedStates
          .filter((state) => !!state)
          .map((state) => (
            <Chip
              sx={{ mx: 2 }}
              onDelete={() =>
                setSelectedStates((old) => old.filter((item) => item !== state))
              }
              label={state}
            />
          ))}
        <Button endIcon={<AddIcon />} sx={{ ml: 5 }} onClick={handleOpen}>
          Adicionar
        </Button>
      </Card>
      {KEY_INDICATOR.map((key) => (
        <IndicatorItem
          indicatorLabel={key}
          charts={[
            { label: state, value: 20 },
            ...selectedStates
              .filter((state) => !!state)
              .map((state, index) => ({
                label: state,
                value: index + 1 * 10,
              })),
          ]}
        />
      ))}
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
              {STATES_MOCK.map((state) => (
                <MenuItem value={state}>{state}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
};

export default ComparationState;
