const resume = require('./resume');
const jobDescription = require('./jobDescription');
// Need to import dotenv and config it
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const { OpenAI } = require('openai');
var postmark = require("postmark");

// app setup
const express = require('express');
const app = express();
const cors = require('cors');

// middleware
app.use(express.json());
app.use(express.static('public'));
app.use(cors())

const { initializeApp } = require("firebase/app")
// const { getAnalytics } = require("firebase/analytics")

// const { collection, deleteDoc, query, where, getDocs } = require("firebase/firestore");

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "resumony",
  storageBucket: "resumony.appspot.com",
  messagingSenderId: "515722153612",
  appId: "1:515722153612:web:3fc00ff43fd52e1bb4b5a9",
  measurementId: "G-7XDDEQ48V6"
};

const fb = initializeApp(config);
// const analytics = getAnalytics(fb);
// analytics.isSupported(analytics)

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// });

//Config OpenAI
// const openai = new OpenAI(process.env.OPENAI_API_KEY);

// // Input one will be the resume of the user
// // Input two will be the job description
// // Run thru AI model to get the output
// // Output will be editing of the resume
// inputOne = resume
// inputTwo = jobDescription
// openai.chat.completions.create({
//   messages: [
//     { role: "system", 
//       content: "Act as a resume reviewer and editor. I will provide you with my resume, and you look to provide me with feedback on it. Also do editing where it is required."},
//     { role: "system", 
//       content: `Based on this ${inputTwo.jobDescription} for a ${inputTwo.jobTitle} role at ${inputTwo.company}, Rewrite this resume summary to include Keywords mentioned in Job Description. Rewrite this work experience and skills to be more impressive and tailored for this ${inputTwo.jobTitle}.`},
//     { role: "user",
//       content: `I have a resume that I would like you to review and edit. Here are the details of my resume... \n Summary: ${inputOne.summary}\n Experience: ${inputOne.experience}\n Education: ${inputOne.education} Skills: ${inputOne.skills}\n Achievements: ${inputOne.achievements}` }
//     ],
//   model: "gpt-4",
// }).then((resp) => console.log(resp.choices)).catch(console.error);

// Send an email:
app.post('/sendEmail', (req, res) => {
  try {
    const { feedback, email } = req.body;

    var client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

    client.sendEmail({
      "From": "support@resumony.io",
      "To": "support@resumony.io",
      "Subject": `Feedback from ${email}`,
      "HtmlBody": "<html><body><strong>Feedback:</strong><br>" + feedback + "</body></html>",
      "TextBody": "Feedback: " + feedback,
      "MessageStream": "outbound"
    });
    res.send('Email sent');
  } catch (error) {
      console.log(error);
      res.send('Error sending email');
  }});

// Run server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
