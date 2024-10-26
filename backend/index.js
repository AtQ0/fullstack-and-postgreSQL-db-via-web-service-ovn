const dotenv = require('dotenv'),
    express = require('express'),
    { Client } = require('pg');

const app = express()


dotenv.config();


//Connect to postgres db via PGURI in .env
const client = new Client({
    connectionString: process.env.PGURI,
})

client.connect();


app.get('/', async (request, response) => {
    const { rows } = await client.query(
        //'SELECT * FROM cities WHERE name = $1',
        //['Stockholm']
        'SELECT * FROM cities WHERE population > $1',
        ['400000']


    )
    response.send(rows);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Redo på http://localhost:${port}`);
});
