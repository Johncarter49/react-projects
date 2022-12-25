import React from "react";

const List = ({ user, setUser }) => {
  console.log(user[0].image);
  return (
    <div className="container">
      {user.map((users) => {
        return (
          <>
            <h3>{users.name}</h3>
            <div key={users.id} className="person">
              <img src={users.image} alt="" />
              <p>{users.age} years</p>
            </div>
          </>
        );
      })}
      <button>View all</button>
    </div>
  );
};

export default List;
