import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useMutation } from "@apollo/client";
import { ADD_PEOPLE, GET_PEOPLES } from "./queries";

const AddPerson = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id] = useState(uuidv4());
  const [addPeople] = useMutation(ADD_PEOPLE);

  const onFinish = (event) => {
    event.preventDefault();
    addPeople({
      variables: {
        id,
        firstName,
        lastName,
      },
      update: (cache, { data: { addPeople } }) => {
        const data = cache.readQuery({ query: GET_PEOPLES });
        cache.writeQuery({
          query: GET_PEOPLES,
          data: {
            ...data,
            peoples: [...data.peoples, addPeople],
          },
        });
      },
    });
  };

  return (
    <div>
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
          <Button variant="outlined" onClick={onFinish}>Add Person</Button>
        </Box>
    </div>
  );
};

export default AddPerson;
