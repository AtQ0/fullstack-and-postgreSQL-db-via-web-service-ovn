const express = require('express'),
    path = require('path')

const app = express()

//Backend
app.get('/api', (_request, response) => {
    response.send({ hello: 'World' })
})

//Frontend
//Tell express to serve the frontend that's in the dist folder
app.use(express.static(path.join(path.resolve(), 'dist')))

app.listen(3000, () => {
    console.log('Redo på http://localhost:3000/')
})
