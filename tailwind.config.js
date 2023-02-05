/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tailwind/*{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'pop':['poppins']
      },
      letterSpacing:{
        'common':['0.35rem'],
        'another':['0.5rem']
      },
      lineHeight:{
        'f':['64px']
      }
    },
  },
  plugins: [],
}
