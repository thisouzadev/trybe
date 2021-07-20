import React from "react";

/* function NameList() {
  const nomes = ["Gabs", "Rapunzel", "Varibé", "gui gomes"];
  return (
    <ul>
      {nomes.map((nome) => (
        <li>{nome}</li>
      ))}
    </ul>
  );
} */

class NameList extends React.Component {
  constructor() {
    super();
    this.nomes = ["Gabs", "Rapunzel", "Varibé", "gui gomes"];
  }

  render() {
    return (
      <ul>
        {nomes.map((nome) => (
          <li>{nome}</li>
        ))}
      </ul>
    );
  }
}

export default NameList;
