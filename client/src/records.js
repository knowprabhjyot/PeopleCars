import { useQuery } from "@apollo/client";
import { List, ListItem } from "@mui/material";
import RecordCard from "./components/Car/recordCard";
import { GET_CARS, GET_PEOPLES } from "./queries";

const Records = () => {
  const getStyles = () => ({
    list: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    },
  });

  let { loading, error, data } = useQuery(GET_PEOPLES);
  let carsData = useQuery(GET_CARS);
  let mainData = [];
  data?.peoples
    .filter((item) => item)
    .forEach((d) => {
      let foundCars = carsData.data?.cars.filter(
        (val) => val.personId === d.id
      );
      mainData.push({ ...d, cars: foundCars });
    });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const styles = getStyles();

  return (
    <List grid={{ gutter: 20, column: 1 }} style={styles.list}>
      {mainData.map((val) => (
        <ListItem key={val.id}>
            <RecordCard data={val} />
        </ListItem>
      ))}
    </List>
  );
};

export default Records;
