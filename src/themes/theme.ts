// theme.ts
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  mode: 'light',
  colors: {
    primary: '#343a40',
    background: '#f8f9fa',
    footer: {
      backgroundColor: '#eff2f5',
      color: '#343a40',
      transition: 'background-color 2s ease'
    },
    header: {
      backgroundColor: '#eff2f5',
      color: '#343a40',
      transition: 'background-color 2s ease'
    },
    anchor: {
      color: '#2f80ff'
    },
    divider: {
      borderTop: '2px solid #343a40'
    },
    sections: {
      welcome: {
        backgroundColor: '#f8f9fa',
        color: '#343a40',
        transition: 'background-color 2s ease'
      },
      work: {
        backgroundColor: '#f8f9fa',
        color: '#343a40',
        transition: 'background-color 2s ease'
      },
      projects: {
        backgroundColor: '#f8f9fa',
        color: '#343a40'
      },
      contact: {
        backgroundColor: '#f8f9fa',
        color: '#343a40'
      }
    }
  }
};

export const darkTheme: DefaultTheme = {
  mode: 'dark',
  colors: {
    primary: '#f8f9fa',
    background: '#343a40',
    footer: {
      backgroundColor: '#1c1c1e',
      color: '#f8f9fa',
      transition: 'background-color 2s ease'
    },
    header: {
      backgroundColor: '#1c1c1e',
      color: '#bdbfc1',
      transition: 'background-color 2s ease'
    },
    anchor: {
      color: '#2f80ff'
    },
    divider: {
      borderTop: '2px solid #343a40'
    },
    sections: {
      welcome: {
        backgroundColor: '#343a40',
        color: '#f8f9fa',
        transition: 'background-color 2s ease',
      },
      work: {
        backgroundColor: '#28282b',
        color: '#f8f9fa'
      },
      projects: {
        backgroundColor: '#343a40',
        color: '#f8f9fa'
      },
      contact: {
        backgroundColor: '#28282b',
        color: '#f8f9fa'
      }
    }
  }
};
