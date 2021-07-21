import React from 'react';
import './App.css';
import countries from './countriesData';
import CountryCard from './components/CountryCard';

class App extends React.Component {
  render() {
    return (
      <div className="country-list">
        { countries.map(({ name, flag, capital, id }) =>
          (<CountryCard
            key={ id }
            name={ name }
            flag={ flag }
            capital={ capital }
          />))}
      </div>
    );
  }
}

export default App;
