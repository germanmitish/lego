import useAuthSetup from 'common/nhost/useAuthSetup';
import styled from 'styled-components';
import { GlobalStyle } from './common/styles';
import Main from './containers/Main';
import Sidebar from './containers/Sidebar';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export function App() {
  useAuthSetup()
  
  return (
    <Container>
      <GlobalStyle/>
      <Main/>
      <Sidebar/>
    </Container>
  );  
}

export default App;
