const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/sweety', (req, res) => res.send('Hetaf I love you'))


app.listen(process.env.PORT || 3001, () => console.log('Example app listening on port 3001!'))
