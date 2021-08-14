import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function Tuotesivu(props) {
  return (
    <>
    <img src={props.kuva} alt="tuotekuva" width="500" height="500"/>
    <h1>{props.hinta}</h1>
    </>
  )
}

function Tuotenappi(props) {
  return (
    <div>
    <button type="button"><h2>{props.nimi}</h2><img src={props.kuva} width="200" lenght="200"></img></button>
    </div>
  )
}

function Lista(props) {
  return (
    <div>
      <h1>VERKKOKAUPPA</h1>
      <h2>kauppa, josta löytyy kaikki, mitä päivöliinit tarvitsevat tavallisiin elintoimintoihin!</h2>
      {props.tuotteet.map(function(tuote){
        return(
      <Link to={"/"+tuote.nimi}>
        <Tuotenappi nimi={tuote.nimi} kuva={tuote.kuva}></Tuotenappi>
      </Link>

        )
      })}
      <Link to="/pepsi">
        <Tuotenappi nimi="pepsi" kuva="pepsi.jpg"></Tuotenappi>
      </Link>
    </div>

  )
}

function App() {

  const tuotteet=[
    {
      nimi: "sola", 
      kuva: "sola.jpg",
      hinta: "2,99€" 
    },
    {
      nimi: "nuudeli",
      kuva: "nuudeli.jpg",
      hinta: "0,99€"
    },
    {
      nimi: "jumalallinen visio",
      kuva: "jeesus.jpeg",
      hinta: "Hinta: sielu"
    },
    {
      nimi: "Wolfram Alpha",
      kuva: "wolfram.jpg",
      hinta: "7,99€/kk"
    }
  ]
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Lista tuotteet={tuotteet}></Lista>
          </Route>
          {tuotteet.map(function(tuote){
            return (<Route path={"/"+tuote.nimi}>
                <Tuotesivu kuva={tuote.kuva} hinta={tuote.hinta}/>
              </Route>)
          }
          )}
           <Route path="/pepsi">
            <img src="gameover.jpg" width="600"/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
