import React, { useState } from "react";
import data from "./data";
import List from "./List";
import "./App.css";

function App() {
  const [user,setUser] = useState(data);


  return (
  <>
  <h2>reminder project setup</h2>
  <List user={user} setUser={setUser} />
  </>
  )
}

export default App;
