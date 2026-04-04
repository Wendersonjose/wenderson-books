import Logo from "../Logo/Logo";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import HeaderIcons from "../HeaderIcons/HeaderIcons";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #6495ed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: clamp(16px, 3vh, 24px) clamp(16px, 5vw, 40px);
  gap: clamp(20px, 5vw, 60px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: box-shadow 0.3s ease;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 16px;
  }
`

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderMenu />
      <HeaderIcons />
    </HeaderContainer>
  );
}

export default Header;
