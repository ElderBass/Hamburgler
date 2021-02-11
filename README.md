# 'Eat-da-Burger' App 
An application for devouring burgers, by Seth Zygarlicke.

### Links:

GitHub Repository: https://github.com/ElderBass/Hamburgler.git
    
Heroku: https://drive.google.com/file/d/1aFBkR8vRe2H_WomYfPcFeEqTZpy4FPaR/view

    
## Table of Contents

* [Description](#description)


* [Installation](#installation)

    
* [Usage](#usage)


* [Technologies](#technologies)

    
* [Contributing](#contributing)


* [Questions](#questions)




    
## Description

This assignment was basically designed to get us familiar with the "MVC" setup for Full Stack Development, that is 'Model, View, Controller.' The main crux of the assignment was establishing the correct file/folder structure and linking your files together in such a way that mimics best practice for the MVC model. 

The actual application is quite simple indeed. Upon rendering the 'main' page, the user will see a 'Menu' on the left filled with burgers from the database, an input box/submit button on the right, and below the input box another area labeled 'Burgers You've Scarfed'. All the burgers in the 'menu' will have a 'devour' button next to them. If the user clicks this button, they will have 'scarfed' the burger, and that burger is then moved from the menu to the 'burgers you've scarfed' div. 

Users can also add a new burger by writing it in the given text area and hitting the 'flip your burger' button. This will then populate their burger in the menu, along with its corresponding 'devour' button. That's...about it.

    
## Installation

    
This application relies on three main dependencies: express, express-handlebars, and mysql. To install these packages on your machine, run the following commands:

```
npm i <package name goes here>
```

In order to run this application, right click on the 'server.js' file and select 'Open in Integrated Terminal'. In the new terminal that pops up on your window, type the following command:

```
node server.js
```

You will then be taken to main menu of the Employee Tracker app. 
    
    
## Technologies

This is a node application using javascript/JSON for backend functionality. The database was built and stored using MySQL Workbench, and the application itself uses the 'mysql' npm package to connect the javascript with the SQL database. 

The express npm package was used to establish a backend server and the various routes required to make the webpage function.

Express-handlebars was used for the front-end layout and design.

All the code for this application was compiled using VS Code. 

    
## Contributing

    
If you wish to contribute to the repository, fork it to your machine from GItHub and do with it what you will. 

    
    
## Questions

    
See more projects by Seth on GitHub:  https://github.com/ElderBass

   
For any questions, please email Seth at:

    zygster11@gmail.com


    

    
