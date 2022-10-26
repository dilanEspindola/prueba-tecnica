import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { H1 } from "@/styles";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#000",
  border: "2px solid #000",
  p: 4,
  color: "#fff",
};

export const ErrorFetching = () => {
  return (
    <div>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <H1>Ocurrio un error al obtener los datos</H1>
        </Box>
      </Modal>
    </div>
  );
};
