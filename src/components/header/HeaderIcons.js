import Perfil from '../../assets/perfil.svg'
import Sacola from '../../assets/sacola.svg'

const icones = [Perfil, Sacola]


 function Icons() {
    return (
 <ul className='icones'>
            { icones.map( (icone) => (
              <li className='icone'><img src={icone}></img></li>
            )) }
        </ul>
    )
}

export default Icons;