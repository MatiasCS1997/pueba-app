//import './App.css';
//import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import Formulario from "./Components/Formulario";

import Showapi from "./Components/Showapi";

function App() {
  const [SearchName, setSearchName] = useState("");

  return (
    <div className="container">
      <Formulario setSearchName={setSearchName} />
      <Showapi SearchName={SearchName} />
    </div>
  );
}

export default App;
