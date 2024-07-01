import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import CORS middleware
import { db } from './connect.js';
import sqlite3 from 'sqlite3';
const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) => {
    res.status(200).send('Dinosaur API is online!!!');
});

app.get('/api', (req, res) => {
    res.status(200).send('Reckanize!!!');
});

app.get('/api/dinosaurs/name/:name', (req, res) => {
    const name = req.params.name;
    db.all("SELECT * FROM dinosaur_facts WHERE name = ?", [name], (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send(err.message);
            return;
        }
        res.status(200).json(rows); // Send JSON response
    });
});


app.get('/api/dinosaurs/diet/:diet', (req, res) => {
    const diet = req.params.diet;
    db.all("SELECT * FROM dinosaur_facts WHERE diet = ?", [diet], (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).send(err.message);
            return;
        }
        res.status(200).send(rows);
    });
});

app.get('/api/dinosaurs/region/:region', (req, res) => {
    const region = req.params.region;
    db.all("SELECT * FROM dinosaur_facts WHERE region = ?", [region], (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).send(err.message);
            return;
        }
        res.status(200).send(rows);
    });
});

app.get('/api/dinosaurs/class/:class', (req, res) => {
    const dino_class = req.params.class;
    db.all("SELECT * FROM dinosaur_facts WHERE class = ?", [dino_class], (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).send(err.message);
            return;
        }
        res.status(200).send(rows);
    });
});

app.get('/api/dinosaurs/family/:family', (req, res) => {
    const family = req.params.family;
    db.all("SELECT * FROM dinosaur_facts WHERE family = ?", [family], (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).send(err.message);
            return;
        }
        res.status(200).send(rows);
    });
});

app.get('/api/dinosaurs/type/:type', (req, res) => {
    const type = `%${req.params.type}%`; // Add wildcards around the type parameter
    db.all("SELECT * FROM dinosaur_facts WHERE type LIKE ?", [type], (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).send(err.message);
            return;
        }
        res.status(200).send(rows);
    });
});

app.listen(3001, (err) => {
    if (err) {
        console.log("ERROR:", err.message);
    }
    console.log("Listening on port 3001...");
});
