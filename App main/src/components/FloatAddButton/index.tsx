import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import * as React from "react";
import ModalMensagem from "../ModalMensagem";

export default function FloatAddButton() {
  const [open, setOpen] = React.useState(false);
  return (
    <Box>
      <Fab color="primary" aria-label="add" onClick={() => ModalMensagem()}>
        <AddIcon />
      </Fab>
    </Box>
  );
}
