'use strict';

const dotenv = require('dotenv');
dotenv.config();
const assert = require('assert');

const { HOST, PORT, HOST_URL, API_KEY, AUTH_DOMAIN,
   STORAGE_BUCKET, PROJECT_ID, MESSAGING_SENDER_ID, APP_ID}=process.env

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = { 
    port: PORT,
    host: HOST, 
    host_url: HOST_URL,
    firebaseConfig: {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
      }
};