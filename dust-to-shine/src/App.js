
import React from "react"; 
import Navigation from "./components/Navigation";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <section> 
        <Navigation/>
      </section>

      <section>
        <Home/>
      </section>

    </div>
  );
}

export default App;
