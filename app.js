const express = require("express");
const app = express();


app.set('view engine', 'ejs');

app.get("/", async(req, res) => {
    let url = `http://universities.hipolabs.com/search?country=australia`;

    let response = await fetch(url); // use the fetch method

    let unis = await response.json(); // read response body and parse as JSON

    //console.table(unis[0].name);

    //let firstuni = unis[0];

    res.render("index", {uni_data: unis});
});

app.get("/", async(req, res) => {
    let url = `http://universities.hipolabs.com/search?country=denmark`;

    let response = await fetch(url); // use the fetch method

    let unis = await response.json(); // read response body and parse as JSON
    let countries = await response.json();

    //console.table(unis[0].name);

    //let firstuni = unis[0];

    res.render("index", {uni_data: unis, uni_data: countries});
});

app.listen(3000, () => {
    console.log("Server is listening on port localhost:3000");
});


