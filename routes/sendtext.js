const express = require('express');
const router = express.Router();
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


router.get('/', async (req, res) => {
    res.send('This is where you send SMS via Twilio!')
})

router.get('/whatsapp', async (req, res) => {
    res.send('sending whatsapp message!')

    client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'Ahoy there!',
         to: 'whatsapp:+18327140110'
       })
      .then(message => console.log(message.sid));
})

module.exports = router;