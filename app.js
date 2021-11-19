var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com",
    pass: "emailpassword",
  },
});

var mailOptions = {
  from: "from@gmail.com",
  to: "to@hotmail.com",
  subject: "Sending Email using NodeJS",
  text: "Hi Sir Hammad, I am NodeJS Bot, sending you email, Happy Hacking!",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) throw err;
  else console.log("Email Has Been Sent" + info.response);
});
