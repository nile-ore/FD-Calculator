import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {grey,cyan,green} from '@mui/material/colors';
import Page from './page';
import Footer from './footer';


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function NavBar() {
    
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

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
                    justifyContent: 'space-between',
                    transition: 'all 0.25s ease-in-out',
                    bgcolor: 'background.paper',
                  }}
            
            >
             
                <Typography variant="h6" color="inherit" component="div">
                    FD Calculator
                </Typography>


                <IconButton sx={{ ml: 1, borderRadius: 2}} onClick={colorMode.toggleColorMode} color="inherit">
                

                    <Typography variant="h6" color="inherit" component="div">
                    {theme.palette.mode} mode &nbsp;
                    </Typography>

                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>

            </Toolbar>
            
        </AppBar >
    );
}

export default function ToggleColorMode() {
    const [mode, setMode] = React.useState('dark');

    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    const themeNAV = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode,
            ...(mode === 'light'
        ? {
          // palette values for light mode
          primary: cyan,
          divider: cyan[100],
          background: {
            default: cyan[50],
            paper: cyan[50],
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: grey,
          divider: grey[800],
          background: {
            default: grey[800],
            paper: grey[800],
          },
          text: {
            primary: '#fff',
            secondary: grey[200],
          },
        }),
          },
        }),
      [mode],
    );

    const themePage = React.useMemo(
        () =>
          createTheme({
            palette: {
              mode,
              ...(mode === 'light'
          ? {
            // palette values for light mode
            primary: green,
            divider: green[900],
            
            text: {
              primary: grey[800],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: green,
            divider: green[100],
            background: {
              default: grey[900],
              paper: grey[900],
            },
            text: {
              primary: '#fff',
              secondary: grey[100],
            },
          }),
            },
          }),
        [mode],
      );
  
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={themeNAV}>    
            <NavBar />
        </ThemeProvider>

        <ThemeProvider theme={themePage}>
            <Page />
        </ThemeProvider>

        <ThemeProvider theme={themeNAV}>
            <Footer />
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }
  

