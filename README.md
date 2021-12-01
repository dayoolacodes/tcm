In the project directory, you can run:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Please ensure you follow the agreed structure and rules to preserve the sanity of the project

## Contributing

Ideally you should create a branch for every new feature off the `develop`. Always use the
`develop branch` as source of truth to sync with your branch before and after building to avoid
conflicts on `develop`. Raise a PR against `develop` which should be reviewed by other team members
before merging into `develop`.

## Structure

App is divided into two parts `UnAuthenticated` and `Authenticated app`. Unauthenticated app
contains all the routes and pages user should see without signing in (login, signup, forgot password
....) Authenticated app houses all the routes and features user should see after signing in.

### Auth

Auth protection is handled in the `App.js` file. Frontend checks for boolean flag from server to
ensure the user is verified and then pushed to authenticated app.

### Server state management

Interaction with the server and storage of server state is handled in the `lib/` folder. This
contains 3 folders: `api/`, `queries/` and `utils/`. `api/` contains api routes for resources.
`queries/` contains server state implementation using
[react-query](https://react-query.tanstack.com/overview)

### State management

State management is handled with react. `useState` `useReducer` and `useContext` are used in this
project. Contexts are setup in the `contexts/` folder and reducers are setup in the `reducer/`
folder.

### UI

User interface is built using Emotion and Chakra UI as the component library of choice. Global/base
styles are located in the `styles/` folder

### Routes

Routes are setup in the `routes/` folder. `routeList.js` contains all the routes and respective
components in this projects.

### Layout

The `layout` contains layout container for authenticated and un-authinticated app respectively

### Linting

ESLint, Prettier, husky and lint-staged are used in this project. Check `package.json` and `rc`
files for rules. There are also git hooks setup on commit and push.

### Others

Assets are located at `assets/`. Utils functions are located at `utils/` and components are located
at `components/`
