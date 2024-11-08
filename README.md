# FriendFinder is a social app to connect Zewailians together

**FriendFinder is a responsive web application utilizing [react framework](https://github.com/facebook/react) and [express.js](https://github.com/expressjs/express).**

---

## Table of Contents

* [Installation](#installation)
* [Features](#features)
* [Documentation & Issues](#documentation--issues)
* [Testing](#testing)
* [How to Contribute](#how-to-contribute)

---

## Installation

Install [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/install/) Which is part of Docker Desktop.

If you decide to not use Docker Desktop Please follow the documentation provided above that is relevant to your operating system.

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 18 or higher is required.

Installation is done using the `npm init` command to install the needed dependencies.

And then running `sudo docker-compose up --build`

## Features

* a signup/login feature.
* analysis and recommendation algorithm.
* matching system.
* multi-user chatting.
* User Interaction Features like:
  * Blocking
  * Adding
  * Group Chats
* Encrypted Chats using Public Key Technology.
* Malicious Content flagging system.
* Chat Report System.

## Documentation & Issues

Functional Documentation will be generated using [Docusaurus](https://docusaurus.io/) and added into the project.

[Swagger](https://swagger.io) will be used for API documentation.

## Testing

[Jest](https://jestjs.io/) is used for unit testing And E2E Testing will be done using [puppeteer](https://pptr.dev/)

## How to Contribute

This project follows the [AirBnb Javascript Style Guide](https://github.com/airbnb/javascript).

This should be followed to maintain consistency.

#### For Bugs this checklist should be followed

* [ ] A **Bug**
  * [ ] details expected state vs. actual state
  * [ ] offers a step-by-step guide on how to reproduce the issue
  * [ ] includes environment details
        <br>_(e.g. physical device, operating system, browser)_
  * [ ] may have additional assets attached
        <br>_(e.g. screenshots, videos)_

#### For Pull Requests to be accepted

* All Acceptance criteria have to be met
      <br>_(e.g. functional test is performed, no known defects exist, no regressions are introduced)_

* [ ] The code is checked into Git, and is part of the primary development branch
* [ ] The code is tested, and tests are successfully executed as part of a CI/CD pipeline
* [ ] The code follows the agreed upon style guide and conventions.

- [ ] The code has been reviewed by at least one team member other than its creator (four-eyes principle)
