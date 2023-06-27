![npm version](https://img.shields.io/badge/npm-9.6.4-green)
![node](https://img.shields.io/badge/node-v19.0.1-blue)

# Project: Hotel Booking And Management 

> The Hotel Booking and Management project is a web application developed using **Node.js (ExpressJS)** for *Backend*, **React.js** for *frontend* and **Moogoose** for building and storing database, as well. It provides a platform for users to search, book, and manage hotel reservations online. The project aims to streamline the hotel booking process and simplify hotel management tasks.

## Prerequisites

This project requires NodeJS (version 19 or later) and NPM (version 9 or later).
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
9.6.4
v19.0.1
```

## Table of contents

- [Project Name](#project-name)
  - [Prerequisites](#prerequisites)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Serving the app](#serving-the-app)
  - [Contributing](#contributing)
  - [Addition](#addition)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone Booking4T https://github.com/PhamDuyTruong/Booking4T/
$ cd Booking4T
```

To install and set up the initial libraries in both *frontend* and *Backend* folders, run the two following commands below:

> ~/Booking4T/frontend
```sh
$ npm install
```

> ~/Booking4T/Backend
```sh
$ npm install
```
After that, it will resolve all required dependencies from the `package.json` file of both directory. Then, it is about to make the app servered!

## Usage

### Serving the app

> ~/Booking4T
```sh
$ npm run watch
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -m 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Addition

- The application has two main components: the frontend and the backend. The frontend, built with **React.js**, provides an intuitive user interface where customers can search for hotels based on various criteria such as location, dates, and room types. It also enables users to view hotel details, amenities, and prices before making a reservation.

- Upon selecting a hotel and filling out the necessary information, the backend, developed using **Node.js** with **Express** framework, handles the booking process. It interacts with a database to store and retrieve hotel information, user details, and reservation data. The backend also integrates with payment gateways to facilitate secure online transactions.

- Additionally, the project includes a management system that allows hotel administrators to handle various tasks efficiently. Through the management system, administrators can view and manage reservations, update hotel details, add or remove rooms, and generate reports on occupancy and revenue.

- The Hotel Booking and Management project utilizes modern web technologies to create a seamless and user-friendly experience for both customers and hotel administrators. It simplifies the hotel booking process, enhances efficiency in managing reservations, and provides valuable insights for hotel owners to make informed decisions.

## Authors

* **Pham Duy Truong**  - [TruongPham](https://github.com/PhamDuyTruong/)

* **Ngo Nguyen Quang Tu** - [TuNgo](https://github.com/SmilinOwls/)

See also the list of [contributors](https://github.com/PhamDuyTruong/Booking4T/contributors) who participated in this project.

## License

[MIT License](https://andreasonny.mit-license.org/2019) © Booking4T
