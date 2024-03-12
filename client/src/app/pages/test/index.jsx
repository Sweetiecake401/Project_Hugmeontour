import React from "react";
import { TextField, Container } from "@mui/material";
import Typography from "@mui/material/Typography";

function index() {
  return (
    <div>
      <Container maxWidth="md">
        <div style={{ marginTop: "100px" }}>
          <form action="submit">
            <div style={{ paddingBottom: "10px" }}>
              <Typography variant="h2" component="h1">
                Employee Information
              </Typography>
            </div>
            <div style={{ paddingBottom: "10px" }}>
              <Typography variant="h4" component="h1">
                Name :
              </Typography>
              <TextField id="name" label="Enter Name" variant="outlined" />
            </div>
            <div style={{ paddingBottom: "10px" }}>
              <Typography variant="h4" component="h1">
                Age :
              </Typography>
              <TextField id="age" label="Enter Age" variant="outlined" />
            </div>
            <div style={{ paddingBottom: "10px" }}>
              <Typography variant="h4" component="h1">
                Country :
              </Typography>
              <TextField
                id="country"
                label="Enter Country"
                variant="outlined"
              />
            </div>
            <div style={{ paddingBottom: "10px" }}>
              <Typography variant="h4" component="h1">
                Position :
              </Typography>
              <TextField
                id="position"
                label="Enter Position"
                variant="outlined"
              />
            </div>
            <div style={{ paddingBottom: "10px" }}>
              <Typography variant="h4" component="h1">
                Wage :
              </Typography>
              <TextField id="wage" label="Enter Position" variant="outlined" />
            </div>
            <button>Submit</button>
          </form>
        </div>
        <hr />
        <div className="employee">
          <button>Show Employee</button>
        </div>
      </Container>
    </div>
  );
}

export default index;
