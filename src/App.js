import './App.css';
import logo from './logo.svg';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import StyledButton, { AnimatedLogo, FancyButton, SubmitButton } from './components/Button';

const theme = {
  dark: {
    primary: '#000',
    text: '#fff',
  },
  light: {
    primary: '#fff',
    text: '#000',
  },
  fontFamily: 'Segoe UI'
}

const GlobalStyle = createGlobalStyle`
  button: {
    font-family: ${props => props.theme.fontFamily }
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    <div className="App">
      {/* <button>Button</button> */}
      <AnimatedLogo src={logo} />
      <StyledButton>Button</StyledButton>       
      <StyledButton variant="outline">Button</StyledButton>       
      <FancyButton as='a'>Button</FancyButton>  
      <div><br /></div>  
      <SubmitButton> Submit </SubmitButton>   
    </div>
    </ThemeProvider>
  );
}

export default App;
