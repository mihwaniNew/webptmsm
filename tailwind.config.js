module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'lion': '#AA8453',
        'lion-dark': '#d34d0d',
        'eerie-black': '#222222',
        'coyote': '#80633E',
        'platinum': '#E0E0E0',
        'nero': '#f48652',
        'nero-dark': "#1E1E1E",
        'light-gray': "#e9e9e9",
        'oren': '#f16522',
        'ijo' : '#8bc53f',
        'ijo-dark' : '#70a130',
        'merah' : "#ec1c24"
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'gilda': ['Gilda Display', 'serif'],
        'mont': ['Montserrat', 'sans-serif'],
        'barlow-cond': ['Barlow Condensed', 'sans-serif']
      },
      backgroundImage: {
        'header-image': "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('../assets/images/header-image.jpeg')",
        'banner-image': "linear-gradient(0deg, rgba(16, 16, 16, 0.5), rgba(16, 16, 16, 0.5)), url('../assets/images/banner-image1.png')",
        'booking-image': "linear-gradient(rgba(16, 16, 16, 0.5), rgba(16, 16, 16, 0.5)), url('../assets/images/banner-image2.png')"
      },
      gridTemplateColumns: {
        'footer': '3fr repeat(3, 2fr)'
      }
    },
  },
  plugins: [],
}

