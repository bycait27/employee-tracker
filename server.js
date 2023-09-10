// require express 
const express = require('express');
// import and require mysql2
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connect to database
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        // MySQL username
        user: 'root',
        // add MySQL password here
        password: 'happycoding',
        database: 'employees_db'
      },
      console.log(`Connected to the employees_db database.`)
);

// ADD ROUTES HERE

// request not found
app.use((req, res) => {
    res.status(404).end();
});
// request successful
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
