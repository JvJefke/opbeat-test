# [PROJECT-NAME] v1.0.0 #
Short description of the project.


# Table of contents #

* [Setup](#setup)
    * [System Dependencies](#system-dependencies)
    * [Init](#init)
* [Codebase](#codebase)
    * [Structure](#structure)
    * [NPM Scripts](#npm-scripts)
* [Code Contribution](#code-contribution)
    * [Guidelines](#guidelines)
    * [Branches](#branches)
* [Environments](#environments)
* [Project Context](#project-context)
    * [Details](#details)
    * [Team](#team)



## Setup ##

### System Dependencies ###

* List the system dependencies here.
* Make sure to keep in mind that NPM packages that can be installed locally, should be installed locally.
* E.g. [MongoDB 3.4.4](https://www.mongodb.com/)
* E.g. [Node 6.10.2](https://nodejs.org/en/)

### Init ###

* List the actions that are required to run the project
* `nvm use` [Check out NVM AutoSwitch](https://github.com/lalitkapoor/nvm-auto-switch)
* `npm install` or `npm i`


## Codebase ##

### Structure ###
* **server/**: Contains the NodeJS server that serves the app and contains business logic.
* **client/**: Contains the Angular website logic.
* **config/**: Contains project-wide configuration properties.

### External Services ###

This project implements several external services:

* **External Service 1**: Used for fetching news articles.
* **External Service 2**: User for indexing content in Solr.


### NPM Scripts ###

| Command       | Description                                 |
| ------------- | ------------------------------------------- |
| start         | Install dependencies and start Docker.      |
| clean         | Remove the coverage folder.                 |
| projectsheet  | Open the projectsheet on Google Drive       |
| lint          | Run all the lint tasks                      |
| lint:eslint   | Run eslint                                  |
| lint:docker   | Run eslint inside Docker container          |
| test          | Run tests                                   |
| test:docker   | Run tests inside Docker container           |
| fixtures      | Seed the database                           |

All commands are executable by running `npm run [COMMAND-NAME]`.



## Code Contribution ##

### Guidelines ###


### Branches ###

We follow these naming conventions:

* **master**: Production-ready code.
* **develop**: Development code.
* **release/***: Snapshot of a release.
* **feature/***: For developing new features.
* **bugfix/***: For bugs that are logged during testing.
* **hotfix/***: Only for hotfixing critical bugs from the `master`-branch.



## Environments ##

### Development ###

The development environment receives automatic builds when code is contributed to the `development`-branch. This environment is expected to break from time to time and thus should be used for **internal testing only**!

**URL**: [https://bitbucket.org/district01/boilerplate/overview](https://bitbucket.org/district01/boilerplate/overview)

### Staging ###

The staging environment receives automatic builds when code is contributed to the `master`-branch. This environment is expected to remain stable and should be used for **client validation testing**.

**URL**: [https://bitbucket.org/district01/boilerplate/overview](https://bitbucket.org/district01/boilerplate/overview)

### Production ###

The production environment is built manually from the `master`-branch. This environment has to be **stable at all times**. No unvalidated code can be deployed on this environment.

**URL**: [https://bitbucket.org/district01/boilerplate/overview](https://bitbucket.org/district01/boilerplate/overview)



## Project Context ##

This project is a District01 team effort.

### Details ###

* **Client**: District01
* **Start**: 12/10/2017
* **Jira Board**: http://www.district01.be
* **Drive Folder**: http://www.district01.be
* **Project Sheet**: http://www.district01.be

### Team ###

List the team that has worked on this project, including the duration e.g.:

* [Developer 1 - District01](developer-1@district01.be)
    * **Function**: Lead Front-End Dev
    * **Period**: October 2017 -> December 2017
* [Developer 2 - District01](developer-2@district01.be)
    * **Function**: Lead Technical Dev
    * **Period**: October 2017 -> December 2017
