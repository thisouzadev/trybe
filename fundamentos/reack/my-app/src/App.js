import logo from './logo.svg';
import './App.css';
import NameList from './NameList'

function sayHello() {
  return 'hello world!';
}
function App() {
  /* const nomes = ['Gabs', 'Rapunzel', 'Varibé','gui gomes']; */
  return (
    <div className="App">
      <header className="App-header">{sayHello()}
          {/* <ul>{nomes.map(nome => <li>{nome}</li>)}</ul> */}
          <NameList />
      </header>
    </div>
  );
}

export default App;
