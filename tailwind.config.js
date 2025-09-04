/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","/.RSSB.html", "./hello.html","./landing_page.html","./LGX.html","./Goldsmith.html",
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

