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

type Props = {
  open: boolean;
  handleClose: () => void;
}

export default function AlertDialog({ open, handleClose }: Props) {

  return (
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
  );
}
