const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');


const app =  express();
app.use(cors( { origin : true} ));

app.post("/version/java", (req, resp) => {
    console.log('Request headers: ' + JSON.stringify(req.headers));
    console.log('Request body: ' + JSON.stringify(req.body));
    const respData = {
        speech : "Current Stable version of Java is 9.0.1",
        displayTest : "Current Stable version of Java is 9.0.1",
        source : "www.shanmugavel.xyz"
    };
    resp.send(respData);
});

app.post("/version/spring", (req, resp) => {
    resp.send("Latest Stable Spring version is 5.0.1");
});

app.post("/version/spring-boot", (req, resp) => {
    resp.send("Current version of Spring boot is 1.5.8");
});

const api = functions.https.onRequest(app);

module.exports = {
    api
}
