import Perfil from "../../assets/perfil.svg";
import Sacola from "../../assets/sacola.svg";
import styled from "styled-components";

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`
const Icones = styled.ul`
    display: flex;
    align-items: center;
    `

const icones = [Perfil, Sacola];

function HeaderIcons() {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone key={icone}>
          <img src={icone} alt="Ícone"></img>
        </Icone> // key e alt adicionados
      ))}
    </Icones>
  );
}

export default HeaderIcons;
