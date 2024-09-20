const express = require('express'); 
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("Berch Ostler");
});

app.listen(process.env.PORT || port, () => { //checks for port and uses this
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});