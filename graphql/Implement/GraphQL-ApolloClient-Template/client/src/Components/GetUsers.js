import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";
import Form from "./Form";

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      setUsers(data.userGroup);
    }
  }, [data]);

  return (
    <div>
      {" "}
      {users.map((val) => {
        return (
          <h1>
            {" "}
            {val.color} {val.users.map((va) => `${va.name} - ${va.age},`)}
          </h1>
        );
      })}
      <Form setUsers={setUsers} users={users} />
    </div>
  );
}

export default GetUsers;
