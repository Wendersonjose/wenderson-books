import { Lancamentos  } from "./DadosUltimosLancamentos";
import  Titulo  from "../Titulos/Titulo";
import styled from "styled-components";

const LancamentoContainer = styled.section`
  background-image: linear-gradient(
    135deg,
    #002f52 0%,
    #2a5a7a 50%,
    #326589 100%
  );
  color: #fff;
  text-align: center;
  padding: clamp(40px, 8vh, 85px) clamp(16px, 5vw, 40px);
  min-height: 270px;
  height: auto;
  width: 100%;
`;

const Resultado = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;{}
  gap: 24px;
  margin-top: 32px;
  padding: 0 16px;
`;

const Livro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 200px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;
  }

  &:hover img {
    box-shadow: 0 8px 24px rgba(255, 127, 80, 0.4);
  }

  p {
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    margin: 0;
    color: #fff;
  }
`;

function UltimosLancamentos() {
    return (
      <LancamentoContainer>
        <Titulo cor="#000">Últimos Lançamentos</Titulo>
        <Resultado>
          {Lancamentos.map((lancamento) => (
            <Livro key={lancamento.id}>
              <img src={lancamento.src} alt={lancamento.nome} />
              <p>{lancamento.nome}</p>
            </Livro>
          ))}
        </Resultado>
      </LancamentoContainer>
    );
}

export default UltimosLancamentos;