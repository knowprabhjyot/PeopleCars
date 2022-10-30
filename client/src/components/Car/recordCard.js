  import { Box, IconButton, Typography } from "@mui/material";
  import RemoveCar from "./removeCar";
  import Divider from "@mui/material/Divider";
  import { Link } from "react-router-dom";
  import UpdateCar from "./updateCar";
  import { useState } from "react";
  import EditButton from "@mui/icons-material/Edit";

  const RecordCard = ({ data }) => {
    const [editMode, setEditMode] = useState(false);
    const handleButtonClick = () => setEditMode(!editMode);

    return (
      <>
        <Box
          display="flex"
          flexDirection="column"
          border="1px solid gray"
          width="100%"
          padding="20px"
        >
          <h4>
            {data.firstName} {data.lastName}
          </h4>
          <Box display="flex" flexDirection="column" gap="20px">
            {data.cars?.map((val, index) => {
              return (
                <Box key={index}>
                  <Box backgroundColor="#d1d1d1" padding="20px" borderRadius="10px">
                    {" "}
                    <Typography variant="h6">
                      {val.year} {val.make} {"--> $"} {val.price}
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="flex-end">
                    {editMode ? (
                      <UpdateCar data={val} onButtonClick={handleButtonClick} />
                    ) : null}
                    <IconButton
                      onClick={handleButtonClick}
                      color="secondary"
                      aria-label="upload picture"
                      component="label"
                    >
                      <EditButton />
                    </IconButton>
                    <RemoveCar data={val} />
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Box padding="20px">
            <Divider />
          </Box>
          <Link to={`person/${data.id}`}>Learn More</Link>
        </Box>
      </>
    );
  };

  export default RecordCard;
