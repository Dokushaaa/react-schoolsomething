import { info } from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
   
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        content: 'rgb(var(--content) / <alpha-value>)',
        line:'rgb(var(--line) / <alpha-value>)',
        alert:'rgb(var(--alert) / <alpha-value>)',
        disable:'rgb(var(--disable) / <alpha-value>)',
        info:'rgb(var(--info) / <alpha-value>)',
        warning:'rgb(var(--warning) / <alpha-value>)',
        hazard:'rgb(var(--hazard) / <alpha-value>)',
      },

      backgroundColor: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        content: 'rgb(var(--content) / <alpha-value>)',
        line:'rgb(var(--line) / <alpha-value>)',
        alert:'rgb(var(--alert) / <alpha-value>)',
        disable:'rgb(var(--disable) / <alpha-value>)',
        warning:'rgb(var(--warning) / <alpha-value>)',
        hazard:'rgb(var(--hazard) / <alpha-value>)',
      },

      fill: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',        
        content: 'var(--content)',
        line:'var(--line)',
        alert: 'var(--alert)',
        disable: 'var(--disable)',
        info: 'var(--info)',
        warning: 'var(--warning)',
        hazard: 'var(--hazard)'
      },

      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      fontFamily:{
        fontRegular: "Roboto",
        fontBase: "Roboto-medium",
        fontHeavy: "Roboto-bold",
      },
      keyframe:{
        rotate:{
          "100%":{transform:"rotate-360"}
        },
        loading: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
      },
      animation:{
        rotate:"rotate-right 2s linear infinite" ,
        loading:"loading 2s ease-in infinite" ,

      }
    },
  },
  plugins: [],
};
