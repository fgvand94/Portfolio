const express = require("express");

const nodemailer = require("nodemailer");
/*const multiparty = require("multiparty");
const { getMaxListeners } = require("process");
require("dotenv").config();
*/
// instantiate an express app
const app = express();

//make the contact page the first page on the app
// the app.use is what actually makes everything from the webpage show up in your server
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "public/index.html")
});
/*I'm thinking maybe this app.get res.sendFile thing is how links transfer you to differnt
webpages or parts on the site without showing a new .html at the end of the page. you just*/

/*actually commenting the above out still shows the webpage it's the app.use doing that
I'm going to reload the video and see what he said it was for again after I get the email
working.*/


app.post('/', (req, res) => {
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
    //subject
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

//port will be 5000 for testing
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
/*
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", //replace with your email provider
    port: 587,
    auth: {
      user: process.env.portfolliotemp@gmail.com,
      pass: process.env.fourothreepm10!,
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  app.post("/send", (req, res) => {
  //1.
  let form = new multiparty.Form();
  let data = {};
  form.parse(req, function (err, fields) {
    console.log(fields);
    Object.keys(fields).forEach(function (property) {
      data[property] = fields[property].toString();
    });

    //2. You can configure the object however you want
    const mail = {
      from: data.name,
      to: process.env.EMAIL,
      subject: data.subject,
      text: `${data.name-input} <${data.email-input}> \n${data.message-input}`,
    };

    //3.
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send("Something went wrong.");
      } else {
        res.status(200).send("Email successfully sent to recipient!");
      }
    });
  });
});*/