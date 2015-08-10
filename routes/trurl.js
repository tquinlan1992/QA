var req = require('request');
var urls = require('../models/urls');
var validator = require('validator');
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
   
var url_id = request.url;
var index = url_id.lastIndexOf(":");
var id = url_id.substring(index+1);
console.log(id);
if (id.length != 24 || !validator.isHexadecimal(id)) {
   console.log("Asjflka");
   response.redirect('/');
} else {

urls.find(id, function(url) {
   
   console.log(url);
   
   if (url == null) {
      response.redirect('/');
   } else {
            var url_link = url.url;
            if (url_link.indexOf("http://") < 0) {
               url_link = "http://" + url_link;
            }
            response.redirect(url_link);
            var email = url.email
            var subject = url.visitor + " visited the link:'" + url_link +"' you sent";
            var message = url.visitor + " visited the link:'" + url_link +"' you sent on " + Date();
           
        
        
           var mailOptions = {
            from: 'Quinlan Advertising <TrackUrl@QuinlanAdvertising.com>', // sender address
            to: email, // list of receivers
            subject: subject, // Subject line
            text: message, // plaintext body
            html: '<b>' + message+'</b>' // html body
        };
        
        
        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
        
            if(error){
                console.log(error);
            }else{
                console.log('C_message sent: ' + info.response);
            }
        });
        
        
        urls.delete_visited(id);
   }
});
}



   


};