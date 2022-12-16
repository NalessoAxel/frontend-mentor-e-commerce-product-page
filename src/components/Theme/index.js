import { extendTheme } from '@chakra-ui/react';
import Button from './components/Button';

// ? https://chakra-ui.com/docs/theming/theme#typography
const fonts = {
    body: 'Kumbh Sans, sans-serif',
};

const fontSizes = {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
};

// ? https://chakra-ui.com/docs/theming/theme#breakpoints
const breakpoints = ['576px', '768px', '992px', '1200px', '1440px'];
breakpoints.base = '0px';
breakpoints.sm = '576px';
breakpoints.md = '768px';
breakpoints.lg = '992px';
breakpoints.xl = '1200px';
breakpoints.xxl = '1440px';

// ? https://chakra-ui.com/docs/theming/theme#colors
const colors = {
    white: 'hsl(0, 0%, 100%)',
    black: 'hsl(0, 0%, 0%)',

    primary: 'hsl(26, 100%, 55%)',
    secondary: ' hsl(25, 100%, 94%)',

    darkGrey: 'hsl(220, 13%, 13%)',
    Grey: 'hsl(219, 9%, 45%)',
    lightGrey: ' hsl(220, 14%, 75%)',
    extraLightGrey: 'hsl(223, 64%, 98%)',
};

// ? https://chakra-ui.com/docs/theming/theme#spacing
const space = {};

// ? https://chakra-ui.com/docs/features/color-mode
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
    fonts,
    breakpoints,
    colors,
    space,
    config,
    textStyles: {
        xxl: {},
        xl: {},
        lg: {},
        m: {},
        sm: {},
        xs: {},
        xxs: {},
    },
    styles: {
        global: (props) => ({}),
    },

    components: {
        Button,
    },
});

export default theme;
