## Take home exam

The three questions are answered with unit tests and deployed as lambdas behind a single API gateway.

The project was initialised using:

> cdk init app --language typescript

## Test:

npm run test

## Deploy:

npm run deploy

```mermaid
graph TD
A[API Gateway]

B[Lamdba]
C[Lambda]
D[Lambda]

A -->|GET /two-sum-two| B
A -->|GET /move-zeros-to-end| C
A -->|POST /hide-credit-card-number| D
```
