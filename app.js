
// Import module
const express = require('express');
const pug = require('pug');

// Create express application
const app = express();

// Create a greeting endpoint
app.get('/', (req, res) => {
    
  // Define template
  const formatTemplate = `h1 Hello ${req.query.name}`;
  
  // Render View
  res.send(pug.render(formatTemplate));
  
})

// Start Application
app.listen(3000, () => console.log('app listening on 3000'));
