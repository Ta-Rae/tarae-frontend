/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'pre': ['Pretendard']
      },
      colors: {
        'button-enable': '#242933',
        'button-disabled': '#EAEAEA',
        'text-disabled': '#949494',
        'text-color': '#2C2C2C',
        'kakao-color': '#FFE200',
        'input-color': '#BEBEBE'
      }
    },
  },
  plugins: [],
}
