import React from "react";
import RecordCard from "./recordCard";
import { useParams } from "react-router-dom";

export default function CarDetail() {
  let { person, firstName, lastName } = useParams(); // Unpacking and retrieve id
  
  return (
    <>
      <RecordCard
        firstName={firstName}
        lastName={lastName}
        peoplesData={{ id : person, firstName, lastName}}
      />
    </>
  );
}
