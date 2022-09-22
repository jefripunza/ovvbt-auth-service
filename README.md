# Auth Service

<br />

---

<br />

## First Prepare

dikarenakan saya menggunakan **NodeJS**, maka yang harus dipersiapkan terlebih dahulu adalah :
| Aplikasi   | Kegunaan                                                                                   | Link                                                                     |
|------------|--------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
| NodeJS     | lingkungan javascript untuk running JS diluar browser                                      | [download & install](https://nodejs.org/en/)                             |
| Yarn       | package manager yang lebih mudah digunakan daripada **NPM**                                | [doc](https://yarnpkg.com/getting-started/usage)                         |
| Nodemon    | auto reload service jika project di save (for development only)                            | [doc](https://www.npmjs.com/package/nodemon)                             |
| ExpressJS  | framework web app untuk **NodeJS** yang ditulis dengan bahasa pemrograman JavaScript       | [doc](https://expressjs.com/en/starter/basic-routing.html)               |

---

### First Install Global Dependencies

```bash

npm i -g nodemon yarn cross-env

```

### Install Dependencies

```bash
npm install

// or

yarn install
```

### All Script App

```bash
//-> start project (if you have finished build project)

npm run start

// or

yarn start


//-> start project (development)

npm run dev

// or

yarn dev

// or

nodemon


//-> build !!!

npm run build

// or

yarn build


//-> delete node_modules and install again

yarn reset


//-> make docker image

yarn docker:build


//-> remove & update docker image

yarn docker:update
```

## Available endpoints
check on Postman Collection...
