/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./hello.html","./landing_page.html","./LGX.html"
    ,"./src**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      boxShadow:{
        'eva':"0 0 15px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
}

