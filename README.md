# Authentication in Angular with NGRX

## Want to learn how to build this project?

Check out the [blog post]().

## Want to use this project?

1. Fork/Clone
1. Install dependencies - `npm install`
1. Run the development server - `ng serve`

You will need to also spin up a back-end with the following routes:

| URL                            | HTTP Verb | Action              |
|--------------------------------|-----------|---------------------|
| http://localhost:1337/register | POST      | Register a new user |
| http://localhost:1337/login    | POST      | Log a user in       |
| http://localhost:1337/status   | GET       | Get user status     |

The blog post uses a fake back-end that generates a dummy token to test out the functionality on the front-end. If you'd like to use it, clone down the repo in a new terminal window, install the dependencies, and fire up the app:

```sh
$ git clone https://github.com/testdrivenio/fake-token-api
$ cd fake-token-api
$ npm install
$ npm start
```

> Just keep in mind that the back-end does **not** create a real JSON Web Token (JWT). Feel free to swap it out for a working back-end or use the final application from the [Token-Based Authentication with Node](http://mherman.org/blog/2016/10/28/token-based-authentication-with-node) blog post, if you'd like.
