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
        cancel:'rgb(var(--cancel) / <alpha-value>)',
        info:'rgb(var(--info) / <alpha-value>)',
        warning:'rgb(var(--warning) / <alpha-value>)',
        delete:'rgb(var(--delete) / <alpha-value>)',
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
        delete:'rgb(var(--delete) / <alpha-value>)',
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
        hazard: 'var(--hazard)',
        delete: 'var(--delete)'
      },

      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      fontFamily:{
        regular: ["Roboto Regular", "Helvetica", "Arial", "sans-serif"],
        thick: ["Roboto Medium", "Helvetica", "Arial", "sans-serif"],
        thicker: ["Roboto Bold", "Helvetica", "Arial", "sans-serif"]
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
        loading:"loading 0.5s ease-in infinite" ,

      }
    },
  },
  plugins: [],
};
