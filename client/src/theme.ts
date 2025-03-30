import { createTheme, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColor {
    accent?: string; 
    red?: string; 
    grey?: string;
    greyDark?: string;
    greyLight?: string;
  }

  interface SimplePaletteColorOptions {
    accent?: string; 
    red?: string; 
    grey?: string;
    greyDark?: string;
    greyLight?: string;
  }

  interface Palette {
    lmsprimary: PaletteColor; 
    tertiary: PaletteColor; 
  }

  interface PaletteOptions {
    lmsprimary?: SimplePaletteColorOptions; 
    tertiary?: SimplePaletteColorOptions; 
  }
}

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#A04AD4',
    },
    lmsprimary: {
      main: "#96FF43", 
      greyDark:"#252525",
      greyLight:"#464646",
    },
    secondary: {
      main: "#691B99",
    },
    tertiary: {
      main: "#CD7BFF",
    },
    text: {
      primary: '#201f1e',
      secondary: "#6A6464",
    },
  },
  typography: {
    fontFamily: 'Red Hat Display',
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '1.25rem',
    },
  },
});

export default theme;
