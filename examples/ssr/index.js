const { createElement } = require('react');
const { renderToString } = require('react-dom/server');
const { Grid } = require('react-spinner');
const express = require('express');

const PORT = 3000;
const app = express();

app.get('*', (req, res) => {
  const el = createElement(Grid);
  const html = renderToString(el);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>SSR Spinner Example</title>
    </head>
    <body>
    ${html}
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
