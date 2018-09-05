# Abide App 
> The request which comes from the client-side(angular) will be stored in a MongoDB with at a certain limit of time, data in a DB will be erased (with mongoDB TTl).
### Technologies used :-
 - Node JS  - server side
 - Mongo DB - Backend
 - Angular - Client side

---
# Server Side
### Node JS :-
Modules used 
- Express
- Body Parser
- Mongoose -mongoDB client
- CORS (cross origin resourse sharing)

To start the server
```
$ node index.js (or) .
server started at port 4568
Succefully Connected To DB
```
 It will show the response like this in a console.
 Click here to check, if it works [https://localhost:4568](https://localhost:4568).
 
# Postman 
send the input text in a body from client-side to the server, Through the path : `localhost:4568/input` method :`POST`

![alt text](https://github.com/prathap1041220272/abide-app/blob/master/images/postman.png "Logo Title Text 1")

You can get this result.

# Database (Mongo DB)

Here is the example how the data was expiring.

![alt text](https://github.com/prathap1041220272/abide-app/blob/master/images/expire.png "Logo Title Text 1")
