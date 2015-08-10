var req = require('request');
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
    
    var host = request.headers.host;
    console.log(host);
    var to_email;
    var subject;;
    
    if (host == "victor-hanas.quinlanadvertising.com") {
        to_email = 'tquinlan1992@gmail.com';
        subject = 'Victor Portfolio Contact Message';
    } else {
        to_email = 'tquinlan1992@gmail.com';
        subject = "Quinlan Advertising Contact Message";
    }
   
    var c_name = request.body.c_name;
    var c_email = request.body.c_email;
    var c_message = request.body.c_message;
   


   var mailOptions = {
    from: 'Quinlan Advertising <QuinlanAdvertising@gmail.com>', // sender address
    to: to_email, // list of receivers
    subject: subject, // Subject line
    text: c_message, // plaintext body
    html: '<b> Reply C_email: '+ c_email + '<br><br>' +
               'Sender C_name:' + c_name + '<br><br>C_message: ' + c_message+'</b>' // html body
};


// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){

    if(error){
        console.log(error);
    }else{
        console.log('C_message sent: ' + info.response);
    }
});

   
    response.writeHead(204, { 'Content-Type': 'text/plain',
                          'Trailer': 'Content-MD5' });
        response.end();


};