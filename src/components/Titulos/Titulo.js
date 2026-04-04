import styled from "styled-components"; 

const Titulo = styled.h2`
  color: ${props => props.cor || "#fff"};
  font-size: ${props => props.tamanho || "clamp(28px, 5vw, 36px)"};
  font-weight: ${props => props.peso || 700};
  text-align: ${props => props.alinhamento || "center"};
  width: 100%;
  margin-bottom: 12px;
  letter-spacing: -0.02em;
`;

export default Titulo;