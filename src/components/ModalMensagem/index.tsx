import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import { SetStateAction } from "react";

type IModal = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
};

export const ModalMensagem: React.FC<IModal> = ({ open, setOpen }) => {
  const [recado, setRecado] = React.useState("");

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
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
          <Button
            type="button"
            variant="outlined"
            onClick={() => setOpen(false)}
          >
            Cancelar
          </Button>
          <Button type="submit" color="success" variant="contained">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
