import logo from './logo.svg';
import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import  Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Header />
        
      </StyledEngineProvider> 
    </div>
  );
}

export default App;
