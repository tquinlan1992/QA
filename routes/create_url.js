var req = require('request');
var urls = require('../models/urls');
var nodemailer = require('nodemailer');





// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Mandrill',
    auth: {
        user: 'tquinlan1992@gmail.com',
        pass: 'FfnO-Sxq1Aj6Mi5ePfMWjw'
    }
});

// Index page: home page, or login
module.exports = function(request, response) {
   
var url = request.body.url;
var email = request.body.email;
var visitor = request.body.visitor;

urls.create(url, email, visitor, function(id) {
   
   response.write("QuinlanAdvertising.com/trurl/:" +id);
   response.end();
   
});

           var mailOptions = {
            from: 'Quinlan Advertising <TrackUrl@QuinlanAdvertising.com>', // sender address
            to: 'tquinlan1992@gmail.com', // list of receivers
            subject: email + " sent " + url + " to " + visitor, // Subject line
            text: email + " sent " + url + " to " + visitor, // plaintext body
            html: '<b>' + email + " sent " + url + " to " + visitor+'</b>' // html body
        };
        
        
   // send mail with defined transport object
   transporter.sendMail(mailOptions, function(error, info){
   
       if(error){
           console.log(error);
       }else{

       }
   });

   


};