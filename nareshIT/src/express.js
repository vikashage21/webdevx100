const http = require('http');

function express() {
    const app = function (req, res) {
        app.handle(req, res);
    };

    app.routes = [];

    // register GET route
    app.get = function (path, handler) {
        app.routes.push({
            method: 'GET',
            path: path,
            handler: handler
        });
    };

    // core dispatcher
    app.handle = function (req, res) {
        for (let route of app.routes) {
            if (
                route.method === req.method &&
                route.path === req.url
            ) {
                return route.handler(req, res);
            }
        }

        res.statusCode = 404;
        res.end('Not Found');
    };


app.listen = function(port , callback){
    http.createServer((req , res)=>{
        app.handle(req , res);
    }).listen ( port , callback);

}

return app;

}





const app = express();

app.get('/home', (req, res) => {
    res.end('Hello World');
});

app.listen(4000,()=>{
    console.log('server is listing on port 4000')
})



// ┌─────────────┐
// │   Browser   │
// │ GET /home   │
// └──────┬──────┘
//        │ HTTP Request
//        ▼
// ┌────────────────────┐
// │ Node.js HTTP Server│
// │ createServer()     │
// └──────┬─────────────┘
//        │ calls
//        ▼
// ┌────────────────────┐
// │   app(req, res)    │  ← callable object
// │ (this is a function)│
// └──────┬─────────────┘
//        │ forwards
//        ▼
// ┌────────────────────┐
// │  app.handle()      │  ← core engine
// │ (route dispatcher) │
// └──────┬─────────────┘
//        │ loop & match
//        ▼
// ┌─────────────────────────────┐
// │ app.routes[]                │
// │ ┌─────────────────────────┐ │
// │ │ GET  /home  handler fn  │ │
// │ └─────────────────────────┘ │
// └──────┬──────────────────────┘
//        │ match found
//        ▼
// ┌────────────────────┐
// │ route.handler()    │
// │ (your code)        │
// └──────┬─────────────┘
//        │
//        ▼
// ┌────────────────────┐
// │ res.end("Hello")   │
// └────────────────────┘


