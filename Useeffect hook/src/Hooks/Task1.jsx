import { useState } from "react";

export default function Task4() {
  const [userlist, setuserlist] = useState([
    { id: 1, name: "Ali" },
    { id: 2, name: "Sara" },
    { id: 3, name: "Ahmed" }
  ]);

  const deleteUser = (idToDelete) => {
    // .filter() un sub ko rakhega jiski id match NAHI karegi
    const updatedList = userlist.filter((user) => user.id !== idToDelete);
    
    // Nayi filtered array state mein save ho gayi
    setuserlist(updatedList);
  };

  return (
    <>
      <h3>User List</h3>
      <p>Total Users: {userlist.length}</p>

      {userlist.map((user) => (
        <div key={user.id} style={{ marginBottom: "10px" }}>
          <span>{user.name} </span>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}