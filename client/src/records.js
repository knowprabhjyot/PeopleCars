import { useQuery } from "@apollo/client";
import { List, ListItem } from "@mui/material";
import { GET_PEOPLES } from "./queries";
import RecordCard from "./recordCard";

const Records = () => {
  const getStyles = () => ({
    list: {
      display: "flex",
      justifyContent: "center",
    },
  });

  const { loading, error, data } = useQuery(GET_PEOPLES);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const styles = getStyles();

  return (
    <List grid={{ gutter: 20, column: 1 }} style={styles.list}>
      {data.peoples.map((val) => (
        <ListItem key={val.id}>
          <RecordCard data={val} />
        </ListItem>
      ))}
    </List>
  );
};

export default Records;
