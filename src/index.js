const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const MongooseConnection = require('./utils/mongodb')
const middlewares = require('./middlewares/middlewares')
const routes = require('./routes/routes')

const app = express();
app.use(helmet());
app.use(morgan('combined'));
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
}));

MongooseConnection()

app.use(routes)
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});