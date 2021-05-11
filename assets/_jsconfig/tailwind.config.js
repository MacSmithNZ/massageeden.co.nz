const typography = require('@tailwindcss/typography');
const colors = require('tailwindcss/colors');

module.exports = {
  important: true, // See https://tailwindcss.com/docs/configuration#important
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: [
      './hugo_stats.json',
      './layouts/**/*.html',
    ],
    extractors: [
      {
        extractor: (content) => {
          let els = JSON.parse(content).htmlElements;
          return els.tags.concat(els.classes, els.ids);
        },
        extensions: ['json']
      },
    ],
    mode: 'all',
  },
  theme: {
    fontFamily: {
      'display': ['New Spirit', 'serif'],
      'body': ['Proxima Nova', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.yellow,
        neutral: colors.coolGray,
      }
    }
  },
  varients: {
    extend: {
      margin: ['first']
    }
  },
  plugins: [typography]
};