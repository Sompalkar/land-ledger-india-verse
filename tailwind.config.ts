
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Land Ledger custom colors
				land: {
					50: '#F0F7FA',
					100: '#DCF0F5',
					200: '#B3DEEA',
					300: '#81C8DB',
					400: '#4EAFC9',
					500: '#2E94AF',
					600: '#247692',
					700: '#1A5A74',
					800: '#144057',
					900: '#0E2939',
					950: '#081A25',
				},
				soil: {
					50: '#FAF6F0',
					100: '#F5EDE0',
					200: '#EBDBC0',
					300: '#DFC7A0',
					400: '#D0B07B',
					500: '#C09956',
					600: '#A17C3F',
					700: '#7C5F2F',
					800: '#574220',
					900: '#342710',
					950: '#1F1708',
				},
				saffron: {
					50: '#FFF8EE',
					100: '#FFEDD6',
					200: '#FFD9AC',
					300: '#FFC183',
					400: '#FFA54A',
					500: '#FF8412',
					600: '#E06400',
					700: '#A84B00',
					800: '#703200',
					900: '#381900',
					950: '#1C0C00',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)',
					},
					'50%': {
						transform: 'translateY(-10px)',
					},
				},
				'pulse-slow': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					}
				},
				'gradient-x': {
					'0%, 100%': {
						'background-position': '0% 50%',
					},
					'50%': {
						'background-position': '100% 50%',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'gradient-x': 'gradient-x 15s ease infinite',
			},
			backgroundImage: {
				'hero-pattern': "url('/hero-pattern.svg')",
				'gradient-land': 'linear-gradient(135deg, #1A5A74 0%, #0E2939 100%)',
				'gradient-soil': 'linear-gradient(135deg, #A17C3F 0%, #574220 100%)',
				'gradient-saffron': 'linear-gradient(135deg, #FF8412 0%, #A84B00 100%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
