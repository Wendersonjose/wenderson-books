import './HeaderMenu.css';
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']


function HeaderMenu(){
    return (
        <ul className='opcoes'>
          { textoOpcoes.map( (texto) => (
            <li className='opcao' key={texto}><p>{texto}</p></li> // key é obrigatória no React para identificar elementos em listas
          ) ) }
         </ul>
    )
}

export default HeaderMenu;