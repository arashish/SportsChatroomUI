# SportsChatroom

# 1) What it is about
Ans. It is a Sports Chatroom Application which allows users to talk about Sports topics like: Football, Baseball, Basketball, Boxing, Hockey etc. Sometimes, when there is a game day, it’d be nice if you could have somebody to talk to regarding sports on a specific topic, adding more excitement to watch the game. Therefore, coming to this app may do the same thing for you but online.

# 2) How to configure it/use it
Ans. This application consists of Frontend app (Angular), Backend app (Spring boot Java) and MYSQL Database.

- To configure MySQL Database
For this application, I used MYSQL as a database to store data.  Run the SQL commands listed in the uploaded file “SQL_Table_Generator.txt” to create the database and tables.
After this, database can be consumed from the Backend application by using endpoint “localhost:3306/sports_chatroom”, as defined in Backend app (Application.properties file).

- To configure and run Backend Application (Spring boot Java).
First, extract SportsChatroom.zip file, and import the SportsChatroom Folder in Spring Tool Suite IDE. Then, on the project explorer panel, right click on SportsChatroom project, go to Maven > Update Project, and click okay. This will help to update all the required maven dependencies that are required to run the project. Make sure there are no errors during the update. Finally, on the project explorer panel, right click on SportsChatroom project again, go to Run As, and click on Spring Boot App. This will start the server on localhost:8080, making itself consumable by our Frontend Angular app.

- To configure and run Frontend Application (Angular).
Similarly, extract SportsChatroomUI.zip file, and load the SportsChatroomUI Folder in Visual Studio code. Then, enter these commands in the terminal: [Note: Node.js has to be installed in the system]
    -	npm install (to install packages)
    -	npm install -g angular-cli@latest (to update angular cli)
    -	ng update (to update the application and its dependencies)
    -	ng serve -o (to run the server)

Finally, you can go to the browser and type in localhost:4200 to run and view the SportsChatroom UI, or type in localhost:4200/adminpanel to view the admin panel.

# 3) Helpful Tips
Ans. I was given to work on my own for this project, as I’m a graduate student. Luckily, I had some work experience in Java, Angular and Database which helped me a lot to get things done. However, there were times when I needed to google some errors, get help from StackOverflow to resolve some issues, watched some YouTube video to get some ideas on WebSocket etc. This was indeed a good learning experience.
