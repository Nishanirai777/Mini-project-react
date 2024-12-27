
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox(){
    let [city , setCity ]=useState("");
const API_URL ="https://api.openweathermap.org/data/2.5/weather";
const API_KEY ="75c3712af188d52f35edb18a33ba5010";
let getweatherInfo= async()=>{
     let response = await fetch(`${API_URL}?q=${city}$appid=${API_KEY}&units=metric`);
let jsonResponse = await response.json();
console.log(jsonResponse);

    }
    

    let handleChange = (event)=>{
        setCity(event.target.value);
    };
    let handleSubmit =(event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        getweatherInfo();
    };
    return(
 <div className='SearchBox'>
    <h3>Search for the weather</h3>
    <form onSubmit={handleSubmit}>
    <TextField id="City"
     label="City Name" 
    variant="outlined" required
    value={city}
    onChange={handleChange} />
    <br></br>
    <br></br>
    <Button variant="contained" type=" submit">
        Search
      </Button>
    </form>
 </div>
    );
}