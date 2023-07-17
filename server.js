const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "21 savage": {
    'age': 29,
    'birthName': "Sheyaa Bin Abraham-Joseph",
    'birthLocation': "London, England",
  },
  'chance the rapper': {
    'age': 29,
    'birthName': 'Chancelor Bennett',
    'birthLocation': 'Chicago, Illinois'
  },
  'lil wayne': {
    'age': 40,
    'birthName': 'Dewayne Carter',
    'birthLocation': 'New Orleans, Louisiana'
  },
  'drake':{
    'age': 35,
    'birthName': 'Aubrey Graham',
    'birthLocation': 'Toronto, Canada'
  },
  'jay-z':{
    'age': 53,
    'birthName': 'Shawn Carter',
    'birthLocation': 'Brooklyn, New York'
  },
  'unknown':{
    'age': 'unknown',
    'birthName': 'unknown',
    'birthLocation': 'unknown'
  }
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:rapperName", (request, response) => {
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    } else {
        response.json(rappers['unknown'])
    }
    // response.json(rappers);
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}! You better go catch it.`);
});
