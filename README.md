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
    - [Tech stack (MERN)](#Tech-stack-MERN)
      - [Instructions on how to setup, configure, deploy and use the app](#Instructions-on-how-to-setup-configure-deploy-and-use-the-app)
  - [Design documentation](#Design-documentation)
    - [Database ERD](#Database-ERD)
    - [Details of project Management and Planning process](#Details-of-project-Management-and-Planning-process)
    - [Screenshots of app in progress](#Screenshots-of-app-in-progress)
  - [Short answer questions](#Short-answer-questions)
    - [What are the most important aspects of quality software?](#What-are-the-most-important-aspects-of-quality-software)
    - [What libraries are being used in the app and why?](#What-libraries-are-being-used-in-the-app-and-why)
    - [A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?](#A-team-is-about-to-engage-in-a-project-developing-a-website-for-a-small-business-What-knowledge-and-skills-would-they-need-in-order-to-develop-the-project)
    - [Within your own project what knowledge or skills were required to complete your project, and overcome challenges?](#Within-your-own-project-what-knowledge-or-skills-were-required-to-complete-your-project-and-overcome-challenges)
    - [Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?](#Evaluate-how-effective-your-knowledge-and-skills-were-this-project-using-examples-and-suggest-changes-or-improvements-for-future-projects-of-a-similar-nature)

<!-- /code_chunk_output -->

## Description of project

### Problem definition/ purpose

 After discussing with the client we have been tasked with creating a real estate application. The purpose of this application is to assist a user in making the best possible real estate investments based on the properties expected return on investment. By taking the information given by the Domain api we are able to create a calculator to assist in allowing the user to make the best possible investment choices. This app will allow the user to see various statistics about the property they are interested in investing in. Users will be able to save and keep track of any properties that they are thinking about investing in making it easier to track changes in the real estate market effecting the expenses or rental prices etc.
  
### Functionality / features

 Users are able to sign up to the app and log into their account giving them their own personal profile to search through properties that they may be interested in. Users will be able to search and filter their results based on the state, postcode, suburb, street, house number price etc. If the user finds a investment property they are interested they are able to save it to their profile so that they can come back and quickly access the information relevant to their choices.
  
### Screenshots
  
### Tech stack (MERN)

_**|   Node.js    |**_
  
  Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. This allows the developer to run scripts server-side enabling a dynamic webpage. It also allows for javascript to be used in the backend so that javascript can be used frontend to backend.
  
_**|   Express    |**_
  
  Express is a web application framework for Node.js and is the de facto standard server framework for Node.js.
  
_**|   React    |**_

React is a javascript library for building user interfaces. React is optimal for fetching rapidly changing data that needs to be recorded. Recently it has been made even more powerful by introducing hooks in 16.8.0 allowing for its own inbuilt state management allowing for easier state management without redux.
    
_**|   Mongodb    |**_

MongoDB is a cross-platform document-oriented database program. It is a non relational database that allows for data to be stored and recieved without the data being modeled outside the tabular relations used in relational databases. Data is conceptualized as an object this allows the database to be a lot more intuitive to work with since 'everything is an object' it also allows for a lot more flexibility in its design  as we are not bound to columns and rows.
    
_**|   Mongoose    |**_

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

#### Instructions on how to setup, configure, deploy and use the app

Clone the repos posted at the beginning of this README 

Note: If you would like to make changes please fork the repo as well

## Design documentation

- Design process
- User stories
- Workflow diagram of the user journey/s.
- Wireframes

### Database ERD

 ![picture](/public/RealEstateERD.png)

- Data Flow Diagram
- OO design documentation
  
### Details of project Management and Planning process

- Project plan and timeline
- Client communications
- Screenshots of trello boards
  
![picture](public/trello1.png)
![picture](public/trello2.png)

### Screenshots of app in progress

![picture](/public/Untitled.png)
![picture](public/screen2.png)
![picture](public/screen3.png)

## Short answer questions

### What are the most important aspects of quality software?

_**Flexibility and Extensibility**_

Flexibility is the ability of software to add/modify/remove functionality without damaging the current system. Extensibility is the ability of software to add functionality without damaging system, so it may be thought of as a subset of flexibility. Those functionality changes may occur according to changing requirements, or an obligation if the development process is one of the iterative methods. Change is inevitable in software development and so, this is one of the most important properties of quality software

_**Maintainability and Readability**_

Maintainability is a little similar with flexibility but it focuses on modifications about error corrections and minor function modifications, not major functional extensibilities. It can be supported with useful interface definitions, documentation, and self-documenting code and/or code documentation. The more correct and useful documentation exists, the more maintainability can be performed.

_**Performance and Efficiency**_

Performance is mostly about the response time of the software. This response time should be in acceptable intervals (e.g. max. a few seconds), and should not increase if transaction count increases. And also, resources are expensive. Efficiency must be supported with resource utilization. As an exaggerated example, the ability to perform a simple function only by using a 32 processor machine or 1 TB disk space is not acceptable. Optimal source/performance ratio must be aimed.

_**Usability and Accessability**_

User interfaces are the only visible parts of software according to the viewpoint of user. So, simplicity, taking less time to complete a job, fast learnability etc. are very important in this case. The most well known principle for this property is KISS (Keep It Simple Stupid). Simple is always the best. A usable software should also support different accessibility types of control for people with disabilities.

_**Platform Compatibility and Portability**_

A quality software should run on as much various platforms as it can. So, more people can make use of it. In different contexts we may mention different platforms, this may be OS platforms, browser types etc. And portability is about adapting software that can run on different platforms, for being more platform compatible. In this sense, portability is also related with flexibility

_**Testability and Manageability**_

Quality software requires quality testing. Source code should be tested with the most coverage and with the most efficient testing methods. This can be performed by using encapsulation, interfaces, patterns, low coupling etc. techniques correctly. Besides testability, a qualified software should be manageable after deployment. It may be monitored for e.g. performance or data usage status, or may enable developer to configure system easily. Creating a successful logging system is another very important issue about managability.

_**Security**_

Security is a very important issue on software development, especially for web or mobile based ones which may have millions of users with the ability of remote accessing to system. You should construct a security policy and apply it correctly by leaving no entry points. This may include authorization and authentication techniques, network attack protections, data encryption and so on. all possible types of security leaks should be considered, otherwise one day only one attack may crash your whole applicaion and whole company.

_**Functionality and Correctness**_

Functionality (or correctness) is the conformity of the software with actual requirements and specifications. In fact this is the precendition attribute of an application, and maybe not a quality factor but we wanted to point that as the last quality factor, for taking attention: Quality factors are not meaningful when we are talking about unfunctional software. First, perform desired functionality and produce correct software, then apply quality factors on it. If you can perform both in paralel, it is the best.

### What libraries are being used in the app and why?

_**React**_

_**MongoDB**_

_**Express**_

_**Node.js**_

_**Mongoose**_

_**Material UI**_

### A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

### Within your own project what knowledge or skills were required to complete your project, and overcome challenges?

### Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?
