import './HeaderIcons.css';
import Perfil from '../../assets/perfil.svg'
import Sacola from '../../assets/sacola.svg'

const icones = [Perfil, Sacola]


 function HeaderIcons() { 
    return (
 <ul className='icones'>
            { icones.map( (icone) => (
              <li className='icone' key={icone}><img src={icone} alt='Ícone'></img></li> // key e alt adicionados
            )) }
        </ul>
    )
}

export default HeaderIcons; 