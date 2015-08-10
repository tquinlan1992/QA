var mongojs = require('mongojs');




// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(err) { return console.dir(err); }

       var collection = db.collection('test_insert');  

var myVar=setInterval(function(){myTimer()},1000*60*60*24);

function myTimer() {
    var d= new Date();
    collection.remove({date_created: d.getDate() - 7})
}
// Register a new user
module.exports.create = function(url, email, visitor, callback) {
    
  var d = new Date();
    
    var objectToInsert = {url: url, email: email, visitor: visitor, date_created: d.getDate()}
    collection.insert(objectToInsert,
                   function(err){
                    console.log(objectToInsert._id);
                        callback(objectToInsert._id);
    });
    



}


module.exports.find = function(id, callback) {
    

    
                

    
    collection.findOne({_id:mongojs.ObjectId(id)}, function(error,url) {
        if (error) throw error;
        
        callback(url);
    });
    



}






module.exports.delete_visited= function(id) {
    

    
                
    collection.remove({_id:mongojs.ObjectId(id)}, function(error) {if (error) throw error;});

    


}

});