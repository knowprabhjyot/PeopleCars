import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Button, Menu, MenuItem, TextField } from "@mui/material";

const AddCar = () => {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>

          <Button variant="outlined">Add Car</Button>
        </Box>
      </form>
    </div>
  );
};

export default AddCar;
