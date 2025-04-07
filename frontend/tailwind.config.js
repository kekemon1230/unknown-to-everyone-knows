/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",  // ✅ HTML 파일 감지
    "./src/**/*.{js,ts,jsx,tsx,html}" // ✅ JS/TS/JSX/TSX 파일 감지
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
