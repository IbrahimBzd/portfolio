// const purgecss = require("@fullhuman/postcss-purgecss");

const tailwindcss = require('tailwindcss');
const autoPrefixer = require('autoprefixer');
const postCSSImport = require('postcss-import');
// const purgecss = require("@fullhuman/postcss-purgecss");
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postCSSImport,
    autoPrefixer,
    postcssPresetEnv({
      /* use stage 3 features + css nesting rules */
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    }),
    tailwindcss,
    // ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
    // ...conditionalPlugins,
  ],
};

// const conditionalPlugins = [];
// if (process.env.NODE_ENV === "production") {
//   conditionalPlugins.push(
//     purgecss({
//       content: ["./app/**/*.html", "./app/**/*.js"],
//       defaultExtractor: content => {
//         // Capture as liberally as possible, including things like `h-(screen-1.5)`
//         const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
//
//         // Capture classes within other delimiters like .block(class="w-1/2") in Pug
//         const innerMatches =
//           content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
//
//         return broadMatches.concat(innerMatches);
//       },
//     }),
//   );
// }
