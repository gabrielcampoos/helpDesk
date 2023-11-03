import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";

export default function ModalMensagem() {
  const [open, setOpen] = React.useState(false);
  const [recado, setRecado] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Insira uma mensagem..."}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="titulo"
            id="titulo"
            label="Título"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            autoFocus
            margin="dense"
            id="recado"
            name="recado"
            label="Escreva aqui seu recado..."
            type="text"
            fullWidth
            variant="filled"
            onChange={(ev) => setRecado(ev.target.value)}
            value={recado}
            multiline
            minRows={3}
          />
        </DialogContent>
        <DialogActions>
          <Button type="button" variant="outlined" onClick={handleClose}>
            Cancelar
          </Button>
          <Button type="submit" color="success" variant="contained">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
