import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";

const AddPerson = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <form>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="80px"
          gap="30px"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            gap="20px"
            alignItems="center"
          >
            <label>First Name</label>
            <TextField
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Please enter First Name"
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            gap="20px"
            alignItems="center"
          >
            <label>Last Name</label>
            <TextField
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Please enter Last Name"
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Box>
          <Button variant="outlined">Add Person</Button>
        </Box>
      </form>
    </div>
  );
};

export default AddPerson;
