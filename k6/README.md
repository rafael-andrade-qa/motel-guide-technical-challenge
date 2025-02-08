# Performance Tests with k6
This document explains how to set up and run performance tests using **k6** in the **motel-guide-technical-challenge** project.

## Test Objective
The k6 load tests simulate **100 simultaneous users** accessing the API mock endpoint configured with **JSON Server**.

### **The tests check:**
- **Response time:** Does the API respond within acceptable limits under load?
- **Request errors:** Are there failures when many users access the system simultaneously?
- **Resource usage (optional):**  Is the system stable in terms of CPU and memory usage during the test?

---

## **Environment Setup**

### 1. **Install k6**
Depending on your operating system, use one of the following commands:

**Windows:**
```bash
choco install k6
```

**Linux:**
```bash
sudo apt update && sudo apt install k6
```

**Mac:**
```bash
brew install k6
```

To verify the installation, run:
```bash
k6 version
```

### 2. How to Run the Test

1. Ensure the mock server is running:
    ```bash
    npm run mock-server
    ```

2. Run the load test using k6:
    ```bash
    k6 run k6/load-test.js
    ```


3. To save the results to a JSON file:
    ```bash
    k6 run k6/load-test.js --out json=load-test-results.json
    ```

## **Expected Results**
After execution, you will see a summarized report in the terminal:

- **Average response time (avg)**
- **Percentile distribution (p95)**
- **Request failures (%)**

**Example output:**
```yaml
    checks.....................: 100.00% ✓ 2000   ✗ 0
    http_req_duration..........: avg=300ms min=150ms med=250ms max=450ms p(95)=400ms
    http_req_failed............: 0.5%    ✓ 10     ✗ 1990
```
