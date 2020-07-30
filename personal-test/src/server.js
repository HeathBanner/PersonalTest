require('dotenv').config({ path: '.env.local' });

const express = require('express');

const app = express();
const port = process.env.SERVER_PORT || 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

