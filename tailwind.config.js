/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['pages/**/*.tsx', 'lib/components/**/*.tsx'],
    theme: {
        fontFamily: {
            'hover': ['Space Mono', 'monospace'],
        },
        extend: {
            keyframes: {
                'wrap-spin': {
                    '0%': { transform: 'rotate(0deg)' },
                    '25%': { transform: 'scale(1 1.1)' },
                    '50%': { transform: 'rotate(180deg)' },
                    '75%': { transform: 'scale(1.1 1)' },
                    '100%': { transform: 'rotate(360deg)' }
                },
                'background-pan': {
                    '0%': { backgroundPosition: '0% center' },
                    '100%': { backgroundPosition: '-200% center' }
                }
            },
            animation: {
                'wrap-spin': 'wrap-spin 10s linear infinite',
                'bg-gradient': 'background-pan 3s linear infinite'
            }
        }
    },
    plugins: [],
    safelist: []
};
