/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                white: '#ffffff',

                base: {
                    DEFAULT: '#00B307', // Base color
                    light: '#84D187', // Base light background
                    hard: '#2C742F',    // Hard base color
                },
                orange: {
                    DEFAULT: '#FF8A00',
                },
                red: {
                    DEFAULT: '#EA4B48',
                },
                gray: {
                    100: '#F2F2F2',
                    200: '#E6E6E6',
                    300: '#CCCCCC',
                    400: '#B3B3B3',
                    500: '#999999',
                    600: '#808080',
                    700: '#666666',
                    800: '#4D4D4D',
                    900: '#1A1A1A',
                },
                greenGray: {
                    100: '#EDF2EE',
                    200: '#DAE6DA',
                    300: '#B4CCB4',
                    400: '#96B397',
                    500: '#7A997C',
                    600: '#618062',
                    700: '#406B42',
                    800: '#2B572E',
                    900: '#173B1A',
                    1000: '#002603',
                },
            },
        },
    },
    plugins: [
        require('daisyui')
    ],
    daisyui: {
        themes: ["light"],
    }
};
