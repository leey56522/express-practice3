const express = require('express');
const app = express();
const axios = require('axios');
const { FieldValueInstance } = require('twilio/lib/rest/autopilot/v1/assistant/fieldType/fieldValue');

app.get('/', (req, res) => {
    res.send('hi there! this is my landing page')
});

app.get('/cocktail', async (req, res) => {
    const cocktail = req.query.name;

    if(!cocktail || cocktail == '') {
        res.status(400).send('Please put a query value')
    } else if (!(/[a-zA-Z]/).test(cocktail)) {
        res.status(400).send('Please format your query in valid way')
    } else {
        // paste JSON on browser body
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
            .then(resp => res.send(resp.data.drinks))
            .catch(err => console.log(err))
    }
})

const textRouter = require('./routes/sendtext');
app.use('/sendtext', textRouter);

app.listen(3000, () => console.log('Listening to port 3000'));
module.exports = {app};
