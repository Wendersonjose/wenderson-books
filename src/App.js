import Header from "./components/Header/Header";
import styled from "styled-components";

const AppContainer = styled.div`
  
    width: 100vw;
    height: 100vh;
    background: radial-gradient(
      circle,
      rgba(176, 224, 230, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
    `

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
