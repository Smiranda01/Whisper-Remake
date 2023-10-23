import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // Set the view engine to EJS
app.use(express.static('public')); // Use the public folder for static files


app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/random");
        res.render("index.ejs", {secret: JSON.stringify(result.data.secret), user: JSON.stringify(result.data.username)});
        } catch (error) {
            res.render("index.ejs", {secret: JSON.stringify(result.data)});
            } 
    });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})