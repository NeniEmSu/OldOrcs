# Oldorcs

> Брендинг • Дизайн • Друк

## Nuxt + Express codebase (CRUD, auth, advanced patterns, etc)

### [Demo](https://oldorcs.netlify.app)

### The stack on the FrontEnd is based on

1. Nuxt
2. Vue
3. VueX
4. Bootstrap-Vue
5. Axios
6. Nuxt-Auth
7. PWA
8. SCSS
9. Jest
10. Eslint
11. Bootstrap Icon

### The stack on the BackEnd is based on

1. Node Express
2. MongoDB
3. Jwt
4. MVC
5. Bcrypt

### Needs an env file to start this app

```env

BASE_URL=http://localhost:3000

MONGO_DB_CONNECTION="link to mongo database"

JWT_SECRET='WRITE_A_RANDOM_TOKEN_YOU_WOULD_LIKE_USED_FOR_AUTH'

PORT=3000

GOOGLE_ANALYTICS_ID

```

![picture 01](/assets/img/oldorcsLogo.svg)

Backend

- [ ] Backend Testing
- [ ] Inprove error handling responses
- [ ] Create histories routes, model and controllers
- [ ] Create tabs routes, model and controllers
- [ ] create and use backend admin middleware
- [ ] Set up mongodb mongoose one to many  relationship between songs and users
- [x] search functionality
- [x] protect routes with auth middleware
- [x] create and use backend auth middleware
- [x] Req.body validation with @hapi/joi
- [ ] Learn how to and improve auth security
- [ ] add roles to users
- [x] Create users routes, model and controllers
- [x] Set up express api, cors, proxy settings and basics

Frontend

- [ ] Frontend Testing
- [ ] add animation
- [ ] display correct application statuses (logged in, online, logged out, loading)
- [ ] add full PWA support
- [ ] generate routes
- [ ] set up proper seo
- [ ] add robots.txt
- [ ] add sitemap
- [ ] UX/UI logic refactor
- [ ] add Skeleton loaders
- [ ] Dynamic switch IOS and other platform config
- [ ] Fixed safari issue and related issues on IOS platform
- [ ] Fixed desktop safari playing issues
- [ ] Home page restructure for desktop view
- [ ] theme and color settings
- [ ] animated transition
- [ ] theme switch (dark and light)
- [ ] responsive design improvements
- [x] search functionality
- [ ] frontend login & registration form validation
- [x] use bootstrap icons opposed to fontawesome
- [x] display logged in, signed in and out statuses globally
- [x] improve error handling and display
- [ ] create and use frontend admin middleware
- [x] allow to review password
- [x] frontend user Registration
- [x] frontend user authentication (login, logout and fetchUser data)
- [x] proper navigation
- [x] state management init
- [ ] add readme documentation for all major directories
- [x] setup readme for documentation
- [x] Project initialization

## Making requests to the backend API

The source code for the backend node express server is located at the "server" subdirectory of the above repo.

### Considerations for your backend without [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)

If the backend is about to run on a different host/port than the frontend, make sure to handle `OPTIONS` too and return correct `Access-Control-Allow-Origin` and `Access-Control-Allow-Headers` (e.g. `Content-Type`).

### Authentication Header

`Authorization: Token jwt.token.here`

## JSON Objects returned by API

Make sure the right content type like `Content-Type: application/json; charset=utf-8` is correctly returned.

### Login (for authentication)

```JSON
{
  "message":"Logged in successfully!",
  "type":"success",
  "userId":"5ebbe0ed829b1f13b0f44d83",
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJ1c2VySWQiOiI1ZWJiZTBlZDgyOWIxZjEzYjBmNDRkODMiLCJwaWN0dXJlIjoiaHR0cHM6Ly9naXRodWIuY29tL251eHQucG5nIiwiaWF0IjoxNTkwMTg1MzUzLCJleHAiOjE1OTAyNzE3NTN9.nncXAOvZtNvuJAugZOGB4GW5lf09CzsKDuF_YwQq3zM"
}
```

### User (for authentication)

```JSON
{
  "type":"success",
  "user":
  {
    "id":"5ebbe0ed829b1f13b0f44d83",
    "email":"emmanuelneni@gmail.com",
    "picture":"https://github.com/nuxt.png",
    "name":"emmanuelneni",
    "userName":"neniemsu"
  }
}
```

### Single Service

```JSON
{
    "_id":"5ea92620873bcd54bc17b7f2",
    "createdAt":"2020-04-29T06:54:14.492Z",
    "updated":"2020-04-29T06:54:14.492Z",
    "title":"Оперативна поліграфія",
    "phone":"+380932589266",
    "__v":0
  }
```

### All Services

