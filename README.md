# ROT(running outoff time) App 

### User Story
> - The request which comes from the client-side(angular) will be stored in a MongoDB. TTL indexes are special single-field indexes that MongoDB can use to automatically remove documents from a collection after a certain amount of time or at a specific clock time. Time to live (TTL) is a mechanism that limits the lifespan or lifetime of data in a database.
> - Once the prescribed event count or timespan has elapsed, data is discarded or revalidated. In Database, TTL prevents a data packet from circulating indefinitely. Basically, It is used to decide the lifespan of an TOTP(Time Based One Time Password) and Token generation. For security purpose need to decide the user is genuine are not.

# When i get stuck

- I first narrow down and figure out what I’m actually stuck on define the problem. Then I come up with a assumption for what I think could be the root cause or causes of the problem. Even if I have no idea, I just make a guess.
- Now I try to debug with my hypothesis in mind. I get as far as I can on my assumption without looking for answers online, there’s something beautiful that happens when i try to solve problems by truly thinking deeply about them on my own first. Even if i going down the wrong path, the fact that i made the effort teaches me a lot and i will remember the problem space much better next time i run into it.
- If not, I Google search for documentation, blog posts, or Stack Overflow posts that could help me get closer to the answer.
- At this point, if I’m truly stuck, I will either post a question on Stack Overflow or ask a co-lead or developer I know.

# architecture of an app to deploy

![alt text](https://github.com/prathap1041220272/ROT-Running-Outoff-Time-app/blob/master/images/architecture.png "Logo Title Text 1")

Or else [Click here for original image from draw.io](https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.html#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1HlnU8SGxv9GGqVAwxWfnK-ut25dXMobP%26export%3Ddownload)

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
 It will show the response like above in a console.
 Click here to check, if it works [https://localhost:4568](https://localhost:4568).
 
# Postman 
send the input text in a body from client-side to the server, Through the path : `localhost:4568/input` method :`POST`

![alt text](https://github.com/prathap1041220272/abide-app/blob/master/images/postman.png "Logo Title Text 1")

You can get this result.

# Database (Mongo DB)

Here is the example, how the data was expiring.

![alt text](https://github.com/prathap1041220272/abide-app/blob/master/images/expire.png "Logo Title Text 1")

---
# Client Side

## Angular

Start the server with this command 
```
$ ng serve --open
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

Date: 2018-09-06T03:50:22.744Z
Hash: 27b1ebfcc11a8e6c0fd7
Time: 24563ms
chunk {main} main.js, main.js.map (main) 16.8 kB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 227 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 5.22 kB [entry] [rendered]
chunk {styles} styles.js, styles.js.map (styles) 147 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 3.6 MB [initial] [rendered]
i ｢wdm｣: Compiled successfully.
```

CLI will show the above result

#### Browser

Go to the browser and enter the url path or click here [https://localhost:4200](https://localhost:4200) .

![client side input](https://github.com/prathap1041220272/abide-app/blob/master/images/client_input.png "client side input")

If it's success 

![client side success](https://github.com/prathap1041220272/abide-app/blob/master/images/client_input-success.png "client side success")
