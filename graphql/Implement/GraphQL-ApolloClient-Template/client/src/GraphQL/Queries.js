import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
  query {
    userGroup {
      color
      users {
        name
        age
      }
    }
  }
`;
