# VSCovid

## Description

VSCovid is a browser game that pits the player against anti-vaxers.  All players will see themselves as the "good guy" and see everyone else as an enemy. It's a free for all style game with powerups. The goal is to have the most eliminations and be at the top of the scoreboard.  Some of the powerups include health packs, shields, speed boost, rapid fire and buck shots.

## Minimum System Requirements  
  
**Operating Systems: Windows 10 (32-bit or 64-bit), Mac OS, Linux OS (debian/ubuntu, redhat, SUSE) based systems**  
  
**Processor: Dual Core Processor 2 GHz +**  
  
**Memory: 2GB RAM + (4 Recommended)**  
  
**Disk Space: 5 GB +**  
  
**Stable Internet Connection**  
  
**Web Browser (Chrome, Firefox, Brave, Opera) etc**  
  
**Screen Resolution: 1280X720 + (This game is not optimized for mobile devices)**  
  
## Installation
  
## Linux
  
To host the game yourself you will require MongoDB, Node (Node can be installed with the commands below and Mongo can be installed using Node), and some sort of server to run it on. Clone this repo into it's own folder/directory so that all files are located in the same place. After that, you can simply do the following in a terminal/command line to get it online.  Make sure you use the cd command to first switch into the folder that the repository is cloned into before running these commands.  
  
Using the following commands should launch an instance of the game for people to connect to.

```bash
cd [Folder_Name]
git clone https://github.com/JulianForeman/VSCovid/ (If this fails you need to install Git using the documentation below)
sudo apt install nodejs
npm install mongod
npm install
sudo systemctl start mongod (If this fails please follow the documentation to install mongodb linked below)
sudo systemctl status mongod
npm start
```

Mongo: https://docs.mongodb.com/manual/installation/  
Node: https://nodejs.org/en/download/  
Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

## Windows  
  
 -MongoDatabase:  
  
After downloading mongodb community server setup you will need to direct yourself to the directory of where Mongodb was installed.
go to the program files and select mongodb  

C: -> Program Files -> MongoDB -> Server -> (version) -> bin  

-in the bin directory you should see two exc files:  
  
    mongod  
    mongo  
  
for windows you'll need to access these at a later point to start mongo services  
  
-open your cmd prompt inside your c drive and enter the following:  
```bash
C:\> mkdir data/db
C:\> cd data
C:\> mkdir db  
```  
once the directory is made you can either go back to the bin folder and exc file mongod or in cmd prompt enter the following:  
```bash
   mongod
```

From here your MongoDB server should be running!  
  
After Mongodb is running, navigate yorself back to the shell and you should be able to see a message saying "connection accepted"  
  
-Setting up the Enviorment Variables:  
  
-To set up the enviorment variables in window:  
  
Advanced System Settings -> Environment Variables -> Path(Under System Variables) -> Edit  
  
C:\Program Files\MongoDB\Server\4.0\bin  
  
Copy the path of the bin folder and hit the okay.  
  
-Working with and connecting to Database:  
  
Open up your command prompt and type mongod to start the MongoDB server.  
  
Open up another shell and type mongo to connect to MongoDB database server.  
  
-To find what current Database you are in type this into the cmd prompt:  
  ```bash
   db
  ```
-To show the list of databases that are listed:
```bash
   show dbs
```
-To create particular database that is needed:
```bash
   use players
```  
(hit enter)  
  
To create a collection  
```bash
db.players.insert({"name": "MyName", "username" : "Player1", "email": "playeremail@gmail.com", "score": "0"})
```

----------------------------------------------------------------------------------  
  
  Launch the game now by executing the following commands:  
```bash
cd [Folder_Name]
git clone https://github.com/JulianForeman/VSCovid/ (If this fails you need to install Git using the documentation below)
sudo apt install nodejs
npm install mongod
npm install
sudo systemctl start mongod (If this fails please follow the documentation to install mongodb linked below)
sudo systemctl status mongod
npm start
```  
  
Mongo: https://docs.mongodb.com/manual/installation/  
Node: https://nodejs.org/en/download/  
Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

## Mac  
  
Open the game folder in your preferred IDE.  
  
Open the command line in your IDE (Make sure you are in the root folder "Brent-VSCovid")  
  
In order to install all the required dependencies use the command line and type: 
```bash
npm install
```  
Start Mongo DB by typing in this in a seperate command line tab:  
```bash
mongod --dbpath (Folder where your mongo is)
```  
To be able to use Mongo to edit the DB, type this in a seperate command line tab  
```bash
mongo
```  
In a separate command line tab type this to start the game:  
```bash
npm run dev (Should display "Running on port 3000")  
```  
Open your web browser and type in: [localhost:3000](http://localhost:3000)

## Authors

Julian Foreman, Alex Neuman, Brent Perry, Trevor Moore, Duane Nickull  
  
*This game was developed as a post secondary education course based on a game written by alvin@omgimanerd.tech (Alvin Lin) and kennethli.3470@gmail.com (Kenneth Li).  All content copyright of the authors including graphics and user interfaces.*
