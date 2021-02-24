const http = require('http')
const fs = require('fs');

// Create Server

const httpServer = http.createServer();

// request-event
httpServer.on('request', (request, response) => {
    if (request.url === "/") {
        fs.readFile(__dirname + '/public/index.html', function (err, data) {
            if (err) {
                response.writeHead(200, { 'Content-Type': 'text/plain' });
                response.write('404 Not Found\n');
                throw (err);
            }
            else {
                response.writeHeader(200, { "Content-Type": "text/html" });
                response.write(data);
            }
            response.end(); // <-- MISSING
        });
    }

    const serverPDFResponse=(file)=>{
        let rs=fs.createReadStream(file);
        response.setHeader('Content-Type','application/pdf');
        rs.pipe(response);
    }

    const serverPPTResponse=(file)=>{
        let rs=fs.createReadStream(file);
        response.setHeader('Content-Type','application/ppt');
        rs.pipe(response);
    }


    if(request.url==='/node.pdf'){

        const file=__dirname + '/docs/node.pdf';
        serverPDFResponse(file);
        
    }

    if(request.url==='/ej.pdf'){
        const file=__dirname + '/docs/ej.pdf';
        serverPDFResponse(file);
        
    }

    if(request.url==='/recap.pdf'){
        const file=__dirname + '/docs/recap.pdf';
        serverPDFResponse(file);
        
    }

});

// set a port number to the http server
httpServer.listen(3000, () => {
    console.log('http server started on port 3000. http://localhost:3000');
});


/*

 1x - 100 to 199 - Information
 2x - 200 to 299 - Success
 3x - 300 to 399 - Redirections
 4x - 400 t0 499 - Client side errors
 5x - 500 to 599 - Server side errors

  When Server is Giving response back to the client, response header

  Response herder:
    -> status code
    -> content type : MINE TYPE
    -> Message / exception information to the client


    Payload
    ------------
    


*/