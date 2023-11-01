/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{html,js}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      extend: {
        screens:{
          "other" : {'min': '340px', 'max':'1200px'},
        }
      },
    },
    plugins: [require('flowbite/plugin')],
  }