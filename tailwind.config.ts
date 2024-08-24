import daisyui from "daisyui"
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'normal': '0 0 15px rgba(70, 70, 70, 1)',
        'hover': '0 0 20px rgba(100, 100, 100, 1)'
      }
    },
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: ["light", "dracula"],
  },
}
export default config