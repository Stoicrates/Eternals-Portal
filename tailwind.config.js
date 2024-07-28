/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    
    extend: {
      backgroundImage: {
        'instagram-gradient': 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        'fotobareng': "radial-gradient(transparent,black),url('/fotobareng.webp')",
      },

      fontFamily: {
        'primary': ['montserrat', 'system-ui'],
        'secondary': ['roboto', 'system-ui'],
      },

      dropShadow: {
        'whiteshadow': '4px 4px 6px rgba(200, 200, 200, 1)',
      },
      
      colors: {
        primary : {
          50 : "#e9ecf4",
          100 : "#bbc3dd",
          200 : "#9aa6cc",
          300 : "#6c7db5",
          400 : "#4f64a6",
          500 : "#233d90",
          600 : "#203883",
          700 : "#192b66",
          800 : "#13224f",
          900 : "#0f1a3c"
        },

        secondary : {
          50 : "#fff0e8",
          100 : "#ffd1b7",
          200 : "#ffbb95",
          300 : "#ff9c64",
          400 : "#ff8946",
          500 : "#ff6b18",
          600 : "#e86116",
          700 : "#b54c11",
          800 : "#8c3b0d",
          900 : "#6b2d0a"
        }
        
      }
    },
  },
  plugins: [],
}

