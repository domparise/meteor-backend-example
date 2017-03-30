import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {

  // Listen to incoming HTTP requests (can only be used on the server).
  WebApp.connectHandlers.use('/hello', (req, res, next) => { // open browser to http://localhost:3000/hello
    res.writeHead(200);
    res.write('sup');
    res.end();
  });

  // HTTP request that gives different response depending on HTTP method
  WebApp.connectHandlers.use('/yolo', (req, res, next) => {
    res.writeHead(200);
    if (req.method === 'POST') { // curl -X POST http://localhost:3000/yolo
      res.write('suhh');
    } else { // curl -X GET http://localhost:3000/yolo
      res.write('dolo');
    }
    res.end();
  });

}