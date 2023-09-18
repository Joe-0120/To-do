import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const daily = [];
const daily_done = [];
const work = [];
const work_done = [];
const school = [];
const school_done = [];

app.get("/", (req, res) => {
    res.render("index.ejs", {tasks: daily, tasks_done: daily_done});
});

app.post("/done-daily", (req, res) => {
    if(req.body.check){
        daily_done[req.body.check] = true;
    };
});

app.post("/add-daily", (req, res) => {
    daily.push(req.body.toadd);
    daily_done.push(false);
    res.redirect("/");
});

app.post("/delete-daily", (req, res) => {
    daily.splice(req.body.mybtn, 1);
    daily_done.splice(req.body.mybtn, 1);
    res.redirect("/");
});

app.get("/work", (req, res) => {
    res.render("work.ejs", {tasks: work, tasks_done: work_done});
});

app.post("/done-work", (req, res) => {
    if(req.body.check){
        work_done[req.body.check] = true;
    };
});

app.post("/add-work", (req, res) => {
    work.push(req.body.toadd);
    work_done.push(false);
    res.redirect("/work");
});

app.post("/delete-work", (req, res) => {
    work.splice(req.body.mybtn, 1);
    work_done.splice(req.body.mybtn, 1);
    res.redirect("/work");
});

app.get("/school", (req, res) => {
    res.render("school.ejs", {tasks: school, tasks_done: school_done});
});

app.post("/done-school", (req, res) => {
    if(req.body.check){
        school_done[req.body.check] = true;
    };
});

app.post("/add-school", (req, res) => {
    school.push(req.body.toadd);
    school_done.push(false);
    res.redirect("/school");
});

app.post("/delete-school", (req, res) => {
    school.splice(req.body.mybtn, 1);
    school_done.splice(req.body.mybtn, 1);
    res.redirect("/school");
});
/* 
app.get("/school", (req, res) => {
    res.render("school.ejs", {tasks: school});
});

app.post("/add-school", (req, res) => {
    school.push(req.body.toadd);
    res.redirect("/school");
});

app.post("/delete-school", (req, res) => {
    school.splice(req.body.mybtn, 1);
    res.redirect("/school");
});
*/

app.listen(port, () => {
    console.log("Listening on port " + port);
});