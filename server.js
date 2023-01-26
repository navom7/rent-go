const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();


var corOptions = {
    origin: 'https://localhost:8080'
}



//routers
const router = require('./routes/routes.js')
app.use('/bookings', router);


//middlewares

// app.use(cors(corOptions));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

 app.use(bodyParser.json());

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

//testing api
app.post('/healthCheck', (req, res) => {
    res.json(req.body)
})



//port
const PORT = process.env.PORT || 8080


//server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})






