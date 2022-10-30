import { gql } from "@apollo/client";

export const GET_PEOPLES = gql`
  {
    peoples {
      id
      firstName
      lastName
    }
  }
`;

export const ADD_PEOPLE = gql`
  mutation AddPeople($id: String!, $firstName: String!, $lastName: String!) {
    addPeople(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;

export const UPDATE_PEOPLE = gql`
  mutation UpdatePeople($id: String!, $firstName: String!, $lastName: String!) {
    updatePeople(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;

export const REMOVE_PEOPLE = gql`
  mutation RemovePeople($id: String!) {
    removePeople(id: $id) {
      id
      firstName
      lastName
    }
  }
`;

export const GET_CARS = gql`
  {
    cars {
      id
      make
      model
      year
      price
      personId
    }
  }
`;

export const ADD_CAR = gql`
  mutation AddCar(
    $id: String!
    $make: String!
    $model: String!
    $year: String!
    $price: String!
    $personId: String!
  ) {
    addCar(
      id: $id
      make: $make
      model: $model
      year: $year
      price: $price
      personId: $personId
    ) {
      id
      make
      model
      year
      price
      personId
    }
  }
`;

export const UPDATE_CAR = gql`
  mutation UpdateCar(
    $id: String!
    $make: String!
    $model: String!
    $year: String!
    $price: String!
    $personId: String!
  ) {
    updateCar(
      id: $id    
      make: $make
      model: $model
      year: $year
      price: $price
      personId: $personId
    ) {
      id
      make
      model
      year
      price
      personId
    }
  }
`;

export const REMOVE_CAR = gql`
  mutation RemoveCar($id: String!) {
    removeCar(id: $id) {
      id
      make
      model
      year
      price
      personId
    }
  }
`;
