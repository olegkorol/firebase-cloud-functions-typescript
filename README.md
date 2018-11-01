# firebase-cloud-functions-typescript

## Firebase Cloud Functions (TypeScript)

### Quick start

> Requirement: Node.js >= v.8

```bash
# To quickly deploy (or update existing) Firebase Functions to GCP:
$ cd firebase-functions
$ npm install
# set your default project name in the firebase.json file, and then run:
$ npm run deploy

# In order to deploy single functions, you will have to install `firebase-tools` locally:
$ npm install -g firebase-tools
$ firebase deploy --only functions:{functionName}
# The function names can be found in firebase-functions/src/index.ts, e.g. "firebase_firebaseFunction1"
```

The "deploy" command will run tslint, transpile into JavaScript (ES2017) under the "lib" directory, perform unit tests and deploy the transpiled code to Google Cloud Platform.

**Important note: All functions using the "firebase-admin" SDK should initialize the SDK in the following manner:**

```javascript
import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
try {admin.initializeApp(functions.config().firebase);} catch(e) {}
```

Otherwise, the SDK might be initialized more than once - which will lead to an error on deployment.

### Unit Testing

The Firebase Cloud Functions use unit tests using Mocha and Chai for assertions.

### Creating new functions

Create a `.ts` file under `firebase-functions/src/`.

After that export the function in the `index.ts` file.

If you want to create any unit tests, do so in the `test` folder.
