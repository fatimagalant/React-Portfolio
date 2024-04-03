/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   extend: {
      // backgroundImage:{
      //   'bg-dark-1': "url('https://i.postimg.cc/JnJHwfds/bg1-dark.png')",
      //   'bg-dark-2': "url('https://i.postimg.cc/Pq0vRXKG/bg2-dark.png')",  
      //   'bg-light-1': "url('https://i.postimg.cc/YSvmRG6f/bg1.png')",
      //   'bg-light-2': "url('https://i.postimg.cc/4xL9pb9x/bg2.png')"
      // },
      colors:{
        'bg-color-dark':'#0e0e11'
      }
    },
      plugins: [],
}
}

