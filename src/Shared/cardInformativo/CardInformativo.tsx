import { FC } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { PRIMARY, SECONDARY } from "../../config/theme";

interface CardInformativoProps {
  mensagem: string;
}

const CardInformativo: FC<CardInformativoProps> = ({ mensagem }) => {
  return (
    <Stack sx={{ width: "50%" }}>
      <Alert
        sx={{
          fontSize: "1rem",
          fontWeight: 500,
          color: PRIMARY,
          backgroundColor: SECONDARY,
        }}
        severity="info"
      >
        {mensagem}
      </Alert>
    </Stack>
  );
};
export default CardInformativo;
