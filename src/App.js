import React from 'react';
import Info from './Components/Info';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = 'c9c05c567edac4a2c3e047a59c5ad05f';

class App extends React.Component {

  getWeather = async () => {
    const API_URL = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
    const DATA = await API_URL.json();
    console.log(DATA);
  };

  render(){
    return (
      <div>
        <Info />
        <Form />
        <Weather />
      </div>
    );
  };
} 

export default App;