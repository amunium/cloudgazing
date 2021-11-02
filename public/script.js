import { initializeApp } from 'firebase/app';
// TODO: import database or firestore...

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    //TODO: fyll ut teksten
    apiKey: "API_KEY",
    authDomain: "PROJECT_ID.firebaseapp.com",
    databaseURL: "https://PROJECT_ID.firebaseio.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    measurementId: "G-MEASUREMENT_ID",
};

//initialising firebase within the web-application
const app = initializeApp(firebaseConfig);


// initiates page with the latest update
function pageInit() {
    // create head menu with topics
    // create right menu with index
    // create left meny with startup menu
}


// changes topic
function changeTopic(topicName) {
    // change title to topic name

    // change text to topic text

    // change left menu
    
}

// changes text
function changeText(textName) {    
    // change text

    // change sources

}