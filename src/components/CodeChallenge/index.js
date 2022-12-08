import { Button, Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";

function CodeChallenge() {
  const [input, setInput] = useState(null);
  const [result, setResult] = useState(null);

  const handleCodeChallengeInput = (e) => {
    setInput(e.target.value);
  };

  const handleCodeChallengeResult = () => {
    let missingNumbers = [];
    let numberStringArray = input.split(",");
    let numberArray = [...new Set(numberStringArray.map(Number))];
    let maxNumberInInputArray = Math.max(...numberArray);
    let minNumberInInputArray = Math.min(...numberArray);
    for (let i = minNumberInInputArray; i <= maxNumberInInputArray; i++) {
      if (!numberArray.includes(i) && i > 0) {
        missingNumbers.push(i);
      }
    }
    setResult(missingNumbers[0]);
  };

  return (
    <Container>
      <Grid mt="50px">
        <Grid>
          <Typography variant="h5">Code Challenge</Typography>
          <img width="100%" src={require("./code.png")} alt="code" />
        </Grid>
        <Grid>
          <Typography variant="h5">Data Collection</Typography>
          <Grid display={"flex"} alignItems="center">
            <TextField
              variant="standard"
              label="input"
              onChange={handleCodeChallengeInput}
              sx={{ width: "300px" }}
              helperText="Enter comma separated numbers. eg: 1,2,4,6,3,7,8"
            />
            <Button
              variant="contained"
              onClick={handleCodeChallengeResult}
              sx={{
                backgroundColor: "#00aac5",
                color: "#fff",
                width: "100px",
                marginLeft: "10px",
                height: "24px",

                "&:hover": {
                  backgroundColor: "#00aac5",
                },
              }}
            >
              Result
            </Button>
          </Grid>
          <Grid mt={"30px"}>
            <Typography variant="h5">Output</Typography>
            <Typography
              backgroundColor="#00aac5"
              width={"100px"}
              textAlign="center"
              mt="10px"
              color={"#fff"}
            >
              {result}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CodeChallenge;
