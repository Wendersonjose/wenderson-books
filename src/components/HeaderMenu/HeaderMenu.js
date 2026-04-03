import styled from 'styled-components';

const OpcoesContainer = styled.ul`
    
    display: flex;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;

    `
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']


function HeaderMenu(){
    return (
        <OpcoesContainer>
          { textoOpcoes.map( (texto) => (
            <li className='opcao' key={texto}><p>{texto}</p></li> // key é obrigatória no React para identificar elementos em listas
          ) ) }
         </OpcoesContainer>
    )
}

export default HeaderMenu;