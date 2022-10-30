import { Box, IconButton, Typography } from "@mui/material";
import RemoveCar from "./removeCar";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import UpdateCar from "./updateCar";
import { useState } from "react";
import EditButton from "@mui/icons-material/Edit";
import { useQuery } from "@apollo/client";
import { GET_CARS } from "../../queries";

const RecordCard = ({ peoplesData, firstName, lastName }) => {
  const [editMode, setEditMode] = useState(false);
  const handleButtonClick = () => setEditMode(!editMode);
  let { loading, error, data } = useQuery(GET_CARS);

  let dataWithId = data?.cars?.filter(
    (data) => data.personId == peoplesData.id
  );

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
          {/* {data.firstName} {data.lastName} */}
          {firstName
            ? `${firstName} ${lastName}`
            : `${peoplesData.firstName} ${peoplesData.lastName}`}
        </h4>
        <Box display="flex" flexDirection="column" gap="20px">
          {dataWithId?.map((val, index) => {
            return (
              <Box key={index}>
                <Box
                  backgroundColor="#d1d1d1"
                  padding="20px"
                  borderRadius="10px"
                >
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
        {!firstName ? (
          <Link to={`person/${peoplesData.id}/${peoplesData.firstName}/${peoplesData.lastName}`}>
            Learn More
          </Link>
        ) : null}
      </Box>
    </>
  );
};

export default RecordCard;
