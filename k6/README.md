# Performance Tests with k6

This document explains how to set up and run performance tests using **k6** in the **motel-guide-technical-challenge** project.

## Test Objective

The k6 load tests simulate **100 simultaneous users** accessing the API mock endpoint configured with **JSON Server**.

### **The tests check:**

- **Response time:** Does the API respond within acceptable limits under load?
- **Request errors:** Are there failures when many users access the system simultaneously?
- **Resource usage (optional):** Is the system stable in terms of CPU and memory usage during the test?

---

## **Environment Setup**

### 1. **Install k6**

1. Access the official website [by clicking here](https://grafana.com/docs/k6/latest/set-up/install-k6/)
2. Perform the setup according to your operating system

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
   npm run load-test
   ```

3. To save the results to a JSON file:
   ```bash
   npm run load-test:results
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
