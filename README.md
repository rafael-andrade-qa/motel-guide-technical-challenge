# Motel Guide Technical Challenge

This repository contains a manual testing project and an automation project made based on the test plan to solve the provided technical issues.

## Summary

- [Test Questions](#test-questions)
- [Manual Test Plan](#manual-test-plan)
  - [Test Planning Contents](#test-planning-contents)
- [Automated Testing Project](#automated-testing-project)
  - [Pre-requisites](#pre-requisites)
  - [Installing](#installing)
  - [Setting Up Project Credentials](#setting-up-project-credentials)
  - [Command Table](#command-table)
  - [Perfomance Testing Documentation](#performance-testing-documentation)

## Test Questions

The technical test questions can be found in the file: [QA Technical Challenge](doc/technical-challenge.pdf).

## Manual Test Plan

👉 The manual test plan can be found [here](https://docs.google.com/spreadsheets/d/1XCmQdD8B0diNgWq6ricmzq7GF35U0faGsD9-E4jakoI/edit?gid=614193154#gid=614193154). 👈

### Test Planning Contents

| **Tab**         | **Description**                                                               |
| --------------- | ----------------------------------------------------------------------------- |
| **Dashboard**   | Graphs showing the results of the execution of the feature test batteries.    |
| **Tests**       | Table containing all executed test cases.                                     |
| **Bugs**        | Table listing all found bugs categorized by criticality and scope (Bug Rank). |
| **Suggestions** | Table containing all suggestions made during the tests.                       |
| **Data**        | Table with all necessary data to facilitate the use of the spreadsheet.       |

## Automated Testing Project

### Pre-requisites

Before you begin, make sure you have `node` and `npm` installed on your system.

### Installing

1. Clone the repository

   ```bash
   git clone https://github.com/rafael-andrade-qa/motel-guide-technical-challenge.git
   ```

2. Navigate to the repository folder

   ```bash
   cd motel-guide-technical-challenge
   ```

3. Install the dependencies.

   ```bash
   npm install
   ```

### Setting Up Project Credentials

1. Copy and Rename Configuration File

   ```bash
   cp cypress.env.example.json cypress.env.json
   ```

2. Open the newly created `cypress.env.json` file and populate it with the appropriate secrets for each environment.

   ```bash
   "CYPRESS_SUCCESS_NAME": "",
   "CYPRESS_SUCCESS_EMAIL": "",
   "CYPRESS_SUCCESS_PASSWORD": "",
   "CYPRESS_LOW_PASSWORD_NAME": "",
   "CYPRESS_LOW_PASSWORD_EMAIL": "",
   "CYPRESS_LOW_PASSWORD_PASSWORD": "",
   "CYPRESS_DIFFERENT_EMAILS_NAME": "",
   "CYPRESS_DIFFERENT_EMAILS_EMAIL": "",
   "CYPRESS_DIFFERENT_EMAILS_CONFIRM_EMAIL": "",
   "CYPRESS_DIFFERENT_EMAILS_PASSWORD": ""
   ```

### Command table

| Description                            | Command                           |
| -------------------------------------- | --------------------------------- |
| Open Cypress Test Runner UI            | `npm run cy:open`                 |
| Run All Tests (Chrome, Headless Mode)  | `npm run cy:run:chrome`           |
| Run All Tests (Firefox, Headless Mode) | `npm run cy:run:firefox`          |
| Run All Tests (Chrome, Headed Mode)    | `npm run cy:run:chrome:headed`    |
| Run All Tests (Firefox, Headed Mode)   | `npm run cy:run:firefox:headed`   |
| Run Tests in Parallel (Chrome)         | `npm run cy:run:chrome:parallel`  |
| Run Tests in Parallel (Firefox)        | `npm run cy:run:firefox:parallel` |
| Start the mock server                  | `npm run mock-server`             |
| Start the mock server                  | `npm run mock-server`             |
| Lint Code                              | `npm run lint`                    |
| Format Code                            | `npm run format`                  |

## Performance Testing Documentation

The detailed documentation for the performance tests using k6 is available in: `k6/README.md`.
