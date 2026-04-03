import logo from '../../assets/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoImage = styled.img`
  width: 100px;
  height: auto;
  background: transparent;
`;

const LogoName = styled.p`
  font-size: 24px;
  margin: 0;
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