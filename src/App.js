import { FiSearch } from 'react-icons/fi';
import './styles.css'

function App() {
  return (
    <div className="container">
      <h1 className="title">Intelli Trips</h1>

      <div className="containerInput">
        <input 
        type="text"
        placeholder="Escolha seu destino"
        />

        <button className="buttonSearch">
          <FiSearch size={10} color="#000" />
        </button>
      </div>

      <main className='main'>
        <h2>Destinos mais procurados</h2>
        <span>Veja os destinos mais procurados pelos nossos clientes</span>
      </main>  

    </div>
  );
}

export default App;
