# to download and run this example:  
1. // install meteor  https://www.meteor.com/install
2. git clone https://github.com/domparise/meteor-backend-example.git  
3. cd meteor-backend-example  
4. meteor npm install  
5. npm start // this will build the appropriate meteor dependencies and begin running the server/app
  
  
# to build this project from scratch:  
1. // install meteor  https://www.meteor.com/install
2. meteor create --bare <appname>  
3. cd <appname>  
4. meteor npm install   
5. meteor npm install --save babel-runtime // i guess?  
6. mkdir server  
7. // copy over index.js from this project into server/index.js  
8. npm start  
  
boom working restful API server built with meteor  
  