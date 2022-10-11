import logo from './logo.svg';
import './App.css';

function App() {

  const nome ="matheus"

  function olaMundo (nome){
  alert ('ola' + nome)
}
  
  return (
    <div>
     ola barbosa

     <button className='meu-nome' onClick={olaMundo}>Clique em mim, {nome}</button>
    </div>
  );
}

export default App;
