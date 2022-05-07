import React from "react";


function User( {user}){
  return (
    <React.Fragment>
      <li>{user.name}</li>
      {user.email}
    </React.Fragment>
  )
}

export default User;