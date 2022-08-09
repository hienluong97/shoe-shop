module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontSize: {
                '2xs': '.6250rem',
                '3xs': '.50rem',
            },
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
        },
    },
    plugins: [require('tailwindcss-textshadow')],
};
