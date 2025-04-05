// server.js
const express = require('express');
const app = express();
const db = require('./db');

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/test', (req, res) => {
  return res.json({ message: 'Test successful' });
});

app.get('/temperature', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la température :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const temperature = result[result?.length-1]?.temperature;
      return res.json({ temperature });
    }
  });
});
app.get('/list/temperature', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la température :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const temperature = result;
      return res.json({ temperature });
    }
  });
});
app.get('/humidity', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la humidity :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const humidity = result[result?.length-1]?.humidity;
      return res.json({ humidity });
    }
  });
});

app.get('/list/humidity', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de l hum :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const humidity = result;
      return res.json({ humidity });
    }
  });
});


app.get('/pressure', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la pressure :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const pressure = result[result?.length-1]?.pressure;
      return res.json({ pressure });
    }
  });
});

app.get('/list/pressure', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la pressure :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const pressure = result;
      return res.json({ pressure });
    }
  });
});


app.get('/lightIntensity', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la pressure :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const lightIntensity = result[result?.length-1]?.lightIntensity;
      return res.json({ lightIntensity });
    }
  });
});

app.get('/list/lightIntensity', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la pressure :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const lightIntensity = result;
      return res.json({ lightIntensity });
    }
  });
});

app.get('/iaq', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la iaq :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const iaq = result[result?.length-1]?.iaq;
      return res.json({ iaq });
    }
  });
});

app.get('/list/iaq', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la iaq :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const iaq = result;
      return res.json({ iaq });
    }
  });
});


app.get('/temperature_eau', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la temperature_eau :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const temperature_eau = result[result?.length-1]?.temperature_eau;
      return res.json({ temperature_eau });
    }
  });
});

app.get('/list/temperature_eau', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la temperature_eau :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const temperature_eau = result;
      return res.json({ temperature_eau });
    }
  });
});


app.get('/co2', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la co2 :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const co2 = result[result?.length-1]?.co2;
      return res.json({ co2 });
    }
  });
});

app.get('/list/co2', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la co2 :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const co2 = result;
      return res.json({ co2 });
    }
  });
});




app.get('/voc', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la voc :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const voc = result[result?.length-1]?.voc;
      return res.json({ voc });
    }
  });
});

app.get('/list/voc', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la voc :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const voc = result;
      return res.json({ voc });
    }
  });
});

app.get('/green', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la couleur green :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const green = result[result?.length-1]?.green;
      return res.json({ green });
    }
  });
});

app.get('/list/green', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération du green :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const green = result;
      return res.json({ green });
    }
  });
});



app.get('/list/blue', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération du blue :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const blue = result;
      return res.json({ blue });
    }
  });
});

app.get('/red', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la couleur red :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const red = result[result?.length-1]?.red;
      return res.json({ red });
    }
  });
});

app.get('/list/red', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération du red :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const red = result;
      return res.json({ red });
    }
  });
});

app.get('/blue', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la couleur blue :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const blue = result[result?.length-1]?.blue;
      return res.json({ blue });
    }
  });
});



app.get('/couleur', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la couleur :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const couleur = result[result?.length-1]?.couleur;
      return res.json({ couleur });
    }
  });
});

app.get('/api/getcolors', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la couleur blue :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const blue = result[result?.length-1];
      return res.json({ blue });
    }
  });
});



app.get('/latitude', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la latitude :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const latitude = result[result?.length-1]?.latitude;
      return res.json({ latitude });
    }
  });
});

app.get('/longitude', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la longitude :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const longitude = result[result?.length-1]?.longitude;
      const latitude = result[result?.length-1]?.latitude;
      return res.json({ lng:longitude,lat:latitude });
    }
  });
});




app.get('/temperature_st', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la température de stm :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const temperature_st = result[result?.length-1]?.temperature_st;
      return res.json({ temperature_st });
    }
  });
});
app.get('/list/temperature_st', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la température de stm :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const temperature_st = result;
      return res.json({ temperature_st });
    }
  });
});


app.get('/humidity_st', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de la humidity de stm:', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const humidity_st = result[result?.length-1]?.humidity_st;
      return res.json({ humidity_st });
    }
  });
});

app.get('/list/humidity_st', (req, res) => {
  db.query('SELECT * FROM datacollect', (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération de l hum :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      const humidity_st = result;
      return res.json({ humidity_st });
    }
  });
});




app.post('/api/post/data', (req, res) => {
  // Extraire les données de la requête
  const { temperature, pressure, humidity, co2, voc, iaq, red, green, blue, longitude, latitude, lightIntensity, temperature_st, humidity_st } = req.body;
  
  // Afficher le contenu de req.body pour le debug
  console.log(req.body);

  // Construire la requête SQL d'insertion avec des placeholders
  const query = `
    INSERT INTO datacollect 
    (temperature, pressure, humidity, co2, voc, iaq, red, green, blue, longitude, latitude, lightIntensity, temperature_st, humidity_st) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  // Les valeurs à insérer
  const values = [
    temperature, pressure, humidity, co2, voc, iaq, red, green, blue, 
    longitude, latitude, lightIntensity, temperature_st, humidity_st
  ];

  // Exécuter la requête SQL
  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion des données :', err);
      return res.status(500).json({ error: 'Erreur serveur' });
    } else {
      console.log('Données insérées avec succès');
      return res.status(200).json({ message: 'Succès' });
    }
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
