



// Index page: home page, or login
module.exports = function(request, response) {
   var domain = request.headers.host
        
console.log(domain);
   if (request.session.visited == undefined) {
        
        
        response.render('index_page/index',{no_preloader:false});
   } else {
        request.session.visited = true;
        response.render('index_page/index',{no_preloader:true});
   }



};