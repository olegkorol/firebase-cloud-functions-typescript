import * as functions from 'firebase-functions';

export const myFirstFunction = functions.region('europe-west1').firestore.document('somePath/{someId}')
  .onUpdate(async (change, context) => {
    if (context) {
      console.log('Hello!', change);
    } else {
      console.error('No context')
    }
  })