const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();

// Asegúrate de poner esto al inicio
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Middleware para parsear JSON
app.use(express.json());

// Base de datos
const dbPath = path.resolve(__dirname, 'nordwind.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database: ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Ruta para obtener clientes
app.get('/api/Customers', (req, res) => {
    db.all('SELECT * FROM Customers', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Ruta para obtener porductos
app.get('/api/Products', (req, res) => {
    db.all('SELECT ProductName,Price FROM Products', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Ruta para obtener porductos mas caros
app.get('/api/Products/top-expensive', (req, res) => {
    db.all('SELECT ProductName,Price FROM Products ORDER BY Price DESC LIMIT 5', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Ruta para obtener porductos mas baratos
app.get('/api/Products/top-cheap', (req, res) => {
    db.all('SELECT ProductName,Price FROM Products ORDER BY Price ASC LIMIT 5', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});


// Puerto
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
