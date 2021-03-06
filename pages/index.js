import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import Footer from "../pagecomponents/Footer/Footer";
import Header from "../pagecomponents/Header/Header";
import Menu from "../pagecomponents/MenuandServices/Menu";
import Services from "../pagecomponents/Services/Services";
import Vibes from "../pagecomponents/Vibes/Vibes";

const home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />

      <BasicModal />
      <Menu />
      <Services />
      <Vibes />
      <Footer />
    </div>
  );
};

export default home;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Frontend task done by Amrit Babu Tiwari (babuamrit25@gmail.com)
            .click outside this box to view the project
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
