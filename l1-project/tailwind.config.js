/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode (add 'dark' class to html/body)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom spacing scale - centralized values from your existing styles
      spacing: {
        '15': '3.75rem',   // 60px - commonly used height/vertical spacing
        '30': '7.5rem',    // 120px - commonly used horizontal padding
        '50': '12.5rem',   // 200px - button width
        '60': '15rem',     // 240px - custom spacing
        '100': '25rem',    // 400px - input width
        '108': '27rem',    // 432px - carousel height
        '125': '31.25rem', // 500px - card height
        '128': '32rem',    // 512px - card width
        '18': '4.5rem',    // 72px - custom spacing
      },
      // Shadow configurations - centralized shadows
      boxShadow: {
        'popup': '0 2px 10px rgba(0, 0, 0, 0.2)',
        'popup-dark': '0 2px 10px rgba(0, 0, 0, 0.5)',
        'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'card-dark': '0 4px 6px rgba(0, 0, 0, 0.3)',
      },
      // Z-index scale - centralized z-index values
      zIndex: {
        '1000': '1000', // Popup overlay
        '40': '40',     // Mobile overlay
        '50': '50',     // Sidebar
        '30': '30',     // Mobile toggle button
      },
      // Scale utilities for hover effects
      scale: {
        '102': '1.02', // Slight scale for hover effects
      },
    },
  },
  plugins: [],
}

