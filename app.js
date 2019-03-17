const express = require('express');

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => res.send('Hello Wolrd!'));
app.get('/docker', (req, res) => res.send('Hello from docker!'));

app.listen(port, () => console.log(`Example app is running on http://localhost:${port} !`));
