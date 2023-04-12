const express = require('express');

const app = express();

const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const path = require('path');
const bodyParser = require('body-parser');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const docsRoute = require('./routes/docs');
const homepageRoute = require('./routes/homepage');
const aboutRoute = require('./routes/about');
const blogRoute = require('./routes/blog');
const testimonialsRoute = require('./routes/testimonials');
const roleRoute = require('./routes/role');

dotenv.config();

// Norgan
app.use(morgan('tiny'));

// Connect to DB
connectDB();

const port = process.env.PORT || 8000;

// Middleware
// app.use(express.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// app.use(cors());
// Route middlewares
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/v1', docsRoute);
app.use('/api/homepage', homepageRoute);
app.use('/api/about', aboutRoute);
app.use('/api/testimonials', testimonialsRoute);
app.use('/api/blog', blogRoute);
app.use('/api/role', roleRoute);
// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app.listen(port, () => console.log('Server up and running'));
