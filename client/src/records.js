import { useQuery } from "@apollo/client";
import { List, ListItem } from "@mui/material";
import RecordCard from "./components/Car/recordCard";
import { GET_PEOPLES } from "./queries";

const Records = () => {
  const getStyles = () => ({
    list: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    },
  });

  let { loading, error, data } = useQuery(GET_PEOPLES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const styles = getStyles();

  return (
    <List grid={{ gutter: 20, column: 1 }} style={styles.list}>
      {data.peoples.map((val) => (
        <ListItem key={val.id}>
            <RecordCard peoplesData={val} />
        </ListItem>
      ))}
    </List>
  );
};

export default Records;
