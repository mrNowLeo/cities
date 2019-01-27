import React from 'react';

class Weather extends React.Component {
  render() {
    return (
      <div>
        { this.props.city && 
          <div>
            <p>City: { this.props.city }, { this.props.country }</p>
            <p>Tempreture: { this.props.temp }</p>
            <p>Sunrise: { this.props.sunrise }</p>
            <p>Sunset: { this.props.sunset }</p>
          </div>
        }
      </div>
    );
  }
}

export default Weather;