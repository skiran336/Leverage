const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Redirect root to main.html
app.get('/', (req, res) => {
  res.redirect('/main.html');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});