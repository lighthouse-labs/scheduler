# Interview Scheduler

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
## Peer Dependencies
react-hooks-testing-library does not come bundled with a version of react or react-test-renderer to allow you to install the specific version you want to test against. Generally, the installed versions for react and react-test-renderer should have matching versions:

npm install react@^16.9.0
npm install --save-dev react-test-renderer@^16.9.0
Both of these dependecies must be installed as at least version 16.9.0 to be compatible with react-hooks-testing-library.
