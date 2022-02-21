import useAuthSetup from 'common/nhost/useAuthSetup';
import styled from 'styled-components';
import { GlobalStyle } from './common/styles';
import Main from './containers/Main';
import Sidebar from './containers/Sidebar';

const Container = styled.div`
  display: flex;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
`

export function App() {
  useAuthSetup()
  
  return (
    <Container>
      <GlobalStyle/>
      <Sidebar/>
      <Main/>

    </Container>
  );  
}

export default App;
