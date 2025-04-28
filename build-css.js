// build-css.js (at project root)
const fs = require('fs');
const postcss = require('postcss');
const tailwindPlugin = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');

const input  = 'src/input.css';
const output = 'dist/output.css';

const css = fs.readFileSync(input, 'utf8');
postcss([ tailwindPlugin, autoprefixer ])
  .process(css, { from: input, to: output })
  .then(result => {
    fs.mkdirSync('dist', { recursive: true });
    fs.writeFileSync(output, result.css);
    console.log(`✅ Built CSS to ${output}`);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
