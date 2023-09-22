import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";

function App() {

  let [fetcedData, updateFetchedData] = useState([]);
  let {results} = fetcedData;

  console.log(results);

  let api = "https://swapi.dev/api/people";

  useEffect(()=>{

    (async function(){
      let data = await fetch(api).then(res=>res.json());
      updateFetchedData(data);
    })()

  },[api])

  return (
  <div className="App">
    <h1 className="text-center my-3 text-white">STARWARS <span className="text-warning">CHARACTERS</span>
    </h1>
    
    <div className="container">
        <div className="col-sm">
        <div className="row">
        <Cards results={results}/>
        </div>
    </div>
    </div>
    </div>
  );
}

export default App;