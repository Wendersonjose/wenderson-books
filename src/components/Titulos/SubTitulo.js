import styled from "styled-components";


const Subtitulo = styled.h3`
  font-size: ${props => props.tamanho || "clamp(14px, 2.5vw, 16px)"};
  font-weight: ${props => props.peso || 400};
  line-height: 1.5;
  margin-bottom: 24px;
  opacity: 0.95;
`;

export default Subtitulo;