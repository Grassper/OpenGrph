const settingsScreens = require('./tailwind/tailwind.settings.screens');
const settingsFontSizes = require('./tailwind/tailwind.settings.fontSizes');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: settingsScreens,
      fontSize: settingsFontSizes,
      fontFamily: {
        primary: ['Montserrat Alternates', 'sans-serif'],
        secondary: ['Montserrat Alternates', 'sans-serif'],
      },
      colors: {
        lightBackground: 'var(--color-lightBackground)',
        darkBackground: 'var(--color-darkBackground)',
        primary: 'var(--color-primary)',
      },
    },
  },
  plugins: [],
};
