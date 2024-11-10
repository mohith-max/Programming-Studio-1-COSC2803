const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;
const dbPath = '/mnt/data/waste_management.db';

app.use(express.static('public'));
app.use(express.json());

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error("Error opening database", err);
    else console.log("Connected to the database.");
});

app.get('/api/waste_trends', (req, res) => {
    db.all(
        `SELECT lga, time_period, SUM(waste_collection) AS waste_collection, SUM(waste_recycled) AS waste_recycled 
         FROM WasteData 
         GROUP BY lga, time_period`,
        (err, rows) => {
            if (err) res.status(500).json({ error: err.message });
            else res.json(rows);
        }
    );
});

app.get('/api/recycling_rates', (req, res) => {
    db.all(
        `SELECT lga, recycling_rate FROM WasteData`,
        (err, rows) => {
            if (err) res.status(500).json({ error: err.message });
            else res.json(rows);
        }
    );
});

app.get('/api/total_waste_collected', (req, res) => {
    db.all(
        `SELECT lga, SUM(waste_collection) AS waste_collected, SUM(waste_recycled) AS waste_recycled 
         FROM WasteData 
         GROUP BY lga`,
        (err, rows) => {
            if (err) res.status(500).json({ error: err.message });
            else res.json(rows);
        }
    );
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
