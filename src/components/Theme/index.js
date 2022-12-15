import { extendTheme } from '@chakra-ui/react';

// ? https://chakra-ui.com/docs/theming/theme#typography
const fonts = {};

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
  body: '',
  primary: '',
  secondary: '',
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

  components: {},
});

export default theme;
