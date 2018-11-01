import * as functions from 'firebase-functions';

/**
 * Firebase function 3
 * Triggered on write to a Firestore document
 */
export const firebaseFunction3 = functions.firestore.document('somePath/{someId}')
    .onWrite(async (change, context) => {
        // so something
    })
