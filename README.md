# 🚀 Motel Guide Technical Challenge

This repository contains a manual testing project and an automation project made based on the test plan to solve the provided technical issues.

## 📌 Summary

- [📝 Test Questions](#test-questions)
- [📊 Manual Test Plan](#manual-test-plan)
  - [📑 Test Planning Contents](#test-planning-contents)
- [🤖 Automated Testing Project](#automated-testing-project)
  - [⚙️ Pre-requisites](#pre-requisites)
  - [📥 Installing](#installing)
  - [🔑 Setting Up Project Credentials](#setting-up-project-credentials)
  - [💻 Command Table](#command-table)
  - [⚡ Performance Testing Documentation](#performance-testing-documentation)
  - [🔄 CI/CD Implementation](#cicd-implementation)
  - [📂 Test Results](#test-results)

## 📝 Test Questions

The technical test questions can be found in the file: [QA Technical Challenge](doc/technical-challenge.pdf).

## 📊 Manual Test Plan

👉 The manual test plan can be found [here](https://docs.google.com/spreadsheets/d/1XCmQdD8B0diNgWq6ricmzq7GF35U0faGsD9-E4jakoI/edit?gid=614193154#gid=614193154). 👈

### 📑 Test Planning Contents

| **Tab**             | **Description**                                                               |
| ------------------- | ----------------------------------------------------------------------------- |
| **📊 Dashboard**   | Graphs showing the results of the execution of the feature test batteries.    |
| **✅ Tests**       | Table containing all executed test cases.                                     |
| **🐞 Bugs**        | Table listing all found bugs categorized by criticality and scope (Bug Rank). |
| **💡 Suggestions** | Table containing all suggestions made during the tests.                       |
| **📌 Data**        | Table with all necessary data to facilitate the use of the spreadsheet.       |

## 🤖 Automated Testing Project

### ⚙️ Pre-requisites

Before you begin, make sure you have `node` and `npm` installed on your system.

### 📥 Installing

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

### 🔑 Setting Up Project Credentials

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

### 💻 Command Table

| Description                                | Command                           |
| ------------------------------------------ | --------------------------------- |
| Open Cypress Test Runner UI                | `npm run cy:open`                 |
| Run All Tests (Chrome, Headless Mode)      | `npm run cy:run:chrome`           |
| Run All Tests (Firefox, Headless Mode)     | `npm run cy:run:firefox`          |
| Run All Tests (Chrome, Headed Mode)        | `npm run cy:run:chrome:headed`    |
| Run All Tests (Firefox, Headed Mode)       | `npm run cy:run:firefox:headed`   |
| Run Tests in Parallel (Chrome)             | `npm run cy:run:chrome:parallel`  |
| Run Tests in Parallel (Firefox)            | `npm run cy:run:firefox:parallel` |
| Start Mock Server                          | `npm run mock-server`             |
| Run Load Tests                             | `npm run load-test`               |
| Run Load Tests and save the results (JSON) | `npm run load-test:results`       |
| Lint Code                                  | `npm run lint`                    |
| Format Code                                | `npm run format`                  |

## ⚡ Performance Testing Documentation

The detailed documentation for the performance tests using k6 is available in: [Performance Tests with k6 documentation](k6/README.md).

## 🔄 CI/CD Implementation

Continuous Integration and Continuous Deployment (CI/CD) workflows have been set up to automate test execution. These workflows run automatically to ensure code quality and performance validation.

### 🖥️ UI & API Tests

The UI tests were conducted on a custom-built frontend designed specifically for this challenge. You can check out the implementation here:

🔗 Frontend Project Repository: [Motel Guide Frontend](https://github.com/rafael-andrade-qa/motel-guide-frontend)

🌍 Live Demo: [Motel Guide Page](https://rafael-andrade-qa.github.io/motel-guide-frontend/)

The **E2E Test Workflow** runs end-to-end tests for UI and API, ensuring the system functions as expected in an integrated environment.  
🔗 [View Workflow Run](https://github.com/rafael-andrade-qa/motel-guide-technical-challenge/actions/runs/13216944628)

### 🚀 Performance Tests

The **Load Test Workflow** executes performance tests to evaluate the system's scalability and response times under load conditions.  
🔗 [View Workflow Run](https://github.com/rafael-andrade-qa/motel-guide-technical-challenge/actions/runs/13217913834)

These workflows are triggered automatically on new commits and pull requests, ensuring continuous validation and reliability of the application.

## 📂 Test Results

The test results are available in the `results` folder.

### 📄 File Descriptions:

- 🖥️ **UI Tests** (`ui-tests/`): UI test results in HTML and JSON formats.
- 🛰️ **API Tests** (`api-tests/`): API test results in HTML and JSON formats.
- 📊 **Load Tests** (`load-tests/`): Load test results in JSON and PNG format.

The `.html` files can be opened in a browser for a detailed test report visualization.
