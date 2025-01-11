import { Colors } from './constants/Colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light: {
          primary: Colors.light.primary,
          secondary: Colors.light.secondary,
          background: Colors.light.background,
          tertiary: Colors.light.tertiary,
          text: Colors.light.text,
        },
        dark: {
          primary: Colors.dark.primary,
          secondary: Colors.dark.secondary,
          background: Colors.dark.background,
          tertiary: Colors.dark.tertiary,
          text: Colors.dark.text,
        }
      }
    },
  },
  plugins: [],
}