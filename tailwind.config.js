/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/construction-design.html',
    './pages/contact.html',
    './pages/egypt.html',
    './pages/experts.html',
    './pages/index.html',
    './pages/layout-design.html',
    './pages/links.html',
    './pages/neom.html',
    './pages/ocs-internal.html',
    './pages/ocs.html',
    './pages/productivity.html',
    './pages/romania.html',
    './pages/services.html',
    './pages/singapore.html',
    './pages/structural-engineering.html',
    './pages/united-states.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['siemensSans'],
      }
    },
    colors: {
      'lightBlue': '#002949',
      'blue': '#00193c',
      'darkBlue': '#000028',
      'white': '#ffffff',
      'cyan': '#00ffb9',
      'darkCyan': '#00cccc',
      'gray': '#B2BEB5',

    }
  },
  plugins: [
    // ...
    // require('@tailwindcss/aspect-ratio'),
  ],
}

