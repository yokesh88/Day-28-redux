import React from "react";
import Cards from './components/Cards'
import UserContext from "./contextData/UserContext";

function App() {
  return (
    <div className="container-fluid my-5">
      <UserContext>
        <Cards />
      </UserContext>
    </div>
  );
}

export default App;