import Perfil from "../../assets/perfil.svg";
import Sacola from "../../assets/sacola.svg";
import styled from "styled-components";

const Icone = styled.li`
    width: clamp(24px, 3vw, 32px);
    height: clamp(24px, 3vw, 32px);
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 6px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: brightness(0) invert(1);
        transition: filter 0.3s ease;
    }

    &:hover {
        background-color: rgba(255, 255, 255, 0.15);
        transform: translateY(-2px) scale(1.1);
    }

    &:hover img {
        filter: brightness(0) saturate(100%) invert(64%) sepia(63%) saturate(2091%) hue-rotate(333deg) brightness(102%) contrast(101%);
    }

    &:active {
        transform: translateY(0) scale(1.05);
    }
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
    gap: clamp(12px, 2vw, 20px);
    list-style: none;
    padding: 0;
    margin: 0;
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
