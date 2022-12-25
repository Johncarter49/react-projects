import React from "react";


const List = ({ user, setUser }) => {
  console.log(user[0].image);
  return (
    <>
      <h2>list component</h2>
      {user.map((users) => {
        return(<div key={users.id}>
        <img src={users.image} alt=""/>
        <h4>{users.name}</h4>
        <p>{users.age} years</p>
        </div>)
      })}
      <button></button>
    </>
  );
};

export default List;
