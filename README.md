# Interview Scheduler

Modern Client application using React view library.
Development focuses on a single page application called Interview Sceduler.
Data is persisted by the API server using a PostgreSQL database.
FUNCTIONAL REQUIREMENTS:
Interviews can be booked between Monday and Friday.
A user can switch between weekdays.
A user can book an interview in an empty appointment slot.
Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.
A user can cancel an existing interview.
A user can edit the details of an existing interview.
The list of days informs the user how many slots are available for each day.
The expected day updates the number of spots available when an interview is booked or canceled.
A user is presented with a confirmation when they attempt to cancel an interview.
A user is shown an error if an interview cannot be saved or deleted.
A user is shown a status indicator while asynchronous operations are in progress.
When the user presses the close button of the error they are returned to the Form or Show view (skipping Status and Confirm).
The application makes API requests to load and persist data. We do not lose data after a browser refresh.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

##Final Product

!["Screenshot of Scheduler"](https://github.com/JayJayTing/scheduler/blob/jj/screenshots/Screen%20Shot%202019-08-16%20at%2012.09.03%20AM.png)
!["Screenshot of Scheduler"](https://github.com/JayJayTing/scheduler/blob/jj/screenshots/Screen%20Shot%202019-08-16%20at%2012.09.08%20AM.png)
!["Screenshot of Scheduler"](https://github.com/JayJayTing/scheduler/blob/jj/screenshots/Screen%20Shot%202019-08-16%20at%2012.09.13%20AM.png)
!["Screenshot of Scheduler"](https://github.com/JayJayTing/scheduler/blob/jj/screenshots/Screen%20Shot%202019-08-16%20at%2012.09.14%20AM.png)
!["Screenshot of Scheduler"](https://github.com/JayJayTing/scheduler/blob/jj/screenshots/Screen%20Shot%202019-08-16%20at%2012.09.27%20AM.png)
!["Screenshot of Scheduler"](https://github.com/JayJayTing/scheduler/blob/jj/screenshots/Screen%20Shot%202019-08-16%20at%2012.09.29%20AM.png)
!["Screenshot of Scheduler"](https://github.com/JayJayTing/scheduler/blob/jj/screenshots/Screen%20Shot%202019-08-16%20at%2012.09.31%20AM.png)
!["Screenshot of Scheduler"](https://github.com/JayJayTing/scheduler/blob/jj/screenshots/Screen%20Shot%202019-08-16%20at%2012.09.36%20AM.png)
