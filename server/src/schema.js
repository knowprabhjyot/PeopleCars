import { gql } from "apollo-server-express";
import { find, remove } from "lodash";

const peoples = [
  {
    id: "1",
    firstName: "Bill",
    lastName: "Gates",
  },
  {
    id: "2",
    firstName: "Steve",
    lastName: "Jobs",
  },
  {
    id: "3",
    firstName: "Linux",
    lastName: "Torvalds",
  },
];

const cars = [
  {
    id: "1",
    year: "2019",
    make: "Toyota",
    model: "Corolla",
    price: "40000",
    personId: "1",
  },
  {
    id: "2",
    year: "2018",
    make: "Lexus",
    model: "LX 600",
    price: "13000",
    personId: "1",
  },
  {
    id: "3",
    year: "2017",
    make: "Honda",
    model: "Civic",
    price: "20000",
    personId: "1",
  },
  {
    id: "4",
    year: "2019",
    make: "Acura ",
    model: "MDX",
    price: "60000",
    personId: "2",
  },
  {
    id: "5",
    year: "2018",
    make: "Ford",
    model: "Focus",
    price: "35000",
    personId: "2",
  },
  {
    id: "6",
    year: "2017",
    make: "Honda",
    model: "Pilot",
    price: "45000",
    personId: "2",
  },
  {
    id: "7",
    year: "2019",
    make: "Volkswagen",
    model: "Golf",
    price: "40000",
    personId: "3",
  },
  {
    id: "8",
    year: "2018",
    make: "Kia",
    model: "Sorento",
    price: "45000",
    personId: "3",
  },
  {
    id: "9",
    year: "2017",
    make: "Volvo",
    model: "XC40",
    price: "55000",
    personId: "3",
  },
];




const typeDefs = gql`
  type People {
    id: String!
    firstName: String
    lastName: String
  }
  type Query {
    people(id: String!): People
    peoples: [People]
  }
  type Mutation {
    addPeople(id: String!, firstName: String!, lastName: String!): People
    updatePeople(id: String!, firstName: String, lastName: String): People
    removePeople(id: String!): People
  }
`

const resolvers = {
  Query: {
    peoples: () => peoples,
    people: (root, args) => {
      return find(peoples, { id: args.id })
    }
  },
  Mutation: {
    addPeople: (root, args) => {
      const newPeople = {
        id: args.id,
        firstName: args.firstName,
        lastName: args.lastName
      }

      peoples.push(newPeople)

      return newPeople
    },
    updatePeople: (root, args) => {
      const people = find(peoples, { id: args.id })

      if (!people) {
        throw new Error(`Couldn't find person with id ${args.id}`)
      }

      people.firstName = args.firstName
      people.lastName = args.lastName

      return people
    },
    removePeople: (root, args) => {
      const removedPeoples = find(peoples, { id: args.id })

      if (!removedPeoples) {
        throw new Error(`Couldn't find Person with id ${args.id}`)
      }

      remove(peoples, c => {
        return c.id === removedPeoples.id
      })

      return removedPeoples
    }
  }
}

export { typeDefs, resolvers }