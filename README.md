# Jobly application in React

This project is

## Component hierarchy

- App
  - Navigation
  - Routes
    - Homepage
    - LoginForm
      - Alert
    - SignUpForm
      - Alert
    - JobList
      - SearchForm
      - JobCardList
        - JobCard
    - CompanyList
      - CompanyCard
    - CompanyDetail
      - JobCardList
        - JobCard
    - ProfileForm
      - Alert

| Component   | props                     | state                         | route                   |
| ----------- | ------------------------- | ----------------------------- | ----------------------- |
| App         | none                      | loggedIn<br>setLoggedIn       |                         |
| Routes      | none                      | none                          |                         |
| Navigation  | loggedIn                  |                               |                         |
| Homepage    | loggedIn                  | none                          | /                       |
| LoginForm   | setLoggedIn               | formData {username, password} | /login                  |
| SignUpForm  | setLoggedIn               | formData                      | /login                  |
| JobList     | none                      |                               | /jobs                   |
| SearchForm  | onSearchTermChange        | formData searchStr<br>        |                         |
| JobCardList | jobListData               |                               |                         |
| JobCard     | jobData                   | applied                       |                         |
| CompanyList | companyListData           | searchTerm                    | /companies              |
| CompanyCard | companyData               |                               | /companies/:companyName |
| ProfileForm |                           | formData                      | /profile                |
| Alert       | alertData {type, message} | none                          |

LoginForm
props: onLoggedInChange
state: formData / {username, password}

- Alert
  props: alertMessage
- SignUpForm
  props: none
  state: formData
- Alert
- JobList
  props: none
  state: jobsData, searchTerm, onSearchTermChange
- SearchForm
  props: searchTerm, onSearchTermChange
- JobCardList
  props: jobsData
  state: none
  - JobCard
    props: title, salary, equity, applicationStatus
    state: applicationStatus
- CompanyCardList
- SearchForm
- CompanyCard
- CompanyDetails
- JobCardList
- ProfileForm
  state: formData

## Route

- /
- /jobs
- /companies
- /companies/anderson-arias-and-morrow
- /profile
- /login

## Todo

Custom json schema error message; example of current error "
instance.first_name does not meet minimum length of 1"
Remove NotFound.js
