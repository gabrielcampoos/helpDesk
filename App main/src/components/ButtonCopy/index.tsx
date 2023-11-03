import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button } from "@mui/material";

type ButtonCopyProps = {
  onClick: () => void;
};

export const ButtonCopy: React.FC<ButtonCopyProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <ContentCopyIcon
        sx={{
          "&:hover": {
            cursor: "pointer",
            fontSize: "27px",
            transition: "0.3s",
          },
        }}
      />
    </Button>
  );
};
