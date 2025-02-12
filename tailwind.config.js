import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
const colors = ['yellow', 'violet', 'green','blue','red','gray','white','pink'];

const safelist = [
    ...colors.flatMap(color => [
        `hover:text-${color}-600`,
        `hover:bg-${color}-200`,
        `hover:outline-${color}-600`,
        `hover:outline-${color}-500`,
        `bg-${color}-50`,
        `hover:bg-${color}-700`,
        `text-${color}-50`,
        `bg-${color}-700`,
        `bg-${color}-400`,
        `bg-${color}-600`,
        `bg-${color}-200`,
        `bg-${color}-100`,
        `hover:bg-${color}-600`,
        `text-${color}`,
        `text-${color}-700`,
        `hover:text-${color}-50`,
        'flex-col',
        'flex-row',
    ]),

];
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],
    safelist,

    theme: {
        extend: {
            fontFamily: {
                sans: ['Garamond', 'Copperplate', ...defaultTheme.fontFamily.sans],
            },
        },
        screens: {
        'sm': '900px',
        'md': '980px',
        'lg': '1024px',
        'xl': '1280px',
        },
    },

    plugins: [forms],
};
