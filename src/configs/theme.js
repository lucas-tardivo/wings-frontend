import { createTheme, ThemeProvider } from '@mui/material/styles'
import { createGlobalStyle } from 'styled-components'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#BCD121',
      dark: '#BCD121',
      light: '#BCD121',
      contrastText: '#fff'
    },
    secondary: {
      main: '#BCD121',
      dark: '#6DC060',
      light: '#ffcc67',
      contrastText: '#fff'
    },
    neutral: {
      main: '#6B6B6B',
      dark: '#4A4A4A',
      light: '#A8A8A8',
      contrastText: '#fff'
    },
    black: {
      main: '#212121'
    },
    white: {
      main: '#fff'
    }
  },
  typography: {
    fontSize: 18
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      desktop: 1200
    }
  }
})

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        font-family: Roboto, sans-serif;
        list-style: none;
        scroll-behavior: smooth;
    }
    * a {
        color: #fff;
        text-decoration: none;
    }
    #root{
        margin: 0 auto;
    }
    .MuiIconButton-root:hover {
        background-color: #bcd121 !important;
        border-color: #bcd121 !important;
    }
    .scrollButton {
      transition: all 0.5s ease;
    }
    .activeScrollButton {
      visibility: visible;
    }
    .inactiveScrollButton {
      visibility: hidden;
		}
    .MuiDataGrid-columnSeparator{
      visibility: hidden ;
    }
    .MuiDataGrid-cell{
      border-top: 1px solid #105989 !important;
      border-bottom: none !important;

    }
    .MuiDataGrid-columnHeaders{
      border-bottom: none !important;
    }

    .MuiDataGrid-virtualScrollerRenderZone{
      :last-child{
        border-bottom: none ;
      }
    }

`

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default Theme
