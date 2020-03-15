const { Fragment, createElement } = require('react');
const { renderToString } = require('react-dom/server');
const { Grid, Default, Ring } = require('react-spinner');
const express = require('express');

const PORT = 3000;
const app = express();

app.get('*', (req, res) => {
  const container = createElement(Fragment, null, createElement(Grid), createElement(Default), createElement(Ring));
  const html = renderToString(container);
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
