import { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Menu, MenuItem, TextField } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_CAR, GET_CARS, GET_PEOPLES } from "../../queries";
import { v4 as uuidv4 } from "uuid";

const AddCar = () => {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [selectedPerson, setSelectedPerson] = useState("");
  let peoplesData = useQuery(GET_PEOPLES);
  console.log(peoplesData, "data");
  const [addCar] = useMutation(ADD_CAR);
  const [id] = useState(uuidv4());

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (val) => {
    setSelectedPerson(val.id);
    setAnchorEl(null);
  };


  const addCartoPerson = (val) => {
    addCar({
      variables: {
        id,
        make,
        model,
        year,
        price,
        personId: selectedPerson,
      },
      update: (cache, { data: { addCar } }) => {
        const data = cache.readQuery({ query: GET_CARS });
        cache.writeQuery({
          query: GET_CARS,
          data: {
            ...data,
            peoples: [...data.cars, addCar],
          },
        });
      },
    });
  }

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
            <label>Year</label>
            <TextField
              value={year}
              onChange={(e) => setYear(e.target.value)}
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
            <label>Make</label>
            <TextField
              value={make}
              onChange={(e) => setMake(e.target.value)}
              placeholder="Please enter Last Name"
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
            <label>Model</label>
            <TextField
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Please enter Last Name"
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
            <label>Price</label>
            <TextField
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Please enter Last Name"
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
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="outlined"
            >
              Select Person
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {peoplesData.data?.peoples.map((val) => {
                return (
                  <MenuItem onClick={() => handleClose(val)}>
                    {val.firstName}
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          <Button variant="outlined" onClick={addCartoPerson}>Add Car</Button>
        </Box>
      </form>
    </div>
  );
};

export default AddCar;
