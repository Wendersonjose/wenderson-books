import logo from '../../assets/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(8px, 2vw, 12px);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const LogoImage = styled.img`
  width: clamp(80px, 15vw, 100px);
  height: auto;
  background: transparent;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

const LogoName = styled.p`
  font-size: clamp(18px, 3.5vw, 24px);
  margin: 0;
  color: #002f52;
  letter-spacing: 0.5px;

  strong {
    font-weight: 700;
  }
`;
 


function Logo() {
  return (
    <LogoContainer>
      <LogoImage
        src={logo}
        alt="Logo Wenderson Books"
      />

      <LogoName>
        <strong>Wenderson</strong> Books
      </LogoName>
    </LogoContainer>
  );
}

export default Logo;