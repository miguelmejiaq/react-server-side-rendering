# Server Side Rendering with React

This is a base project for Server Side Rendering (SSR) using react.

Before start, you must install all dependencies of the project. Run the next command in order to proceed with this step.

```bash
npm install
```



## Adding authentication

This section include the authentication module. It means that application shows 'Login' or 'Logout' option, depends of the authentication state. For make it works, we introduce a proxy into the axios configuration in order to tell the api that can bypass the cookies and authenticate the request over the heroku test api.

This authentication require a google account to work.


for running this branch, try with:

```bash
npm run dev
```