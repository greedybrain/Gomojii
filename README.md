![](https://user-images.githubusercontent.com/51010236/87365074-4b98b080-c543-11ea-9cc7-e8e057fa03b9.png)

# Overview

Gomojii is a playful emoji themed application that allows a user to search existing emojis, and access other widgets that are emoji themed.

![filter-feature-demo](https://user-images.githubusercontent.com/51010236/87423685-b3351700-c5a8-11ea-8659-419cb9812b4f.gif)

[Demo](https://www.loom.com/share/83abb7e7634a4181b66571ada433987e) | [Blog]()

# Features

1. User can search through all emojis.
2. User can filter all emojis.
3. User can save/bookmark emojis.
4. User will have access to many other emoji themed widgets.

# Technologies Implemented

1. React.js
2. Redux to handle state
3. Rails to handle any backend data/logic
4. Sessions and Cookies for authentication
5. Postgres for data persistence

# Installation 

***Backend/API***

1. ```git clone git@github.com:greedybrain/Gomojii.git```
2. ```cd``` into projects backend directory ```gomojii-backend```
3. Run ```bundle install``` to install all of Gomojii's dependencies
4. Confirm that Postgres is installed on your machine. If not, get it [here](https://www.postgresql.org/download/)
5. Create the database by running ```rails db:create```
6. Create migrations by running ```rails db:migrate```
7. If applicable, run ```rails db:seed``` to generate any seed data
8. Lastly, run ```rails s``` or ```rails server``` to generate a live server

***Frontend/Client***

1. ```cd``` into front end directory ```gomojii-client```
2. Run ```open index.html``` or ```npm start``` to run the app in a browser





