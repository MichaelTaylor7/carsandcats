var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {

    console.log('client request URL: ', request.url);

    if (request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/cars") {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/Finn_McMissile_3_5245.png') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/Finn_McMissile_3_5245.png', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/img7.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/img7.jpg', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/Lightning_McQueen.png') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/Lightning_McQueen.png', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === "/cats") {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/cats-in-food-11.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cats-in-food-11.jpg', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/catstormtrooper.jpg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/catstormstrooper.jpg', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === "/cars/new") {
        fs.readFile('views/form.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {
                'Content-type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    }
    // request didn't match anything:
    else {
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");