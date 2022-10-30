import React from "react";
import RecordCard from "./recordCard";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CARS } from "../../queries";

export default function CarDetail() {
  let { person, firstName, lastName } = useParams(); // Unpacking and retrieve id
  let { loading, error, data } = useQuery(GET_CARS, {
    variables: { personId: person },
    posollInterval: 500,
  });

  // Had to do this way, was getting some issues
  const filteredData = data?.cars?.filter((item) => item.personId == person);
  let maindata = {
    cars :filteredData
  }
  return (
    <>
      <RecordCard
        firstName={firstName}
        lastName={lastName}
        data={maindata}
      />
    </>
  );
}
