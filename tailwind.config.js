/** @type {import('tailwindcss').Config} */
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/flowbite-react/**/*.js",
		"./pages/**/*.{ts,tsx}",
		"./public/**/*.html",
	],
	theme: {
		extend: {
			colors: {
				green: "#04ddb2",
				grey: "#333",
				lightGrey: "#767676",
				greyBG: "#f2f3f5",
				twitter: "#06c1ff",
				facebook: "#265cff",
				linkedin: "#103090",
			},
			keyframes: {
				click: {
					"0%, 100%": { transform: "scale(1.03)" },
					"50%": { transform: "scale(0.98)" },
				},
				float: {
					"0%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
					"100%": { transform: "translateY(0)" },
				},
				fade: {
					"0%, 100%": { opacity: 1 },
					"25%, 75%": { opacity: 0 },
				},
			},
			animation: {
				click: "click 200ms ease-in-out",
				float: "float 1.6s ease-out infinite",
				fade: "fade 0.6s ease",
			},
			backgroundImage: {
				checklist: "url('/img/checklist.svg')",
			},
		},
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			900: "900px",
			// => @media (min-width: 900px) { ... }

			952: "952px",
			// => @media (min-width: 952px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1200px",
			// => @media (min-width: 1280px) { ... }

			xxl: "1700px",
			// => @media (min-width: 1280px) { ... }
		},
	},
	plugins: [require("flowbite/plugin")],
};
