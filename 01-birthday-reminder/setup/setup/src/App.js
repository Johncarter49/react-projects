import React, { useState } from "react";
import data from "./data";
import List from "./List";
import "./App.css";

function App() {
  const [user,setUser] = useState(data);


  return (
  <div className="main">
  <List user={user} setUser={setUser} />
  </div>
  )
}

export default App;
