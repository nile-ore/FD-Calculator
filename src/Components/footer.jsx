import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function Footer() {
    
    return (
        <AppBar position = "static" elevation={0}

        sx={{
            width: '100%',
            transition: 'all 0.25s ease-in-out',
            bgcolor: 'background.default',
            color: 'text.primary',
            // p: 1,
          }}

        >

            <Toolbar variant="dense"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    transition: 'all 0.25s ease-in-out',
                    bgcolor: 'background.paper',
                  }}
            
            >
             
                <Typography variant="h6" color="inherit" component="div">
                    Made with <FavoriteIcon sx={{ color: '#c62828' }} ></FavoriteIcon> in India
                </Typography>


            </Toolbar>
            
        </AppBar >
    );
}

export default Footer;