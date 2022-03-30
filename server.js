const express = require("express");
// const { setThreads } = require("./public/linked-pages/reflect/resources/js/display-threads.js");
// const path = require('path');

const nodemailer = require("nodemailer");


// let path = require(path);

const app = express();
// const handlebars = require('express-handlebars');
// app.engine('handlebars', handlebars());
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'handlebars');


//seems like there should be a better way to do this
app.use(express.static('public'));
app.use(express.static('public/linked-pages'));


// app.use(express.static('public/linked-pages/reflect/resources'));
// app.use(express.static('public/linked-pages/reflect/resources/css'));
app.use(express.json());
//when I finally host all this which I might actually do sooner then I thought.
//I wanted to basically finish it first but I think I will so I can see how it
//works, maybe use one that links to your github so it auto updates as you push
// I think I'm going to put the reflect page on its own server like a proper website.
//the other ones are basic enough and aren't really website just basic layout for practice
// app.set('views', path.join(__dirname));


app.get('/', (req, res) => {
  console.log(__dirname);
    res.sendFile(__dirname + "/public/index.html");
});



app.post('/', (req, res) => {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req.body);

  const transporter = nodemailer.createTransport ({
    service: 'gmail',
    auth: {
      user: 'portfolliotemp@gmail.com',
      pass: 'fourothreepm10!'
    }
  })

  const mailOptions = {
    from: req.body.email,
    to: 'portfolliotemp@gmail.com',
    subject: `message from ${req.body.name}: ${req.body.email}`,
    text: req.body.message,

  }

  transporter.sendMail(mailOptions, (error, info)=> {
    if(error) {
      console.log(error);
      res.send('error');
    }else {
      console.log('email sent');
      res.send('success');
    }
  })
  console.log(mailOptions);
})

// port will be 5000 for testing
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

