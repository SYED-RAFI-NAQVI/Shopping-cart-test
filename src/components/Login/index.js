import { Avatar, Button, Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import apiCall from "../../utils/requests";

function Login() {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const marginTop = {
    marginTop: "20px",
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  };

  const history = useHistory();

  const handleLogin = async () => {
    if (!isSignup) {
      let data = await apiCall("https://fakestoreapi.com/auth/login", options);
      data?.token && localStorage.setItem("token", data.token);
      data?.token && history.push("/home");
    }
  };

  return (
    <Grid>
      <Container>
        <Grid
          display={"flex"}
          justifyContent="center"
          gap="8rem"
          marginTop="6rem"
          alignItems={"start"}
        >
          <Grid>
            <img height={"650px"} src={require("./login.png")} alt="random" />
          </Grid>
          <Grid sx={{ width: "400px", textAlign: "center" }}>
            <Avatar
              sx={{
                width: "100px",
                height: "100px",
                margin: "auto",
              }}
            />
            <Typography variant="h4" sx={marginTop}>
              APP NAME
            </Typography>
            <Grid>
              <TextField
                label="Username"
                variant="standard"
                fullWidth
                sx={marginTop}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {isSignup && (
                <TextField
                  label="Fullname"
                  variant="standard"
                  fullWidth
                  sx={marginTop}
                />
              )}

              {isSignup && (
                <TextField
                  label="Email"
                  variant="standard"
                  fullWidth
                  sx={marginTop}
                />
              )}
              <TextField
                label="Password"
                variant="standard"
                fullWidth
                sx={marginTop}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
              {isSignup && (
                <TextField
                  label="Confirm Password"
                  variant="standard"
                  fullWidth
                  sx={marginTop}
                />
              )}
            </Grid>
            <Button
              variant="contained"
              fullWidth
              sx={{
                borderRadius: "15px",
                backgroundColor: "#00aac5",
                marginTop,
                "&:hover": {
                  backgroundColor: "#00aac5",
                },
              }}
              onClick={handleLogin}
            >
              {isSignup ? "Register" : "Login"}
            </Button>
            <Grid sx={{ textAlign: "left", marginTop }}>
              <Typography variant="title" s>
                {isSignup
                  ? "Already have an account? "
                  : "Don't have an account? "}

                <span
                  style={{ color: "#00aac5", cursor: "pointer" }}
                  onClick={() => setIsSignup((prev) => !prev)}
                >
                  {isSignup ? "Login" : "Sign up"}
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default Login;
