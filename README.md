# React Jobly

**In this sprint, you'll create a React front-end for the Jobly backend**

### Setup

- **The backend for this will be our solution to the *express-jobly* exercise.**
- [x] **Use this** instead of the backend you built for jobly - ours is feature-complete with what the front-end will need.
- [x] Re-create the ***jobly*** database from the backend solution using the ***jobly.sql*** file
- [x] Create a new React project
- [x] It may help to take a few minutes to look over the backend to remind yourself of the most important routes.
- [x] Start up the backend. We have it starting on port 3001, so you can run the React front-end on 3000.

### Step 1: Design Component Hierarchy

It will help you first get a sense of how this app should work.

- [x] We have a demo running at [http://joelburton-jobly.surge.sh](http://joelburton-jobly.surge.sh). Take a tour and note the features.
- [x] Please register as a new user to explore the site

A big skill in learning React is to learn to design componenthierarchies.

It can be very helpful to sketch out a hierarchy of components, especially for larger apps like this.

Once you've done this, it's useful to think about the props and state each component will need. Deciding *where* individual state is needed is one of the most critical things to figure out.

### Step 2: Make an API helper

Many of the components will need to talk to the bakend (the company detail page will need to load data about the company, for example).

It will be messy and hard to debug if these components all had AJAX calls buried inside of them.

- [x]  Instead, make a single ***JoblyAPI*** class, which will have helper methods for centralizing this information. This is conceptually similar to having a model class to interact with the database, instead of having SQL scattered all over your routes.

You won't build authentication into the front end for a while -- but the backend needs a token to make almost all API calls. Therefore, for now, we've hard-coded a token in here for the user "testuser", who is also in the sample data.

Logging into your site (post-authentication implementation)

**Username**: *testuser*

**Password**: *password*

### Step 3: Make your routes file

Look at the working demo to see the routes you'll need:

- [x] **/**: Homepage -- just a simple welcome message
- [x] **/companies**: List all companies
- [x] **/companies/:handle**: View details of this companies handle
- [x] **/login**: Login/signup
- [x] **/signup**: signup form
- [x] **/profile**: edit profile page

- [x] Make your routes file that allows you to navigate a skeleton of your site. Make simple placeholder components for each of the feature areas.
- [x] Make a navigation component to be the to-of-window navigation bar, linking to these different sections.

When you work on authentication later, you need to add more things here. But for now, you should be able to browse around the site and see your placeholder components.

### Step 4: Company & Company Detail

- [x] Flesh out your components for showing detail on a company, showing the list of all companies, and showing simple info about a company on the list (we called these ***CompanyDetail***, ***CompanyList***, and ***CompanyCard***, respectively -- but you might have used different names).

- [x] Make your companies list have a search box, which filters companies to those matching the search (remember: there's a backend endpoint for this!). Do this filtering in the backend -- **not** by loading all companies and filtering the front end!

### Step 5: Jobs

- [x] Similarly, flesh out the page that lists all jobs, and the "job card", which shows info on a single job. You can use this component on both list-all-jobs page as well as the show-detail-on-a-company page.

- [x] Don't worry about the "apply" button for now -- you'll add that later, when there's authentication for the app.

### Step 6: Current User

This step is tricky. Go slowly and test your work carefully.

- [x] Add features where users can 
    - [x] Log in
    - [x] Sign up
    - [x] Log out

- [x] This should  use the backend routes design for authentication and registration

- [x] When the user logs in or registers, retrieve information about that user and keep track of it somewhere easily reached elsewhere in the application.

Things to do: 

- [x] Make forms for logging in and signing up
- [x] In the navigation, show links to the login and signup forms if a user is not currently logged in.
- [x] If someone is logged in, show their username in the navigation, along with a way to log out.
- [x] Have the homepage show different messages if the user is logged in or out.
- [x] When you get a token from the login and register processes, store that token on the ***JoblyApi*** class, instead of always using the hardcoded test one. You should also store the token in state high up in your hierarchy; this will let you use an effect to watch for changes to that token to kick off a process of loading the information about the new user.

- [x] Think carefully about where functionality should go, and keep your components as simple as you can. For example, in the ***LoginForm*** component, its better design that this doesn't handle directly all the parts of logging in (authenticating via API, managing the current user state, etc). The logic should be more centrally organized, in the ***App*** or a specialized component.

- [x] While writing this, your server will restart often, which will make it tedious to keep typing in on the login and signup forms. A good development tip is to hardcode suitable defaults onto these forms during development; you can remove those defaults later.

### Step 7: Using localStorage and Protecting Routes

- [x] If the user refreshes their page or closes the browser window, they'll lose their token. Find a way to add ***localStorage*** to your application so instead of keeping the token in simple state, it can be stored in localStorage. This way, when the page is loaded, it can first look for it there.

- [x] Be thoughtful about your design. It's not great design to have calls to reading and writing localStorage spread around your app. Try to centralize this concern somewhere.

- [x] As a bonus, you can write a generalized ***useLocalStorage*** hook, rather than writing this tied specifically to keeping track of the token.

#### Protecting Routes

- [x] Once React knows whether or not there's a current user, you can start protecting certain views! Next, make sure that on the front-end, you need to be logged in if you want to access the companies , company details, or a job page.

### Step Eight: Profile Page

- [x] Add a feature where the logged-in user can edit their profile. Make sure that when a user saves changes here, those are reflected elsewhere in the app.

### Step Nine: Job Applications

- [x] A user should be able to apply for jobs (there's already a backend endpoint for this!).

- [x] On the job info (both on the jobs page, as well as the company detail page), add a button to apply for a job. This should change if this is a job the user has already applied to.

### Step Ten: Deploy your applications

- [x] We're going to use Render to deploy our backend and frontend! Before you continue, make sure you have two folders, each with their own git repository ( and make sure you do not have one inside of another!)

It's important to have this structure because we need two different deployments, one for the front-end and one for the backend.

#### The Database ( for ElephantSQL )

> Note: ElephantSQL has reached it's End-of-life and is now shutdown. Will be using avien as the database.

#### Deployement on Render

**Backend First!**

At User Dashboard choose **New Web Service**. Build and deploy from git repository (If none of your repos are appearing click on Configure Account and make sure you've linked the proper Github account to Render). Choose your jobly backend repository.

You can name it anything you want, but keep in mind that future employers may look at this.

- [ ] Choose Oregon (US West)

You should not need to change any other entries, but they should be:

- [ ] Node -> npm install -> node server.js

You will need to make three environment variables

| --- | --- | --- |
| SECRET_KEY | The value can be any string you want |
| NODE_ENV | Must be the string "production" |
| DATABASE_URL | Copy and paste the url from your Supabase database. |

You will be taken to the logs screen of your back end. You should see it compile and deploy

**There will be two 404 errors**

- One is trying to go to the / directory of the bakend. It does not have one.
- The other is trying to load a favicon. Unless you add one, the error will persist, however, this isn't necessary and you can ignore both errors.

To test your bakend, go to the url listed towards to top of the web service page, just under the name for the app and the GitHub address. Copy that url into your browser and add companies at the end like so.

