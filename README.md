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
A[<img src="./Arch_Amazon-API-Gateway_32.svg"/>]

B[<img src="./Arch_AWS-Lambda_32.svg">]
C[<img src="./Arch_AWS-Lambda_32.svg">]
D[<img src="./Arch_AWS-Lambda_32.svg">]

A -->|GET /two-sum-two| B
A -->|GET /move-zeros-to-end| C
A -->|POST /hide-credit-card-number| D
```
