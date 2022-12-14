const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")
const stripe = require("stripe")('sk_test_51LQ5zsJHvOn16ft9deOQkwlqoDNB8UFDlKv2o7s7wEbQtW2a72euwzhMuRzevaciW1XJqHA2BQB95bZ3XpsW9lmv005lweeByv');

// App config
const app = express();

// - Middlewares
app.use(cors({origin:true}));
app.use(express.json());

// - API routes

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd"
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });

// - Listen command
exports.api = functions.https.onRequest(app);