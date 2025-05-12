import './App.css';
import {Box} from '@mui/joy';
// import { Box, Container, Divider, Grid, Stack } from '@mui/joy';
import NavBar from './components/NavBar';
import About from './components/About';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Box>
        <NavBar/>
      </Box>
      <About/>
      <Resume/>

    </div>
  );
}

export default App;