```JSON
[
  {
    "_id":"5ea92620873bcd54bc17b7f2",
    "createdAt":"2020-04-29T06:54:14.492Z",
    "updated":"2020-04-29T06:54:14.492Z",
    "title":"Оперативна поліграфія",
    "phone":"+380932589266",
    "__v":0
  }
]
```

### Single Work

```JSON
{
  "comment": {
    "id": 1,
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:22:56.637Z",
    "body": "It takes a Jacobian",
    "author": {
      "userName": "jake",
      "bio": "I work at statefarm",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false
    }
  }
}
```

### All Works

```JSON
[
  {
    "images":
        [
          {
            "fieldname":"images",
            "originalname":"cycler1.jpg",
            "encoding":"7bit",
            "mimetype":"image/jpeg",
            "destination":"server/images",
            "filename":"2020-05-04T12-51-46.262Zcycler1.jpg",
            "path":"server\\images\\2020-05-04T12-51-46.262Zcycler1.jpg",
            "size":517273
          },
          {
            "fieldname":"images",
            "originalname":"cycler2.jpg",
            "encoding":"7bit","
            mimetype":"image/jpeg",
            "destination":"server/images",
            "filename":"2020-05-04T12-51-46.551Zcycler2.jpg",
            "path":"server\\images\\2020-05-04T12-51-46.551Zcycler2.jpg",
            "size":639561
          },
          {
            "fieldname":"images",
            "originalname":"thumnail.jpg",
            "encoding":"7bit",
            "mimetype":"image/jpeg",
            "destination":"server/images",
            "filename":"2020-05-04T12-51-46.575Zthumnail.jpg",
            "path":"server\\images\\2020-05-04T12-51-46.575Zthumnail.jpg",
            "size":212785
          }
        ],
        "_id":"5eb00fe23fd24318d097ac5d",
        "title":"Заголовок",
        "description":"Це набір колірних, графічних, словесних, типографських, дизайнерських, постійних елементів (констант), що забезпечують візуальну і змістову єдність товарів (послуг) усієї вихідної від фірми інформації, її внутрішнього оформлення.",
        "thumbnail":
        [
          {
            "fieldname":"thumbnail",
            "originalname":"aitchat.jpg",
            "encoding":"7bit",
            "mimetype":"image/jpeg",
            "destination":"server/thumbnails",
            "filename":"2020-05-04T12-51-46.256Zaitchat.jpg",
            "path":"server\\thumbnails\\2020-05-04T12-51-46.256Zaitchat.jpg",
            "size":34531
          }
        ],
        "createdAt":"2020-05-04T12:51:46.687Z",
        "updatedAt":"2020-05-04T12:51:46.687Z",
        "__v":0}]
```

## Endpoints

### Authentication

`POST /api/auth/login`

Example request body:

```JSON
{
  "user":{
    "email": "jake@jake.jake",
    "password": "jakejake"
  }
}
```

No authentication required, returns a [success](callse the get users route)

Required fields: `email`, `password`

### Get Users

`POST /api/auth/user`

Example response body:

```JSON
{
  "type":"success",
  "user":
  {
    "id":"5ebbe0ed829b1f13b0f44d83",
    "email":"emmanuelneni@gmail.com",
    "picture":"https://github.com/nuxt.png",
    "name":"emmanuelneni",
    "userName":"neniemsu"
  }
}
```

### Registration

`POST /api/auth/signup`

Example request body:

```JSON
{
  "user":{
    "userName": "Jacob",
    "email": "jake@jake.jake",
    "password": "jakejake"
  }
}
```

