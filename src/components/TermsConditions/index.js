import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 550,
  bgcolor: "background.paper",
  border: "none",
  p: 4,
};

const termsStyle = {
  mt: 2,
  fontSize: "20px",
};

export default function Terms({ open, handleClose, handleAcceptedTerms }) {
  return (
    <div>
      <Modal open={open}>
        <Box sx={style}>
          <Typography variant="h4">Terms and Conditions</Typography>
          <b>
            <Typography sx={termsStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt, nisl eget ultricies tincidunt, mauris nisl aliquet
              nunc, et ultricies lorem nisl eget justo. Nullam tincidunt, nisl
              eget ultricies tincidunt, mauris nisl aliquet nunc, et ultricies
              lorem nisl eget
            </Typography>
            <Typography sx={termsStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt, nisl eget ultricies tincidunt, mauris nisl aliquet
              nunc, et ultricies lorem nisl eget justo. Nullam tincidunt, nisl
              eget ultricies tincidunt, mauris nisl aliquet nunc, et ultricies
              lorem nisl eget
            </Typography>
            <Typography sx={termsStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt, nisl eget ultricies tincidunt, mauris nisl aliquet
              nunc, et ultricies lorem nisl eget justo. Nullam tincidunt, nisl
              eget ultricies tincidunt, mauris nisl aliquet nunc, et ultricies
              lorem nisl eget
            </Typography>
          </b>
          <Grid sx={{ textAlign: "center", margin: "20px", mt: "40px" }}>
            <Button
              variant="contained"
              sx={{
                marginRight: "40px",
                width: "14em",
                backgroundColor: "#00aac5",
              }}
              onClick={handleClose}
            >
              <Typography variant="h6">Decline</Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                marginLeft: "40px",
                width: "14em",
                backgroundColor: "#00aac5",
              }}
              onClick={handleAcceptedTerms}
            >
              <Typography variant="h6">Accept</Typography>
            </Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
