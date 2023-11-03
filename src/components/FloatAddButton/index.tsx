import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import * as React from "react";
import { ModalMensagem } from "../ModalMensagem";

export default function FloatAddButton() {
  const [open, setOpen] = React.useState(false);
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="right"
      padding={1}
      marginTop={7}
    >
      <Fab
        color="primary"
        aria-label="add"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <AddIcon />
      </Fab>
      <ModalMensagem open={open} setOpen={setOpen} />
    </Box>
  );
}
