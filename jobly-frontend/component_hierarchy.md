# Component Hierarchy

### Understanding your app.

#### You have your routes

- Login Screen
- Sign Up button allows you to register a user to the db, after successfully creating an account you're redirected to homepage.

- NavBar across all pages
- Homepage when user is logged in.

- Company routes
    - search bar to search for companies
    - Lists of companies
    - when clicked on displays a list of jobs from that company

- Job routes
    - Search bar to search for jobs
    - list of, you guessed it, jobs...
        - each item displays occupation, company, salary, and equity along with an "apply" button
        - clicking apply button switches component to "applied".
        - Note: no indication of applications that user has applied to. Doesn't show user the jobs they've applied to.

- Profile route
    - allows user to make changes to first name, last name, email, but not Username (probably because it's a key that associates the data to that user);

- Log out button does exactly as it says, logs you out and redirects you to login.

### Figuring out component hierarchy

**main.jsx**                Where our routes will go, handles form data

**NavBar** links to several routes
- *doesn't keep state*

