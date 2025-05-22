import * as React from 'react';
import { Box, Typography } from '@mui/material';

const navClick = (event) => {
  const targetId = event.currentTarget.innerText.trim();
  const anchor = document.getElementById(targetId);
  console.log("targetId:", targetId);
  console.log("anchor: ", anchor);

  if (anchor) {
    anchor.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export default function NavBar() {
  const navMenu = ['About', 'Contact', 'Resume'];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between', // pushes left and right sections apart
        alignItems: 'center',
        padding: '16px',
      }}
    >
      {/* Left side: name */}
      <Typography variant="h6">Bella Chen</Typography>

      {/* Right side: nav */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        {navMenu.map((item) => (
          <button
            key={item}
            onClick={navClick}
            style={{
              cursor: 'pointer',
              padding: '8px 16px',
              background: '#eee',
              border: '1px solid #ccc',
              borderRadius: '4px',
              minWidth: 100,
            }}
          >
            {item}
          </button>
        ))}
      </Box>
    </Box>
  );
}
