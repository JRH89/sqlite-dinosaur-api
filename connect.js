import sqlite3 from "sqlite3";
const sql3 = sqlite3.verbose();

// const db = new sql3.Database(":memory:", sqlite3.OPEN_READWRITE, connected);
// const db = new sql3.Database("", sqlite3.OPEN_READWRITE, connected);
const db = new sql3.Database("./dinosaurs.db", sqlite3.OPEN_READWRITE, connected);

function connected(err) {
    if (err) {
        console.error(err.message);
        return
    }
    console.log("Connected...");
}

let sql = `CREATE TABLE IF NOT EXISTS dinosaur_facts (
    occurrence_no SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    diet TEXT,
    type TEXT,
    length_m FLOAT,
    max_ma FLOAT,
    min_ma FLOAT,
    region TEXT,
    lng FLOAT,
    lat FLOAT,
    class TEXT,
    family TEXT
)`;

db.run(sql, [], (err) => {
    //callback function
    if (err) {
        console.log(err);
        return
    }
    console.log("Table created...");
});


export { db };