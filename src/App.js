import './App.css';
import {Box} from '@mui/joy';
// import { Box, Container, Divider, Grid, Stack } from '@mui/joy';
import NavBar from './components/NavBar';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Box>
        <NavBar/>
      </Box>
      <About/>
    </div>
  );
}

export default App;
