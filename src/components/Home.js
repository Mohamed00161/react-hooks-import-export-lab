import React from "react";
import { username, city } from "../data/user";

function Home() {
  return (
    <div>
      <h1>{username}</h1>
      <h1>{city}</h1>
    </div>
  );
}

export default Home;
