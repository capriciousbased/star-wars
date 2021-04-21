import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import People from "./components/People";
import Planets from "./components/Planets";
import Starships from "./components/Starships";


function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  
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
  

  async function fetchStarships(){
    let res = await fetch("https://swapi.dev/api/starships/?format=json")
    let data = await res.json();
    setStarships(data.results)
  }

  useEffect(() => {
   fetchPeople();
   fetchPlanets();
   fetchStarships();
  }, [])

console.log("data",people);
console.log("data",planets);
console.log("data",starships);

  


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
        <Route exact path="/starships">
          <Starships data={starships}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
