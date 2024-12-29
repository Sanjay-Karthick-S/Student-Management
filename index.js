const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const SECRET_KEY = "your_secret_key"; // Replace with a secure key
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser'); // You can also use express.json() without body-parser
app.use(cors());
app.use(express.json()); 
const PORT = process.env.PORT || 3001;