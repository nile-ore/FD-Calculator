import { createTheme } from '@mui/material/styles';

// Common theme settings
const commonSettings = {
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          padding: '8px 24px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
};

// Light theme
export const lightTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'light',
    primary: {
      main: '#2E7D32', // Forest green
      light: '#4CAF50',
      dark: '#1B5E20',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6B8E23', // Olive green
      light: '#8BAF3F',
      dark: '#4A6318',
      contrastText: '#ffffff',
    },
    success: {
      main: '#2E7D32', // Forest green
      light: '#4CAF50',
      dark: '#1B5E20',
      contrastText: '#ffffff',
    },
    error: {
      main: '#D32F2F', // Red for losses
      light: '#EF5350',
      dark: '#C62828',
      contrastText: '#ffffff',
    },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#4A4A4A',
    },
    profit: {
      main: '#2E7D32', // Green for profit
      light: '#4CAF50',
      dark: '#1B5E20',
    },
    loss: {
      main: '#D32F2F', // Red for loss
      light: '#EF5350',
      dark: '#C62828',
    },
  },
});

// Dark theme
export const darkTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'dark',
    primary: {
      main: '#757575', // Grey
      light: '#9E9E9E',
      dark: '#616161',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#424242', // Dark grey
      light: '#616161',
      dark: '#212121',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#4CAF50', // Keep green for success states
      light: '#81C784',
      dark: '#388E3C',
      contrastText: '#000000',
    },
    error: {
      main: '#EF5350', // Keep red for error states
      light: '#E57373',
      dark: '#E53935',
      contrastText: '#000000',
    },
    background: {
      default: '#121212', // Dark black
      paper: '#1E1E1E', // Slightly lighter black
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
    profit: {
      main: '#4CAF50', // Keep green for profit
      light: '#81C784',
      dark: '#388E3C',
    },
    loss: {
      main: '#EF5350', // Keep red for loss
      light: '#E57373',
      dark: '#E53935',
    },
    action: {
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
  },
  components: {
    ...commonSettings.components,
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#1E1E1E',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E1E',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiFilledInput-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            },
            '&.Mui-focused': {
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
            },
          },
        },
      },
    },
  },
}); 