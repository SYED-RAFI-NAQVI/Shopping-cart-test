import { Avatar, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect } from "react";
import Terms from "../TermsConditions";

function Profile() {
  const [openTC, setOpenTC] = React.useState(false);
  const handleClose = () => {
    localStorage.getItem("tcAccepted") && localStorage.removeItem("tcAccepted");
    setOpenTC(false);
  };

  const handleAcceptedTerms = () => {
    localStorage.setItem("tcAccepted", true);
    setOpenTC(false);
  };

  useEffect(() => {
    !localStorage.getItem("tcAccepted") && setOpenTC(true);
  }, []);

  return (
    <Container>
      <Grid sx={{ textAlign: "center" }}>
        <Avatar
          sx={{
            width: "100px",
            height: "100px",
            margin: "auto",
          }}
        />
        <Typography>username</Typography>
        <Typography>Email</Typography>
        <hr />
        <Button
          sx={{
            backgroundColor: "#00aac5",
            color: "white",
            width: "8em",
            "&:hover": {
              backgroundColor: "#00aac5",
            },
          }}
          variant="contained"
          onClick={() => setOpenTC(true)}
        >
          See T&C
        </Button>
        {openTC && (
          <Terms
            open={openTC}
            handleClose={handleClose}
            handleAcceptedTerms={handleAcceptedTerms}
          />
        )}
      </Grid>
    </Container>
  );
}

export default Profile;
