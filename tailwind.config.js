module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontSize: { '2xs': '.6250rem' },
            borderWidth: {
                18: '18px',
                30: '30px',
            },
            lineHeight: {
                6.5: '1.5625rem',
            },
            minWidth: {
                8: '100',
            },
            height: {
                15: '3.5rem',
            },
        },
    },
    plugins: [require('tailwindcss-textshadow')],
};
