import Icons from './components/icons/icons'
import './App.css';
import Perfil from './assets/perfil.svg'
import Sacola from './assets/sacola.svg'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', ' MINHA ESTANTE']
const icones = [Perfil, Sacola]

function App() {
  return (
    <div className='App'>
        <header className='App-header'>

         <Icons />
         <ul className='opcoes'>
          { textoOpcoes.map( (texto) => (
            <li className='opcao'><p>{texto}</p></li>
          ) ) }
         </ul>
         <ul className='icones'>
          {icones.map( (icone) =>(
            <li className='icone'><img src={icone}/></li>
          ))}
         </ul>

        </header>
    </div>
  );
}

export default App;
