import { useContext } from "react";
import "./App.css";
import Header from "./component/Header";

function App() {
  return (
    <div className="App h-screen w-full bg-light-veryLightGray dark:bg-dark-veryDarkBlue">
      <Header />
    </div>
  );
}

export default App;
