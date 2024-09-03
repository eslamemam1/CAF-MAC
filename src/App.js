import { useState } from "react";
import "./App.css"
import NavBar from "./components/NavBar";

function App() {
  const [togol2, setTogol2] = useState(false);

  return (
    <div id="main" className="relative font">
      <NavBar togol2={togol2} setTogol2={setTogol2} />
    </div>
  );
}

export default App;
