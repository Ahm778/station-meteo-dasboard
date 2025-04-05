import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';

function SensorConfigurationPage() {
  const [sensorConfig, setSensorConfig] = useState({
    sensorType: '',
    sensitivity: '',
    range: '',
    samplingRate: '',
    resolution: '',
    thresholds: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSensorConfig(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      console.log('Sensor configuration saved:', sensorConfig);
      // Ajouter ici la logique pour sauvegarder la configuration
      // Afficher un message de succès ou rediriger l'utilisateur vers une autre page
    } else {
      alert('Veuillez remplir tous les champs obligatoires et vérifier les valeurs saisies.');
    }
  };

  const validateInputs = () => {
    // Valider les entrées utilisateur ici
    return (
      sensorConfig.sensorType !== '' &&
      sensorConfig.sensitivity !== '' &&
      sensorConfig.range !== '' &&
      sensorConfig.samplingRate !== '' &&
      sensorConfig.resolution !== ''
    );
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Roboto, sans-serif',
  };

  const headerStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333333',
  
  textAlign: 'center', // Centrer le texte
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const inputGroupStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#666666',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #cccccc',
    borderRadius: '5px',
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    cursor: 'pointer',
  };

  const saveButtonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const saveIconStyle = {
    marginRight: '5px',
  };

  // Liste des types de capteurs
  const sensorTypes = [
    'Température',
    'Humidité',
    'Pression',
    'Lumière et couleur',
    'Accéléromètre',
    'Qualité d\'air (IAQ)',
    'Température d\'eau',
    'Niveau d\'eau (cm)',
  ];

  return (
    <div style={containerStyle}>
      <div className="sensor-config-container">
        <h1 style={headerStyle}>Configuration du Capteur</h1>
        <form onSubmit={handleSubmit} style={formStyle} className="config-form">
          <div style={inputGroupStyle}>
            <label htmlFor="sensorType" style={labelStyle}>Type de Capteur:</label>
            {/* Utilisation d'un select pour les types de capteurs */}
            <select
              id="sensorType"
              name="sensorType"
              value={sensorConfig.sensorType}
              onChange={handleInputChange}
              style={inputStyle}
              required
            >
              <option value="">Sélectionnez un type de capteur</option>
              {sensorTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div style={inputGroupStyle}>
            <label htmlFor="sensitivity" style={labelStyle}>Sensibilité:</label>
            <input
              type="text"
              id="sensitivity"
              name="sensitivity"
              value={sensorConfig.sensitivity}
              onChange={handleInputChange}
              style={inputStyle}
              required
            />
          </div>
          <div style={inputGroupStyle}>
            <label htmlFor="range" style={labelStyle}>Plage:</label>
            <input
              type="text"
              id="range"
              name="range"
              value={sensorConfig.range}
              onChange={handleInputChange}
              style={inputStyle}
              required
            />
          </div>
          <div style={inputGroupStyle}>
            <label htmlFor="samplingRate" style={labelStyle}>Fréquence d'échantillonnage:</label>
            <input
              type="text"
              id="samplingRate"
              name="samplingRate"
              value={sensorConfig.samplingRate}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>
          <div style={inputGroupStyle}>
            <label htmlFor="resolution" style={labelStyle}>Résolution:</label>
            <input
              type="text"
              id="resolution"
              name="resolution"
              value={sensorConfig.resolution}
              onChange={handleInputChange}
              style={inputStyle}
            />
          </div>
          {/* Ajoutez d'autres champs d'entrée pour d'autres options de configuration si nécessaire */}
          <button type="submit" style={buttonStyle}>
            <FaSave style={saveIconStyle} />
            Enregistrer la Configuration
          </button>
        </form>
      </div>
    </div>
  );
}

export default SensorConfigurationPage;
