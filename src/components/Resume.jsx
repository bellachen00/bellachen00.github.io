import * as react from 'react';
import { Link, Stack, Typography } from '@mui/joy';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import ResumePdf from '../resume/Bella_Resume.pdf';

const resumeLink = (
    <Link href={ResumePdf} target="_blank" rel="noopener noreferrer" title="Bella's Resume">
      <LaunchRoundedIcon />
    </Link>
  );
  
  export default function Resume() {
    return (
      <Stack direction="column" p={4} spacing={2}>
        <Typography level="h5" endDecorator={resumeLink}>
          Resume
        </Typography>
      </Stack>
    );
  };