import * as React from 'react';
import {
    Box,
    Button,
    Card,
    Divider,
    Grid,
    Link,
    List,
    ListItemDecorator,
    ListItem,
    Stack,
    Typography,
  } from '@mui/joy';
import { Description } from '@mui/icons-material';

  const myProjects = [
    {
        title: "Multi-Threaded HTTP Server",
        link: "",
        desc: [""],
    },
    {
        title: "Javascript Calendar",
        link: "https://github.com/bellachen00/Javascript-Calendar",
        desc: ['Created a program that has a function of a calendar visually which allows us to move between the previous and next months',
            'Highlighted the current day by mapping its value to an identification labeled ”today”'
        ],
    },
    {
        title: "Gmail Clone",
        link: "",
        desc: [""],
    },
  ];


export default function Projects() {
  return (
    <Stack direction={'column'}>
      <Typography variant="h4">
        Projects
      </Typography>
      <Grid container spacing={4} p={0} sx={{ flexWrap: 'wrap' }}>
        {myProjects.map((project, index) => (
          <Grid
            item
            xs={12}  // Full width on small screens (mobile)
            sm={6}   // Half width on small screens (tablet)
            md={4}   // One-third width on larger screens (desktop)
            key={index}
          >
            <Stack spacing={1} p={2} sx={{ border: '1px solid #ddd', borderRadius: 1 }}>
              <Link href={project.link}>
                {project.title}
              </Link>
              {project.desc.map((line, i) => (
                <Typography key={i} variant="body2" color="text.secondary">
                  {line}
                </Typography>
              ))}
              <Divider />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
