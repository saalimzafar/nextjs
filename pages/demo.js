import React, { useState, useEffect } from 'react';
import axios from 'axios';
const StockTicker = () => {
  const [stockData, setStockData] = useState([]);
  const [meta, setMeta] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo'
        );
        // Replace 'YOUR_API_KEY' with your Alpha Vantage API key
        const metaData = response.data['Meta Data'];
        const timeSeriesData = response.data['Time Series (5min)'];
        setStockData(timeSeriesData);
        setMeta(metaData)
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="containerDemo">
      <h1 className="headingDemo">Real-Time Stock Market Data</h1>
      {Object.keys(meta).map(data => <h3 className="meta">{meta[data]}</h3>)}
      <div className="grid">
        {Object.entries(stockData).map(([timestamp, data], index) => (
          <div key={index} className="card">
            <h2 className="cardHeading">{timestamp}</h2>
            <ul className="list">
              {Object.entries(data).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
<style jsx>{`
h3 {
font-family:sans,arial;
}
.containerDemo {
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
  background:#cdd;
  padding:20px;
}

.headingDemo {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family:sans,arial;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.card {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background:#def;
  font-family:sans,arial;
}

.cardHeading {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.list {
  padding-left: 0;
  list-style: none;
}

.list li {
  margin-bottom: 5px;
}
`}</style>
    </div>
  );
};

export default StockTicker;
