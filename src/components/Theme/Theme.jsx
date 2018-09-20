import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  config: {
    drawerWidth: 240
  },
  palette: {
    primary: blue
  },
  typography: {
    fontFamily: [
      '"Roboto"',
      '"Helvetica"',
      '"Arial"',
      'sans-serif',
      '"Microsoft JhengHei"'
    ].join(',')
  },
  // override
  overrides: {
    MuiTableCell: {
      head: {
        fontSize: '0.85rem'
      },
      body: {
        fontSize: '0.9rem'
      }
    },
    MuiTypography: {
      subheading: {
        fontWeight: 500
      }
    }
  },
  // customer style
  link: {
    textDecoration: 'none',
    color: blue[600],
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
});

// for develop
if (process.env.NODE_ENV !== 'production') console.log(theme);

const Theme = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired
};

export default Theme;
