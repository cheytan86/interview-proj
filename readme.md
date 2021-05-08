# ExpressVPN Web UI Test Automation Assignment

## Getting Started

### Prerequisites

1. Install node from the link below:
    ```
    https://nodejs.org/en/
    ```
2. Install typescript

    ```
    npm install -g typescript
    ```

### Installations

1. Install Packages by going to root folder of the project in terminal and running the following:

```
npm install
```

2. Build the typescript project by running the following at root folder of project:

```
tsc
```

### Running Tests

Make sure your code is build using the following command at root folder:

```
tsc
```

Run the tests by running following command on terminal:

```
npm run test
```

or 

```
npx wdio run dist/wdio.conf.js
```

Run on browserstack ( have not been tested due to license issue)

```
npm run browserstackTest
```

To generate Html report once execution is complete

```
npm run generateAllureReport
```


### Note
Currently these test can be run on local machine , but future implementation will support followng features:
1. Integration with Jenkins CI/CD pipeline
2. Run on Browserstack or Docker
3. Support for Mobile browser
4. Integration with Test management tool like Testrail