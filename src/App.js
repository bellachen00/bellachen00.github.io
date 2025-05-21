import './App.css';
import {Box, Divider, Stack} from '@mui/joy';
// import { Box, Container, Divider, Grid, Stack } from '@mui/joy';
import NavBar from './components/NavBar';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Divider/>
      <div id="About"><About/></div>
      <Box>
        <Projects/>
      </Box>
      <Stack direction="row" p={2} spacing={2}>
        <div id="Resume"><Resume/></div>
        <div id="Contact"><Contact/></div>
      </Stack>


    </div>
  );
}

export default App;
