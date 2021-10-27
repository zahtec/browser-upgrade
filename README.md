# Browser Upgrade

A simple Express middleware that notifies Internet Explorer users to upgrade to a modern-day browser.

## Usage

Install with `npm i express-browser-upgrade`, then use in your code as follows:

```js
/* JavaScript */
const express = require('express');
const browserUpgrade = require('express-browser-upgrade');

/* TypeScript */
import express from 'express';
import browserUpgrade from 'express-browser-upgrade';

/* Use as middleware */
const app = express();
app.use(browserUpgrade);
```

Any users on Internet Explorer will be shown a page telling them to upgrade to a modern browser.
