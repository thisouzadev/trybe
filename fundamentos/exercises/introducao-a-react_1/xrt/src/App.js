import './App.css';

function App() {
  const tarefas = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];
  return (
      <ul>{tarefas.map(tarefa => <li>{ tarefa }</li>)}</ul>
  );
}

export default App;
