import React from 'react';
import Info from './Components/Info';
import Form from './Components/Form';

class App extends React.Component {
  render(){
    return (
      <div>
        <Info/>
        <Form/>
      </div>
    );
  };
} 

export default App;