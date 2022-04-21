import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import NasaPhoto from "./Components/NasaPhoto.js";

/*
-create input as type date picker ( input type: date picker)
-create an on change handler
-implement state for the picker, would be best to do this
at App.js level
-look through API information to interpret the date in the URL
-inject the date into the URL USING DOLLAR SIGN AND CURLY BOIS
*/



function App() {
  
  let today = new Date().toISOString().slice(0, 10)

  const [data, setData] = useState();
  const [date, setDate] = useState(today);

  

  const onChangeHandler = (evt) => {
   setDate(evt.target.value);
  }
  

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=hXchbLxB5kqRG0lTXuv2hB4wdRPAt1p5i4k6BIuk&date=${date}`)
    .then(res => {
      setData(res.data)
    })
    .catch(err => console.error(err))
  }, [date])
 
  return (
    <div className="App">
      { data && <NasaPhoto photo={data} onChangeHandler={onChangeHandler} date={date} today={today} /> }
    </div>
  );
}

export default App;
