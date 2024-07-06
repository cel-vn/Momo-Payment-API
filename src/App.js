import './Assets/css/App.css';

const express = require('express');
const path = require('path');
const homeRoutes = require('./components/home/homeRoutes');

const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/', homeRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


export default App;
