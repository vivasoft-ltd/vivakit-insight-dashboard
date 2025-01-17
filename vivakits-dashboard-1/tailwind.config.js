/** @type {import('tailwindcss').Config} */
import { vivakitPreset } from "@vivakits/react-components";

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@vivakits/react-components/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  presets: [vivakitPreset],
  plugins: [],
};
