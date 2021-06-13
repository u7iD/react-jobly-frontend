# Jobly application in React

This mocking app for listing and applying for jobs is deployed [here](https://jobly.wuyiwang.me/). The front-end is written in React.

User of the app is able to:

- sign up for an account or log in with an existing account
- view lists of all companies
- view jobs offered by all companies
- view the details of a specific company and its job openings
- search lists of companies and jobs using keyword(s)
- apply for a job
- modify some user account information

# Technical notes

- This repo contains the front-end part of the app.

  - single page app
  - makes use of React built-in hooks useState, useEffect and useContext, as wel as a custom hook useLocalStorage
  - also uses page app React Router, including the useHistory and useParams hooks

- It makes API calls to the back-end which provides REST API bulit in Express.js. Data are stored in a PostgreSQL database.

## Component hierarchy

- App
  - LoadingSpinner
  - Navigation
  - Routes
    - PrivateRoute
    - Homepage
    - LoginPage
      - LoginForm
      - SignUpForm
    - CompanyList
      - SearchForm
      - CompanyCard
    - CompanyDetail
      - LoadingSpinner
      - JobCardList
        - JobCard
    - JobList
      - LoadingSpinner
      - SearchForm
      - JobCardList
        - JobCard
    - ProfileForm

## Component details

| Component      | props                                      | state                              | route                   |
| -------------- | ------------------------------------------ | ---------------------------------- | ----------------------- |
| App            |                                            | infoLoaded<br>token<br>currentUser |                         |
| LoadingSpinner |                                            |                                    |                         |
| Navigation     | {logout}                                   |                                    |                         |
| Routes         | {login, signup}                            |                                    |                         |
| PrivateRoute   | {exact, path, children}                    |                                    |                         |
| Homepage       |                                            |                                    | /                       |
| LoginPage      | {login, signup}                            | loginMode                          | /login                  |
| LoginForm      | {login}                                    | formData<br>formErrors             | /login                  |
| SignUpForm     | {signup}                                   | formData<br>formErrors             | /login                  |
| SearchForm     | {onSearchTermChange}                       | searchStr                          |                         |
| CompanyList    |                                            | companies, searchTerm              | /companies              |
| CompanyCard    | {company}                                  |                                    |                         |
| CompanyDetails |                                            | company                            | /companies/:companyName |
| JobList        |                                            | jobs<br>searchTerm                 | /jobs                   |
| JobCardList    | {jobs, applyForJob}                        |                                    |                         |
| JobCard        | {id, title, salary, equity, appliedStatus} | applied                            |                         |
| ProfileForm    |                                            | formData<br>formError<br>changed   | /profile                |

## Todo

- add React components tests using React Testing Library
- add end-to-end tests using Cypress
- styling improvement: on the app home page, vertically center the text below the navigation bar ("JoblyAll the jobs in one, convenient place.")
- make validation errors more user-friendly by customizing json schema error message; example of current error "instance.first_name does not meet minimum length of 1"
