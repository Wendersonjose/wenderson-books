import styled from "styled-components";

const OpcoesContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(16px, 3vw, 32px);
  padding: 0;
  margin: 0;
  list-style: none;
  flex-wrap: wrap;
`;

const Opcao = styled.li`
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 500;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 80%;
    height: 2px;
    background-color: #FF7F50;
    transition: transform 0.3s ease;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }

  &:active {
    transform: translateY(0);
  }

  p {
    margin: 0;
  }
`;
const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function HeaderMenu() {
  return (
    <OpcoesContainer>
      {textoOpcoes.map((texto) => (
        <Opcao key={texto}>
          <p>{texto}</p>
        </Opcao> // key é obrigatória no React para identificar elementos em listas
      ))}
    </OpcoesContainer>
  );
}

export default HeaderMenu;
