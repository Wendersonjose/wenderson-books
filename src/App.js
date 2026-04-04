import Header from "./components/Header/Header";
import styled from "styled-components";
import Pesquisa from "./components/Pesquisa/pesquisa";

const AppContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: radial-gradient(
      circle at center,
      rgba(176, 224, 230, 1) 0%,
      rgba(148, 187, 233, 1) 50%,
      rgba(120, 170, 220, 1) 100%
    );
    overflow-x: hidden;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa/>
    </AppContainer>
  );
}

export default App;