No authentication required, returns a [User](#users-for-authentication)

Required fields: `email`, `userName`, `password`

### Get Current User

`GET /api/auth/user`

Authentication required, returns a [User](#users-for-authentication) that's the current user

### Update User

`PUT /api/auth/user`

Example request body:

```JSON
{
  "user":{
    "email": "jake@jake.jake",
    "userName": "something",
  }
}
```

Authentication required, returns the [User](#users-for-authentication)

Accepted fields: `email`, `userName`, `password`

### List works

`GET /api/works`

Returns most recent works globally by default, provide `category`,  and `subCategory` query parameter to filter results

Query Parameters:

Filter by category:

`?category='branding'`

Filter by subCategory:

`?subCategory='logos'`

Limit number of works (default is 20):

`?limit=20`

Offset/skip number of works (default is 0):

`?offset=0`

Authentication optional, will return [multiple works](#multiple-works), ordered by most recent first

### Get work

`GET /api/work/:_id`

No authentication required, will return [single work](#single-work)

### Create work

`POST /api/work`

Example request body:

```JSON
{
  "work": {
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "You have to believe",
    "tagList": ["reactjs", "angularjs", "dragons"]
  }
}
```

Authentication required, will return an [Work](#single-work)

Required fields: `title`, `description`

### Update Work

`PUT /api/work/:_id`

Example request body:

```JSON
{
  "work": {
    "title": "Did you train your dragon?"
  }
}
```

Authentication required, returns the updated [Work](#single-work)

Optional fields: `title`, `description`

The `slug` also gets updated when the `title` is changed

### Delete Work

`DELETE /api/works/:_id`

Authentication required

## Functionality overview

The example application is a social blogging site (i.e. a Medium.com clone) called "Conduit". It uses a custom API for all requests, including authentication. You can view a live demo over at <https://redux.productionready.io/>

**Admin functionality:**

1. Authenticate admin via JWT (login/register pages + logout)

2. CRUD Works
  -Create works
   -titlt
   -description
   -category
   -subCategory
   -thumbnain
   -images
  -Read works date created desc
  -Update
  -Delete by id
    -Deletes thumbnail related to document
    -Deletes images related to document
    -Deletes document

3. GET and display paginated lists of Works

4. RUD Requested services
 -Read requests sorted bu date created desc
 -Update
  -Client name
  -Job description: services description
  -Job status
   -Pending: yet to call/contact client
   -Unable to make contact
   -Processing: Contacted and working on job
   -Reviewing: Under review by clent
   -Done: Job complete
 -Delete by id

**The general page breakdown looks like this:**

- Home page (URL: / or /ru )
  - #hero
  - #sevices
  - #works
  - #contacts
  - /title_slug/_id for individual work displaying as a nuxt-child on the home page (URL: / or /ru )
- Sign in/Sign up pages (URL: /admin/login, /admin/register )
  - Use JWT (store the token in localStorage)
- Admin (URL: /admin protectes by auth middleware which would redirect to /admin/login when not logged in.)
  - Protected by auth middleware from nuxt
  - (URL: /admin/register protected by auth middleware on frontend and backend.)
  - (URL: /admin/work/_id to go to view and edit individual work .)

## Deployment Setup

### Options

1. Deploy main branch with npm run build or npm run generate as stated below.

### nginx

- [Using nginx as a reverse proxy](https://nuxtjs.org/faq/nginx-proxy/)
- [Blog post on the deployment process to nginx](https://www.waysquare.com/creating-vue-js-application-using-nuxt-js-and-nginx/)
- [Deploy nuxt app (Vue.js) with Pm2 and Nginx](https://kenyaappexperts.com/blog/deploy-vue-js%E2%80%8A-with-pm2-and-nginx/)

<!-- Given the .env page is populated with relevant data -->

Note:

1. Server port points to

```bash
server: {
    port: 3000, # update according to server requirements
    host: '0.0.0.0'
  },
```

as updated in nuxt.config.js coment section out or update places it's needed on nginx deployment.
2. Your webserver is not aware of the routing inside your Vue application, so you'll need to have Nginx point all requests to the application to the index.html and after that Vue routing will take over. The documentation can be found [here](https://router.vuejs.org/guide/essentials/history-mode.html).

The required configuration snippet copied from there is the following:

```bash
location / {
  try_files $uri $uri/ /index.html;
}
```

Or if using nginx proxy, The documentation can be found [here](https://nuxtjs.org/faq/nginx-proxy/)

#### Nginx Proxy

For Nginx you can add a proxy using the follwing location block:

```yaml
server {
    location / {
        proxy_pass http://http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### Process Manager

In production you need a process manager to keep the Node server alive forever:

```bash
# install pm2 process manager
npm install -g pm2

# startup script
pm2 startup

# start process
pm2 start npm --name "tab-tracker" -- run start

# save process list
pm2 save

# list all processes
pm2 l
```

After each deploy you'll need to restart the process:

```bash
pm2 restart tab-tracker
```

To update, install, generate and restart server with all new changes from github use the bellow command

```bash
npm run update
```

Make sure to read the [Nuxt docs](https://nuxtjs.org/).

More Information on deploying to Nginx

```bash
map $sent_http_content_type $expires {
    "text/html"                 epoch;
    "text/html; charset=utf-8"  epoch;
    default                     off;
}

server {
    listen          80;             # the port nginx is listening on
    server_name     your-domain;    # setup your domain here

    gzip            on;
    gzip_types      text/plain application/xml text/css application/javascript;
    gzip_min_length 1000;

    location / {
        expires $expires;

        proxy_redirect                      off;
        proxy_set_header Host               $host;
        proxy_set_header X-Real-IP          $remote_addr;
        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto  $scheme;
        proxy_read_timeout          1m;
        proxy_connect_timeout       1m;
        proxy_pass                          http://127.0.0.1:3000; # set the adress of the Node.js instance here
    }
}
```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
