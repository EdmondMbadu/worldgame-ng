/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
  ["./src/**/*.{html,ts}",

  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    extend: {
      colors:{
        worldmain:'#D7EEEF',
        worldsecond:'#865B4C'
      
      }
    },
  },
  plugins: [],
}
