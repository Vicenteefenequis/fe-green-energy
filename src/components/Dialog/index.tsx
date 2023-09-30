import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        color="primary"
        onClick={handleDialogOpen}
        variant="contained"
        endIcon={<ArrowForwardIosIcon />}
      >
        <Typography noWrap component="p" color="white">
          Criar novo projeto
        </Typography>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Cadastro"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deseja criar um novo projeto de Cidade ou Estado?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to={"criar/projeto/estado"}>
            <Button>Estado</Button>
          </Link>
          <Link to={"criar/projeto"}>
            <Button autoFocus>Cidade</Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
