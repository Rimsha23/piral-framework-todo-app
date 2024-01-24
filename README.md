# Piral Framework

Piral is for building micro frontend solutions and allows the creation of distributed web applications.

## Introduction

### Two Main Concepts

There are 2 main concepts in Piral:

1. **Pilets**:

   - Small Modules, features of the application.
   - Brings the content for the application (e.g., functionality, queries, and mutations, ...).
   - Include their own assets and dedicated dependencies.

2. **Piral Instance**:

   - Brings the overall design of the application (e.g., header, footer, navigation, ...).
   - Includes shared components that can be used by pilets.
   - Defines how pilets are loaded and where pilets can integrate their components.

## How Piral Works?

Piral uses a dynamic loading mechanism that allows it to load and unload micro frontends on-demand, improving application performance and reducing load times. It provides a plugin architecture that enables developers to extend and customize the framework’s functionality by writing plugins. Piral allows developers to share dependencies across different micro frontends, reducing the application’s overall size and improving performance.

## Getting Started

This quick start will show us how to:

1. Install the tooling for working with Piral
2. Setup an application shell based on Piral
3. Create your first pilet with some basic functions

### Setting up the Tooling

First, make sure node.js and npm are installed on your laptop.

Then install piral-cli in your laptops by running command:


`npm install -g piral-cli`


### Setup a new Piral Instance

To scaffold a new application shell based on Piral with the name my-app execute the following command in your terminal window:<br>
`` piral new --target my-app``
<br>
### Run the Application Shell

To execute the created Piral instance, navigate to the directory my-app and run the following piral-cli command:
 The output of the debug process shows the local address, which is usually http://localhost:1234.
### Create Package for the Application Shell <br>
 we need to create an npm package, which will be referenced within pilets. To create the package run the command:<br>
`npx piral build`<br>
By default, this command will create two folders within the dist folder: emulator and release.

 If you only want, e.g., the emulator package you can use the --type  flag:
 
`npx piral build --type emulator`



### Create Pilet
Ensure that you are no longer in the directory of the application shell and run the following command:

`pilet new ./my-app/dist/emulator/my-app-1.0.0.tgz --target my-pilet`

“The first parameter ./my-app/dist/emulator/my-app-1.0.0.tgz" specifies the application shell, which the pilet will be built for. “

### Start the Pilet

In the pilet folder, in our case my-pilet, execute the following command:
`npx pilet debug`

# Publishing Pilets

 working Piral system requires the following components:
 
- A functional frontend (referred to as "application shell" or "Piral instance")
- A backend/service delivering the pilets (referred to as "Feed Service")
- A way to publish/integrate the created pilets, such that they can be delivered by the feed service
## Piral Cloud Services 

In this spirit, we provide a free[1] community edition of the service that you can use for providing the feed service, as well as a way to publish your pilets. This leaves you with the task of creating a Piral instance.

The service can be found at "piral.cloud". 
## Creating a Feed in the Piral Feed Service

- First sign in or signup  throuh microsoft into piral cloud .
- Click on “Create feed” on top right corner.
- Create your feed by entering its name and relative description.
  
## Generating an API Key
- In your respective feed click “Manage API Keys Button”.
- Create API key my clicking generate API key button.
  
## Publishing a Pilet to the Feed Service
or publishing the pilet navigate to the folder of the pilet and invoke the following command:<br>

`npx pilet publish --fresh --url https://feed.piral.cloud/api/v1/pilet/tudo-feed --api-key <your-api-key>`


## Check the Pilet Upload in the Feed Service
The feed service allows you to view and manage available pilets. To view all published pilets, invoke the Manage Pilets link of the corresponding feed, in our case "my-tutorial-feed".


## Configure the Feed Service in the Piral instance

 we just need to configure our Piral instance to pull the pilets from the created feed. We need to modify the index.tsx file in the ./src folder of the Piral instance. The path to the newly created feed needs to be specified, in our case:<br> 
 
`const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/todo-feed';`

Please assign your individual feed URL accordingly. When you now launch your Piral instance using the piral-cli (piral debug), the newly published pilet will be loaded into the application shell.








    

