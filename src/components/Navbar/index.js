import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useHistory } from "react-router-dom";

function Navbar() {
  const [anchorEl, setAnchor] = React.useState(null);
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };

  const fontStyleColor = {
    color: "#00aac5",
  };

  const history = useHistory();

  const handlePage = (page) => {
    if (page === 0) {
      history.push("/home");
    }
    if (page === 1) {
      history.push("/profile");
    } else if (page === 2) {
      history.push("/code-challenge");
    } else if (page === 3) {
      localStorage.removeItem("token");
      history.push("/");
    }
  };

  return (
    <Grid
      display={"flex"}
      alignItems="end"
      justifyContent={"space-between"}
      m="5px 30px"
    >
      <Grid>
        <Typography variant="h5">Navbar</Typography>
      </Grid>
      <Grid display={"flex"} alignItems="center" gap="1rem">
        <ShoppingCartIcon
          fontSize="large"
          sx={{ color: "#00aac5", cursor: "pointer" }}
          onClick={() => history.push("/cart")}
        />
        <Avatar
          id="basic-button"
          aria-controls={anchorEl ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={anchorEl ? "true" : undefined}
          onClick={handleClick}
          sx={{ cursor: "pointer" }}
        />

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={anchorEl}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem sx={fontStyleColor} onClick={() => handlePage(0)}>
            Home
          </MenuItem>
          <MenuItem sx={fontStyleColor} onClick={() => handlePage(1)}>
            Profile
          </MenuItem>
          <MenuItem sx={fontStyleColor} onClick={() => handlePage(2)}>
            Code Challenge
          </MenuItem>
          <MenuItem sx={fontStyleColor} onClick={() => handlePage(3)}>
            Logout
          </MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
}

export default Navbar;
