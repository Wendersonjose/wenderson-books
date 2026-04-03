import Perfil from '../../assets/perfil.svg'
import Sacola from '../../assets/sacola.svg'
import styled from 'styled-components';

const IconesContainer = styled.ul`
  display: flex;
  align-items: center;

  .icone {
    margin-right: 40px;
    width: 25px;
  }

  li {
    list-style: none;
  }
`

const icones = [Perfil, Sacola]


 function HeaderIcons() { 
    return (
 <IconesContainer>
            { icones.map( (icone) => (
              <li className='icone' key={icone}><img src={icone} alt='Ícone'></img></li> // key e alt adicionados
            )) }
        </IconesContainer>
    )
}

export default HeaderIcons; 