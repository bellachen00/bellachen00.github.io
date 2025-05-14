import * as React from 'react';
import { Link, List, ListItem, ListItemDecorator, Stack, Typography } from '@mui/joy';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import WebRoundedIcon from '@mui/icons-material/WebRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const contact = [
    {
        link: (
            <Link href="mailto:chenbella1107@gmail.com">chenbella1107@gmail.com</Link>
        ),
        icon: <EmailRoundedIcon />
    },
    {
        link: (
            <Link href="https://www.linkedin.com/in/bellachenn/">My LinkedIn Profile</Link>
        ),
        icon: <LinkedInIcon/>
    }
]
export default function Contact() {
    return (
        <Stack direction="column" p={4} spacing={2}>
          <Typography level="h5" gutterBottom sx={{ alignSelf: 'flex-start'}}> 
            Contact Me
          </Typography>
          <List sx={{ p: 0 }}>
            {contact.map(({ link, icon }) => (
              <ListItem sx={{ p: 0 }}>
                <ListItemDecorator>{icon}</ListItemDecorator>
                <Typography>{link}</Typography>
              </ListItem>
            ))}
          </List>
        </Stack>
    );
}