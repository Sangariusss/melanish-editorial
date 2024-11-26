/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{html,js}',
    ],
    theme: {
        extend: {
            fontFamily: {
                dmMono: ['DM Mono', 'monospace'],
                nympha: ['Nympha Trial', 'serif'],
                sfPro: ['SF Pro Display', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
