import Input from "../Input/Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
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
const Titulo = styled.h2`
  color: #fff;
  font-size: clamp(28px, 5vw, 36px);
  font-weight: 700;
  text-align: center;
  width: 100%;
  margin-bottom: 12px;
  letter-spacing: -0.02em;
`;
const Subtitulo = styled.h3`
  font-size: clamp(14px, 2.5vw, 16px);
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 24px;
  opacity: 0.95;
`;

const Resultado = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe onde começar?</Titulo>
      <Subtitulo>
        Pesquise por livros ou autores para encontrar o que deseja.
      </Subtitulo>
      <Input
        type="text"
        placeholder="Escreva sua próxima leitura"
        onKeyDown={(evento) => {
          if (evento.key === "Enter") {
            const textoDigitado = evento.target.value;
            const resultadoPesquisa = livros.filter((livro) =>
              livro.nome
                .toLocaleLowerCase()
                .includes(textoDigitado.toLocaleLowerCase()),
            );
            setLivrosPesquisados(resultadoPesquisa);
          }
        }}
      />
      {livrosPesquisados.length > 0 && (
        <Resultado>
          {livrosPesquisados.map((livro) => (
            <Livro key={livro.id}>
              <img src={livro.src} alt={livro.nome} />
              <p>{livro.nome}</p>
            </Livro>
          ))}
        </Resultado>
      )}
    </PesquisaContainer>
  );
}

export default Pesquisa;
