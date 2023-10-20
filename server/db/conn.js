/** @format */

const mongoose = require("mongoose");

// const DB =
// "mongodb+srv://ritik:1234@cluster0.qvqj0ma.mongodb.net/mernstack?retryWrites=true&w=majority";

const DB =
	"mongodb+srv://asim-crud:12345@stack-overflow-clone.3mscsti.mongodb.net/?retryWrites=true&w=majority";

// const DB = "mongodb://localhost:27017";

mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("connection stablished"))
	.catch((error) => console.log(error.message));
