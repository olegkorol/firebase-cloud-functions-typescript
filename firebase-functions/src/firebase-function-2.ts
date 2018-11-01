import * as admin from "firebase-admin";
import * as functions from 'firebase-functions';
try {admin.initializeApp(functions.config().firebase);} catch(e) {}
const db = admin.firestore();

/**
 * Firebase function 2
 * Triggered when a message is pushed to a pubSub topic
 */
export const firebaseFunction2 = functions.pubsub.topic('some-topic').onPublish(async message => {
    const payload: any = message.data ? Buffer.from(message.data, 'base64').toString() : null;
    // save something to Firestore
    db.collection('...').add(payload).catch(err => console.error(err))
});
