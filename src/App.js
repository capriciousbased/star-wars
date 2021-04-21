import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import People from "./components/People";
import Planets from "./components/Planets";


function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  
  async function fetchPeople(){
    let res = await fetch("https://swapi.dev/api/people/?format=json")
    let data = await res.json();
    setPeople(data.results)
  }
  async function fetchPlanets(){
    let res = await fetch("https://swapi.dev/api/planets/?format=json")
    let data = await res.json();
    setPlanets(data.results)
  }
  

  useEffect(() => {
   fetchPeople();
   fetchPlanets();

  }, [])

console.log("data",people);
console.log("data",planets);

  


  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/people">
          <People data={people}/>
        </Route>
        <Route exact path="/planets">
          <Planets data={planets}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
