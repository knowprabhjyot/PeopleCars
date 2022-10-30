import { useMutation } from "@apollo/client";
import { Button, Menu, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { UPDATE_CAR } from "../../queries";

const UpdateCar = ({ data, onButtonClick }) => {
  const [id, setId] = useState(data.id);
  const [year, setYear] = useState(data.year);
  const [make, setMake] = useState(data.make);
  const [model, setModel] = useState(data.model);
  const [price, setPrice] = useState(data.price);
  const [personId, setPersonId] = useState(data.personId);
  const [anchorEl, setAnchorEl] = useState(null);

  const [, forceUpdate] = useState();

  useEffect(() => {
    forceUpdate({});
  }, []);

  const [updateCar] = useMutation(UPDATE_CAR);

  const onFinish = () => {
    // const { year, make, model, price, personId } = values;

    updateCar({
      variables: {
        id,
        year,
        make,
        model,
        price,
        personId,
      },
    });

    onButtonClick();
  };

  return (
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
        ></Box>

        <Button variant="outlined" type="button" onClick={onFinish}>
          Update Car
        </Button>
      </Box>
    </form>
  );
};

export default UpdateCar;
