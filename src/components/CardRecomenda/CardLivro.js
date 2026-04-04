import styled from "styled-components";

const Card = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

const Imagem = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
`;

const Titulo = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  text-align: center;

  display: -webkit-box;
  -webkit-line-clamp: 2; /* limita em 2 linhas */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Descricao = styled.p`
  font-size: 12px;
  color: #ddd;
  text-align: center;

  display: -webkit-box;
  -webkit-line-clamp: 3; /* limita descrição */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

function CardLivro({ titulo, descricao, imagem }) {
  return (
    <Card>
      <Imagem src={imagem} alt={titulo} />
      <Titulo>{titulo}</Titulo>
      <Descricao>{descricao}</Descricao>
    </Card>
  );
}

export default CardLivro;
