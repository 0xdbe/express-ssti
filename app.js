
// Import module
const express = require('express');
const pug = require('pug');

// Create express application
const app = express();

// Create a greeting endpoint
app.get('/', (req, res) => {
    
  // Define template with escaped data interpolation
  const formatTemplate = `h1 Hello #{name}`;
  
  // Render View
  res.send(pug.render(formatTemplate, { name: req.query.name }));
  
})

// Start Application
app.listen(3000, () => console.log('app listening on 3000'));
