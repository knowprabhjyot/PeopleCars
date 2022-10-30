import { useMutation } from "@apollo/client";

import DeleteButton from "@mui/icons-material/Delete";

import filter from "lodash.filter";
import { IconButton } from "@mui/material";
import { GET_CARS, REMOVE_CAR } from "../../queries";

const RemoveCar = (props) => {
  const [removeCar] = useMutation(REMOVE_CAR, {
    update(cache, { data: { removeCar } }) {
      const { contacts } = cache.readQuery({ query: GET_CARS });
      cache.writeQuery({
        query: GET_CARS,
        data: {
          contacts: filter(contacts, (o) => {
            return o.id !== removeCar.id;
          }),
        },
      });
    },
  });

  const handleButtonClick = () => {
    let result = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (result) {
      removeCar({
        variables: {
          id: props.data.id,
        },
      });
    }
  };

  return (
    <IconButton
      onClick={handleButtonClick}
      color="secondary"
      aria-label="upload picture"
      component="label"
    >
      <DeleteButton />
    </IconButton>
  );
};

export default RemoveCar;
