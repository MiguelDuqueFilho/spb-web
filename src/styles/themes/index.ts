import {
  gray,
  blue,
  red,
  green,
  orange,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  orangeDark,
} from '@radix-ui/colors';

//! ----------  Color use case ---------
//* 1  - App background
//* 2  - Subtle background
//* 3  - UI element background
//* 4  - Hovered UI element background
//* 5  - Active / Selected UI element background
//* 6  - Subtle borders and separators
//* 7  - UI element border and focus rings
//* 8  - Hovered UI element border
//* 9  - Solid backgrounds
//* 10 - Hovered solid backgrounds
//* 11 - Low-contrast text
//* 12 - High-contrast text
//! --------------------------------------

// Create your light Theme
export const lightTheme = {
  name: 'light',
  colors: {
    ...gray,
    ...blue,
    ...red,
    ...green,
    ...orange,
  },

  white: '#FFF',
  black: '#000',

  'gray-100': '#E1E1E6',
  'gray-300': '#C4C4CC',
  'gray-400': '#8D8D99',
  'gray-450': '#363235',
  'gray-500': '#34343a',
  'gray-600': '#323238',
  'gray-700': '#29292E',
  'gray-800': '#202024',
  'gray-900': '#121214',

  'green-300': '#00B37E',
  'green-500': '#00875F',
  'green-700': '#015F43',

  'red-400': '#cc0000',
  'red-500': '#AB222E',
  'red-700': '#7A1921',

  'yellow-500': '#FBA94C',

  success: 'blue',
  error: '#7A1921',
  info: '#323238',
  warning: '#FBA94C',
  default: 'indigo',
  dark: '#fff',

  shadow: '#020202',
};

// Create your dark theme
export const darkTheme = {
  name: 'dark',
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...orangeDark,
  },

  white: '#FFF',
  black: '#000',

  'gray-100': '#E1E1E6',
  'gray-300': '#C4C4CC',
  'gray-400': '#8D8D99',
  'gray-450': '#363235',
  'gray-500': '#34343a',
  'gray-600': '#323238',
  'gray-700': '#29292E',
  'gray-800': '#202024',
  'gray-900': '#121214',

  'green-300': '#00B37E',
  'green-500': '#00875F',
  'green-700': '#015F43',

  'red-400': '#cc0000',
  'red-500': '#AB222E',
  'red-700': '#7A1921',

  'yellow-500': '#FBA94C',

  success: 'blue',
  error: '#7A1921',
  info: '#323238',
  warning: '#FBA94C',
  default: 'indigo',
  dark: '#fff',

  shadow: '#020202',
};
