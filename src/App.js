import './App.css';
import { Box, Divider, Stack } from '@mui/joy';
import NavBar from './components/NavBar';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      {/* Navigation bar */}
      <NavBar />
      <Divider />

      {/* Scroll sections with matching IDs */}
      <Box id="About" sx={{ py: 4 }}>
        <About />
      </Box>

      <Box id="Projects" sx={{ py: 4 }}>
        <Projects />
      </Box>

      <Box id="Resume" sx={{ py: 4 }}>
        <Resume />
      </Box>

      <Box id="Contact" sx={{ py: 4 }}>
        <Contact />
      </Box>
    </div>
  );
}

export default App;

