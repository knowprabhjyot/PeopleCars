import { Box, Typography } from "@mui/material";
import RemoveCar from "./removeCar";

const RecordCard = ({ data }) => {
  console.log(data.cars);
  return (
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
        {data.cars.map((val) => {
          return (
            <Box>
              <Box backgroundColor="#d1d1d1">
                {" "}
                <Typography variant="h6">
                  {val.year} {val.make} {"--> $"} {val.price}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <RemoveCar data={val} />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default RecordCard;
