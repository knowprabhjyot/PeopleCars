import React from "react";
import AddCar from "./components/Car/addCar";
import AddPerson from "./components/Person/AddPerson";
import Records from "./records";

export default function Home() {
  return (
    <div className="App">
      <AddPerson />
      <AddCar />

      <Records />
    </div>
  );
}
