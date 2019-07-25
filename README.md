# Real World Application Project

[Deployed Application Link](https://realifystatedly.netlify.com)

[Front End Github Repo Link](https://github.com/Dylan-Speight/real-world-application)

[Back End Github Repo Link](https://github.com/Dylan-Speight/real-world-application-backend)

## Table of Contents

<!-- code_chunk_output -->

- [Real World Application Project](#Real-World-Application-Project)
  - [Table of Contents](#Table-of-Contents)
  - [Description of project](#Description-of-project)
    - [Problem definition/ purpose](#Problem-definition-purpose)
    - [Functionality / features](#Functionality--features)
    - [Screenshots](#Screenshots)
    - [Tech stack (MERN) / What libraries are being used in the app and why](#Tech-stack-MERN--What-libraries-are-being-used-in-the-app-and-why)
    - [Instructions on how to setup, configure, deploy and use the app](#Instructions-on-how-to-setup-configure-deploy-and-use-the-app)
  - [Design documentation](#Design-documentation)
    - [Design process](#Design-process)
    - [User stories](#User-stories)
    - [Workflow diagram of the user journey/s](#Workflow-diagram-of-the-user-journeys)
    - [Database ERD](#Database-ERD)
    - [Data Flow Diagram](#Data-Flow-Diagram)
    - [Details of project Management and Planning process](#Details-of-project-Management-and-Planning-process)
      - [Project plan and timeline](#Project-plan-and-timeline)
      - [Client communications](#Client-communications)
      - [Screenshots of trello boards](#Screenshots-of-trello-boards)
    - [Screenshots of app in progress](#Screenshots-of-app-in-progress)
  - [Short answer questions](#Short-answer-questions)
    - [What are the most important aspects of quality software](#What-are-the-most-important-aspects-of-quality-software)
    - [A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project](#A-team-is-about-to-engage-in-a-project-developing-a-website-for-a-small-business-What-knowledge-and-skills-would-they-need-in-order-to-develop-the-project)
    - [Within your own project what knowledge or skills were required to complete your project, and overcome challenges](#Within-your-own-project-what-knowledge-or-skills-were-required-to-complete-your-project-and-overcome-challenges)
      - [Project management](#Project-management)
      - [Technical understanding](#Technical-understanding)
      - [Design](#Design)
      - [UX/UI](#UXUI)
    - [Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature](#Evaluate-how-effective-your-knowledge-and-skills-were-this-project-using-examples-and-suggest-changes-or-improvements-for-future-projects-of-a-similar-nature)
      - [Our Project Management](#Our-Project-Management)
      - [Our technical understanding](#Our-technical-understanding)
      - [Our design and UX/UI](#Our-design-and-UXUI)

<!-- /code_chunk_output -->

## Description of project

### Problem definition/ purpose

 After discussing with the client we have been tasked with creating a real estate application. The purpose of this application is to assist a user in making the best possible real estate investments based on the properties expected return on investment. By taking the information given by the Domain api we are able to create a calculator to assist in allowing the user to make the best possible investment choices. This app will allow the user to see various statistics about the property they are interested in investing in. Users will be able to save and keep track of any properties that they are thinking about investing in making it easier to track changes in the real estate market effecting the expenses or rental prices etc.
  
### Functionality / features

 Users are able to sign up to the app and log into their account giving them their own personal profile to search through properties that they may be interested in. Users will be able to search and filter their results based on the state, postcode, suburb, street, house number price etc. If the user finds a investment property they are interested they are able to save it to their profile so that they can come back and quickly access the information relevant to their choices.
  
### Screenshots

![picture](/public/01_login_page.png)
![picture](/public/02_signup_page.png)
![picture](/public/04_search_page.png)
![picture](/public/05_search_page_with_results.png)
![picture](/public/05_search_page_with_results_expanded.png)
![picture](/public/06_user_profile_with_saved_investments.png)
  
### Tech stack (MERN) / What libraries are being used in the app and why

_**|   Node.js    |**_
  
  Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. This allows us to run scripts server-side enabling a dynamic webpage. It also allows for us to use javascript in the backend so that we can use javascript throughout the entire application, frontend to backend.
  
_**|   Express    |**_
  
  Express is a web application framework for Node.js and is the de facto standard server framework for Node.js.
  
_**|   React    |**_

React is a javascript library for building user interfaces. React is optimal for fetching rapidly changing data that needs to be recorded. Recently it has been made even more powerful by introducing hooks in 16.8.0 allowing for its own inbuilt state management allowing for easier state management without redux. React allows us to build out our front end with easy to implement components allowing for more flexibility when approaching the build process.

_**|   Mongodb    |**_

MongoDB is a cross-platform document-oriented database program. It is a non relational database that allows for data to be stored and recieved without the data being modeled outside the tabular relations used in relational databases. Data is conceptualized as an object this allows the database to be a lot more intuitive to work with since 'everything is an object' it also allows for a lot more flexibility in its design  as we are not bound to columns and rows and can use more customiszed data input documents instead of having to rely on the schema to do the work.

_**|   Mongoose    |**_

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB. It allows us to easily speak with our database in the backend.

### Instructions on how to setup, configure, deploy and use the app

1. Fork and clone the front end and backend repos
2. Enter the server directory and run the yarn install command
3. Repeat for the front end file
4. You will need to change the environment variables to suit your own needs
5. You will also have to change what database the backend is pointing at by changing the mongo_uri variable in the index.js file line 27
6. After this go into the front end file and change where the uris are pointing throughout
7. Deploy the backend
8. Deploy the front end
9. Hey presto Application goodness

Note: If you would like to make changes please fork the repo as well

## Design documentation

### Design process
  
  _**In the beginning: Planning**_

  With the introduction of a client the design process is different from previous projects built in this course. The design now has a lot more to do with regulating expectations in the finished app as we have only limited time and experience in building apps from scratch. The advantage to having a client is that the app begins with a goal that is to be achieved so the design of the app is more of an exercise in seeing how the end goal can be achieved.

  _**Initialization**_

  After talking with the client to begin with we went into the design of the database and the general structure of the app. After knowing what information it was that we were trying to get and where we were going to get it from we began our first short sprint modeling out the dataflow and initializing the back and front end and setting up the initial deployment.
  
  _**Getting to it**_

  After we had the basics down we could look harder into how we were going to retrieve and pass data. We decided on user accounts to allow people to store their liked investment properties and the information we would request from the domain api. This gave us our database an outline and a direction for the front end to head in. Displaying a map from the google maps javascript api and linking it with the domain api to show markers on the map for location along with the cards that give a brief overview of the properties within the scope of the search terms and filters provided by the user.

  _**Pretty and Functional**_

  With the basics down we worked towards getting it looking nice and making sure that the functionality of the app was smooth and responsive. This is also where the user experience factored in a bit more as we wanted to make the app accessible to the user and not just something that would be dificult to navigate and find out what they were looking for. Putting together a user flow for the intended navigation of the site and the layout that would be most ideal to serve these purposes. Wireframes and diagrams were definitely an asset here in making sure that we had an idea of how everything will be layed out in the end.

  Constant communication with the client assisted in our progress as they already had somewhat of an end goal in sight beforehand which made this particular part of the design progress much smoother as we could run everything by them.

### User stories

![picture](/public/userStories.png)

### Workflow diagram of the user journey/s

![picture](/public/userFlow.jpeg)

- Wireframes

### Database ERD

 ![picture](/public/RealEstateERD.png)

### Data Flow Diagram

![picture](/public/DataFlowDiagram.png)

- OO design documentation
  
### Details of project Management and Planning process

#### Project plan and timeline
  
 _**10/07/2019 - 12/07/2019**_

- We had talks with our client and decided on the project that we were going to undertake.
- After this we began setting out how we were going to go about work flow set up our trello and started initializing the project.
- Repos were created and the basic structure was outlined in the back and front ends of the application
- Work was started on the api in the frontend and allowing the application to pull from the Domain api
- Backend was initialized and basic structure for database was set out for functionality.
- We pushed up our initial deploy for the application to ensure that everything was running smoothly.

 _**15/07/2019 - 17/07/2019**_

- More work was put into getting the api to talk to the application frontend
- Backend and frontend were connected to make sure that the front end could access the database and any functions set up in the back end
- api figured out allowing us to pull the information that we required from it.

 _**17/07/2019 - 19/07/2019**_

- With the backend and frontend hooked up and the api calls working we started getting the domain api to pull through the google maps api allowing for us to map and track the properties we were looking for and mark them according to our requests.
- We set up a database in the cloud with mongoDB atlas to allow us to deploy to a database in production as localhost is not able to be used.
- Bugfixing and getting the different pieces of the application to talk with each other online.

 _**22/07/2019 - 25/07/2019**_

- Created user interface with register, login and log out functionality as well as authentication for the user
- Updated components in the front end to allow for the user to CRUD properties to the database.
- Calculators added to the front end to determine various returns and other variables in the properties being looked at.
- Application frontend was styled and made more user friendly.
- Ongoing bugfixing and updating to ensure deployment was successful.
- Documentation and README work to explain the application and our process throughout the project.
- Finished Documentation
- Final deploy
- Submit
  
#### Client communications

Contacted client about potential project, client replied with initial problem/need

First week finalised proposal with client.

Thursday 18th: Explained current state of App to client and they requested changes to the JWT verification procedure which we obliged

Monday 22nd: Discussed calculator and adjusted formula to better suit needs

Tuesday 23rd: Client suggested alternatives for data storage - implemented as requested

Wednesday 24th: Requested face-to-face correspondence to showcase application before submission, unfortunately they were unable to meet due to prior obligations.

Thursday 25th: Demo'd the application for the client and explained that due to the deadline some of the requested features in the proposal were not able to be met. They understood the situation and were happy with the end result given the circumstances.

#### Screenshots of trello boards
  
![picture](public/trello1.png)
![picture](public/trello2.png)

### Screenshots of app in progress

![picture](/public/Untitled.png)
![picture](public/screen2.png)
![picture](public/screen3.png)

## Short answer questions

### What are the most important aspects of quality software

_**Flexibility and Extensibility**_

Flexibility is the ability of software to add/modify/remove functionality without damaging the current system. Extensibility is the ability to extend software and add functionality without damaging system, so it may be thought of as a subset of flexibility. These changes in the software may occur if requirements of the software change or if new or improved features come in for the original software. Software is always changing so it is important to be able to adapt and change along with it.

_**Maintainability and Readability**_

Maintainability is a little similar with flexibility but it focuses on modifications about error corrections and minor function modifications, not major functional extensibilities. It can be supported with useful interface definitions, documentation, and self-documenting code and/or code documentation. The more correct and useful documentation exists, the more maintainability can be performed.

_**Performance and Efficiency**_

Performance is mostly about optimizing your software to improve response times in your software and efficiency is more about lowering resource cost. For example improving performance will shorten response times to an acceptable level and keep them at those levels even if transaction count increases. On the other hand getting instant responses by increasing resource use will improve the performance but will increase costs due to more resources being used. This is where the efficiency of the software comes in, finding the ideal resources/ performance ratio is important and should be aimed for.

_**Usability and Accessability**_

User interfaces are the only visible parts of software according to the viewpoint of user. So, simplicity, taking less time to complete a job, the ability to easily navigate, simplicity in design etc. are very important in this case. Keeping the software simple and not trying to throw too much at the user at once will help to create an enjoyable and worthwhile experience for the user. Simple is always the best. A usable software should also support different accessibility types of control for people with disabilities. These may range from the colour scheme to making sure that the sites layout allows for efficient tab navigating.

_**Functionality**_

Functionality is the conformity of the software with actual requirements and specifications. If the software is unable to perform its intended purpose efficiently, in the best possible way then there is definitely room to be improved on. Also important is that it does not contain bugs or other issues that may impede the softwares ability to achieve its end goal for the user.

### A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project

The team should first have a strong knowledge of the tech stack they plan on using for the website an example of this is knowing mongodb, react, express and node.js if they are planning on making it with the MERN stack. Next is knowing how to put it all together in a way that will make the best use of their time. Being knowledgeable in how a website is constructed and having a solid understanding of any data flow or anything else that may not be immediately obvious in the project.

Assuming the team has adequate technical skills to build the website they will also need to have some sort of project management ability. Whether it is done as a team or an assigned person leads this it is a necessary component to plan out how the team will be working towards their end goal. Going into a project without a goal or way to get to it are both just asking for failure.

After these aspects the team will still need a strong sense of design too put all of these things together into a coherent website that is well set out and pleasant to use without needing some other knowledge of the website.

Design plays a big part in the user experience but is not the only part that is important to it. The team will have to make sure that their website is also efficient and will give the user a great experience by reducing load times and making the site both accessible and usable.
  
### Within your own project what knowledge or skills were required to complete your project, and overcome challenges

#### Project management

As a team in the beginning of the project we talked out what we would work on based on our strengths and started assigning in what order we would be building and who would be working on what. Trello and slack allowed us to keep track of what the other was doing and communicate any issues we would have during the work process. Trello also allowed us to track how long tasks were taking as we completed them and made sprints a breeze with how we could move our cards around.

#### Technical understanding

Firm understanding of the tech stack we were using and the general flow of our application and how we were going to be structuring the data and how it will flow through from the frontend to the backend.
Confidence in the MERN stack and its libraries allowed us to fix anything that might have broken and made the process of actually building the application much smoother.

#### Design

We both had a good sense of how the application would run from a design perspective which allowed us to work through the application one on backend one on frontend and get the app up and running quickly. Having the premise of the app established early with the client gave us plenty of time to think through our app and build out a design that would deliver us to our end goals

#### UX/UI

After everything was completed we made the application as smooth as possible for the user and streamlined the processes on the users side of the application. Also making it look good and readable so that the user isnt just assailed with stimulus and unordered information.

### Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature

#### Our Project Management

As far as project management went in the beginning everything ran well and we were powering through however some hiccups happened with graphql and small errors made some tasks takefar longer than they should have which threw us a little. We overcame these issues and carried on pushing through fixing snags in our database deployment and some small variables that broke.

#### Our technical understanding

Overall we had a firm understanding of the tech that we were using. A few of the newer softwares and libraries that we tried to implement gave us some trouble such as graphql which was later thrown out as it was becoming an inconvenience at best. Deploying was also something we hadnt done much of so setting that up turned into somewhat of a headache linking everything together properly with environment variables and passwords etc.

#### Our design and UX/UI

Again I think we did quite well in this area using bloomer and bulma though due to time constraints we couldnt go quite as deep as we would have liked to, however, bulma allowed us to get as much done as we did. Without a framework it could have taken us a lot longer to get the styling and design of the site done. Everything in the UX UI is again a the best we could do with the limited time we had in the end due to unexpected bugs or holdups during our process. We have made it as user friendly and smooth as possible to allow for a nice overall experience while using the application.
