const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const projectModel = require('./projectschema');

const query = 'mongodb+srv://UserName:<password>'
	+ '@user.tuufn.mongodb.net/account?'
	+ 'retryWrites=true&w=majority'

const db = (query);
mongoose.Promise = global.Promise;

mongoose.connect(db, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}, function (error) {
	if (error) {
		console.log("Error!" + error);
	}
});

module.exports = router;
