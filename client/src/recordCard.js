import { Box } from "@mui/material";

const RecordCard = ({ data }) => {
  return (
    <Box>
      <h1>{data.firstName}</h1>
      <h1>{data.lastName}</h1>
    </Box>
  );
};

export default RecordCard;
