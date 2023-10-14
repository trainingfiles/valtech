let http = require("node:http");
let fs = require("node:fs");
let server = http.createServer(function(req, res){
    // res.write("hello from http module");
    /*
    res.write(`
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            
            </head>
            <body>
            <label for="searchinput">Search  </label>
            <input id="searchinput" type="search">
            <button id="searchbutton">Search &#x1F50D; </button>
            <hr>
            </body>
            </html>
            `)
            */
           fs.readFile("../../assignment.html","utf-8",function(error, data){
            let tempdata = data.replace("{{title}}","Valtech Assignment").replace("+search+","Valtech Search")
               res.write(tempdata);
               res.end();
           })
        });
        
server.listen(1010,"localhost",function(error){
    if(error){
        console.log("Error ", error)
    }else{
        console.log("Server is ready on localhost:1010")
    }
})