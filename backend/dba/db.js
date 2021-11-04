const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
//initialize admin SDK using serviceAccountKey
admin.initializeApp({
credential: admin.credential.cert(serviceAccount)
});
const accdb = admin.firestore();
module.exports= {accdb}