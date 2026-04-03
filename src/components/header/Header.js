import Logo from "../Logo/Logo";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import HeaderIcons from "../HeaderIcons/HeaderIcons";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #6495ed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
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
