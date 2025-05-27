import * as React from 'react';
import {
    Grid,
    Link,
    Stack,
    Typography,
  } from '@mui/joy';


  const myProjects = [
    {
        title: "Multi-Threaded HTTP Server",
        link: "",
        desc: ['Developed a HTTP server from C that was able to process GET and PUT requests synchronously by using threads',
            'Allowed the server to accept multiple connections within a port by creating worker threads'
        ],
    },
    {
        title: "Javascript Calendar",
        link: "https://github.com/bellachen00/Javascript-Calendar",
        desc: ['Created a program that has a function of a calendar visually which allows us to move between the previous and next months',
            'Highlighted the current day by mapping its value to an identification labeled ”today”'
        ],
    },
    {
        title: "Weather App",
        link: "https://github.com/bellachen00/Weather-App",
        desc: ['A weather application that displays the temperatures of any city per hour basis', 
            'Implemented an input div in order to enter the city of choice'
        ],
    },
  ];


export default function Projects() {
  return (
    <Stack direction={'column'}>
      <Typography>
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
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
