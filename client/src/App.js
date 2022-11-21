import GlobalStyles from "./GlobalStyles";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import styled from "styled-components";

const App = () => {
  return (
    <Wrapper>
      
      <Router>
      <GlobalStyles />
        <ContentContainer>
            <Routes>
  
              <Route path ="/home"  />
           
             
            </Routes>
          </ContentContainer>
        </Router>
      </Wrapper>
  );
}

const Wrapper = styled.div``

const ContentContainer = styled.div`

`
  

export default App;
