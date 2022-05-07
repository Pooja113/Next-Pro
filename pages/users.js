import React from "react";
import User from "../components/user";

function Users({users}){
  return (<React.Fragment>
      <h1>Users</h1>
      {users.map((user)=> (
          <ul key={user.id}>
            <User user={user}/>
          </ul>
         ) 
        )}
  </React.Fragment>
  )}

export default Users;

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
//   console.log(data)
  return {
    props: {
      users: data
    }
  }
}