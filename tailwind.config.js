const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        screens: {
            xs: '500px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1440px',
            '3xl': '1780px',
            '4xl': '2160px' // only need to control product grid mode in ultra 4k device
        },
        extend: {
            blur: {
                dashboardBackground: '105px'
            },
            colors: {
                brand: 'rgb(var(--color-brand) / <alpha-value>)',
                body: '#ffffff',
                dark: '#1c1917',
                // dark: '#0D1321',
                'light-dark': '#171e2e',
                darkGrey: '#333333',
                grey: '#4F4F4F',
                softBlue: '#9AA8BD'
            },
            spacing: {
                13: '3.375rem'
            },
            margin: {
                '1/2': '50%'
            },
            padding: {
                full: '100%'
            },
            width: {
                'calc-320': 'calc(100% - 320px)',
                'calc-358': 'calc(100% - 358px)'
            },
            fontFamily: {
                righteous: ['Righteous', 'cursive'],
                body: ['Roboto', 'Open Sans', 'monospace']
            },
            fontSize: {
                '13px': ['13px', '18px']
            },
            borderWidth: {
                3: '3px'
            },
            boxShadow: {
                main: '0px 6px 18px rgba(0, 0, 0, 0.04)',
                light: '0px 4px 4px rgba(0, 0, 0, 0.08)',
                large: '0px 8px 16px rgba(17, 24, 39, 0.1)',
                card: '0px 2px 6px rgba(0, 0, 0, 0.06)',
                transaction: '0px 8px 16px rgba(17, 24, 39, 0.06)',
                button: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)'
            },
            dropShadow: {
                main: '0px 4px 8px rgba(0, 0, 0, 0.08)'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
            },
            animation: {
                blink: 'blink 1.4s infinite both;',
                'move-up': 'moveUp 500ms infinite alternate',
                'scale-up': 'scaleUp 500ms infinite alternate',
                'drip-expand': 'expand 500ms ease-in forwards',
                'drip-expand-large': 'expand-large 600ms ease-in forwards',
                'move-up-small': 'moveUpSmall 500ms infinite alternate'
            },
            keyframes: {
                blink: {
                    '0%': { opacity: 0.2 },
                    '20%': { opacity: 1 },
                    '100%': { opacity: 0.2 }
                },
                expand: {
                    '0%': {
                        opacity: 0,
                        transform: 'scale(1)'
                    },
                    '30%': {
                        opacity: 1
                    },
                    '80%': {
                        opacity: 0.5
                    },
                    '100%': {
                        transform: 'scale(30)',
                        opacity: 0
                    }
                },
                'expand-large': {
                    '0%': {
                        opacity: 0,
                        transform: 'scale(1)'
                    },
                    '30%': {
                        opacity: 1
                    },
                    '80%': {
                        opacity: 0.5
                    },
                    '100%': {
                        transform: 'scale(96)',
                        opacity: 0
                    }
                },
                moveUp: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-20px)' }
                },
                moveUpSmall: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-10px)' }
                },
                scaleUp: {
                    '0%': { transform: 'scale(0)' },
                    '100%': { transform: 'scale(1)' }
                }
            }
        }
    },
    variants: {
        extends: {
            scrollbar: ['rounded']
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('tailwind-scrollbar')({ nocompatible: true }),
        ({ addComponents }) => {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen xs': {
                        maxWidth: '500px'
                    },
                    '@screen sm': {
                        maxWidth: '640px'
                    },
                    '@screen md': {
                        maxWidth: '800px'
                    },
                    '@screen lg': {
                        maxWidth: '800px'
                        // maxWidth: '1176px'
                    },
                    '@screen xl': {
                        maxWidth: '800px'
                        // maxWidth: '1310px'
                    },
                    '@screen 2xl': {
                        maxWidth: '800px'
                        // maxWidth: '1352px'
                    },
                    '@screen 3xl': {
                        maxWidth: '800px'
                        // maxWidth: '1536px'
                    },
                    '@screen 4xl': {
                        maxWidth: '800px'
                        // maxWidth: '1536px'
                    }
                }
            });
        }
    ]
};
