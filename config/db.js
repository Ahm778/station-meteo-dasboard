const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ahmed11446276*',
  database: 'bd'
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
  } else {
    console.log('Connexion à la base de données réussie');
  }
});

connection.on('error', (err) => {
  console.error('Erreur de connexion à la base de données :', err);
});

module.exports = connection;
