const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static("public"))

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/login.html")
})

app.get('/about', (req, res) => {
	res.sendFile(__dirname + "/about.html")
})


app.post("/", (req, res) => {
	console.log("[+] POST request recieved!")
	console.log('')
	console.log("[+] Username: " + req.body.username);
	console.log("[+] Password: " + req.body.password);
	console.log("");

	if (req.body.username === "josephmarc2610@gmail.com" && req.body.password === "bamboola2") {
		res.sendFile(__dirname + "/index.html");
	} else {
		res.sendFile(__dirname + "/fail.html");
	}
})

app.post("/tryagain", (req, res) => {
	res.redirect("/");
})

app.listen(3000, () => {
	console.log("[*] Server listening on port 3000...")
})
