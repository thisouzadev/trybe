import React from "react";

class CountryCard extends React.Component {
  render() {
    const { name, flag, capital } = this.props;// {name: 'Brasil', capital: 'brasilia', flag: 'bandeirinha'}
    return (
      <div>
        <section className="country-card">
          <h1>
            {name}
            {flag}
          </h1>
          <p>{capital}</p>
        </section>
      </div>
    );
  }
}

export default CountryCard;
