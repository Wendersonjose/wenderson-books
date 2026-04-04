import DadosRecomendacao from "./DadosRecomendacao";
import CardLivro from "./CardLivro";
import Titulo from "../Titulos/Titulo";
import styled from "styled-components";

const Container = styled.section`
  background: linear-gradient(135deg, #002f52, #326589);
  padding: 60px 20px;
  text-align: center;
`;

const Lista = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-top: 30px;
`;

function LivrosRecomendacao() {
  return (
    <Container>
      <Titulo cor="#FFF">Livros Recomendados</Titulo>

      <Lista>
        {DadosRecomendacao.map((livro) => (
          <CardLivro
            key={livro.id}
            titulo={livro.titulo}
            descricao={livro.descricao}
            imagem={livro.imagem}
          />
        ))}
      </Lista>
    </Container>
  );
}

export default LivrosRecomendacao;
