import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import NasaPhoto from "./Components/NasaPhoto.js";



function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=hXchbLxB5kqRG0lTXuv2hB4wdRPAt1p5i4k6BIuk')
    .then(res => {
      setData(res.data)
    })
    .catch(err => console.error(err))
  }, [])
 
  return (
    <div className="App">
      { data && <NasaPhoto photo={data} /> }
    </div>
  );
}

export default App;
