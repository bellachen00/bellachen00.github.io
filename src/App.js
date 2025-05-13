import './App.css';
import {Box, Divider} from '@mui/joy';
// import { Box, Container, Divider, Grid, Stack } from '@mui/joy';
import NavBar from './components/NavBar';
import About from './components/About';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Divider/>
      <div id="About"><About/></div>
      <div id="Resume"><Resume/></div>
      <div id="Contact"><Contact/></div>

    </div>
  );
}

export default App;
