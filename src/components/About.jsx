import * as React from 'react';
import { Stack, Typography } from '@mui/joy';

export default function About() {
    return (
      <Stack direction="column" p={4} spacing={2}>
        <Typography level="h5" gutterBottom fontSize={20}>
          About Me
        </Typography>
        <Typography>
          Recent Computer Science Graduate from UC Santa Cruz with an interest in Artificial Intelligence, Web Apps, <br/>
          and Computer Systems.
        </Typography>
      </Stack>    
    );
}