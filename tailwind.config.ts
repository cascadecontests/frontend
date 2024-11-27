import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			white: {
  				'50': '#ffffff',
  				'100': '#f7f9fb',
  				'200': '#f0f4f8',
  				'300': '#a7aab9',
  				'400': '#7b7f95',
  				'500': '#60637a',
  				'600': '#525468',
  				'700': '#383941',
  				'800': '#18181b',
  				'900': '#121214',
  				'950': '#09090b'
  			},
  			blue: {
  				'50': '#edf9ff',
  				'100': '#d6efff',
  				'200': '#b5e5ff',
  				'300': '#83d7ff',
  				'400': '#48beff',
  				'500': '#1e9dff',
  				'600': '#067dff',
  				'700': '#0069ff',
  				'800': '#0850c5',
  				'900': '#0d479b',
  				'950': '#0e2c5d'
  			},
  			red: {
  				'50': '#fff2f1',
  				'100': '#ffe2df',
  				'200': '#ffcac5',
  				'300': '#ffa59d',
  				'400': '#ff7164',
  				'500': '#ff3220',
  				'600': '#ed2615',
  				'700': '#c81c0d',
  				'800': '#a51b0f',
  				'900': '#881d14',
  				'950': '#4b0a04'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
