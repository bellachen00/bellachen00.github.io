import './App.css';
import { Box, Divider} from '@mui/joy';
import NavBar from './components/NavBar';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';


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

      <Box sx={{ py: 4, backgroundColor: 'lightblue' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            textAlign: 'center',
          }}
        >
          {/* Resume section with its own ID */}
          <Box id="Resume" sx={{ flex: 1 }}>
            <Resume />
          </Box>

          {/* Contact section with its own ID */}
          <Box id="Contact" sx={{ flex: 1 }}>
            <Contact />
          </Box>
        </Box>
      </Box>
      <Divider/>
      <Box sx={{ py: 4 }}>
        <Footer />
      </Box>
    </div>
  );
}

export default App;

