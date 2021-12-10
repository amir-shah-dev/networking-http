# Advanced Networking HTTP Assignment

An API that can compute basic integer arithmetic. See below for valid examples of requests:

### GET:

- `https://vigorous-mestorf-4516e1.netlify.app/{add,subtract,multiply,divide}/x/y`
  - `https://vigorous-mestorf-4516e1.netlify.app/add/4/2`

### POST:

- Endpoint: `https://vigorous-mestorf-4516e1.netlify.app`
- Body (JSON):  `{"operation":"add","arguments":[4,2]}`

### Notes:

- You can use the same operators in GET and in POST
- Both **x** and **y** request int parameters are limited to the **64-bit** maximum
- Please ensure that you run `curl` commands with the `-L` flag enabled, since you will be redirected automatically to port 443 (HTTPS) if you query port 80 (HTTP)


## How to use:

- See website: https://vigorous-mestorf-4516e1.netlify.app/
- See Github Repo: https://github.com/axs-44/networking-http

- To run locally (HTTP Only):
  - In project root, run the following commands
    - `npm install express serverless-http body-parser`
    - `sudo npm install -g netlify-cli`
  - To run the project enter: `netlify dev`
  - Access the project on `localhost:8888`

## Technologies used:
- Language
  - JavaScript
- Middleware, Routing
  - Express.js
- Backend
  - Node.js
- Hosting provider
  - Netlify


