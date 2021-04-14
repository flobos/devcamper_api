const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
const connnectDB = require('./config/db')

const morgan = require('morgan');

dotenv.config({path: './config/config.env'})

connnectDB();

const app = express()


app.use(morgan('dev'))

app.use('/api/v1/bootcamps', bootcamps)
const PORT = process.env.PORT || 5000

const server = app.listen(PORT,
     console.log(`Server running ${process.env.NODE_ENV}`)
) ;

process.on('unhandledRejection', (err, promise) => {

  console.log(`Error ${err.message}`);

  server.close(() => process.exit(1));

});


     

