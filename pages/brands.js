import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx/xlsx.mjs';

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState(null);
  const [filteredSuppliers, setFilteredSuppliers] = useState(null);
  const [filterText, setFilterText] = useState('');

  const readExcel = async () => {
    try {
      const file = "https://docs.google.com/spreadsheets/d/10IbDX4gTNYca9BLFlmB3w1G_pM_uvUsgV0rNEe6ihjo/edit?usp=sharing";
      const response = await fetch(file);
      const arrayBuffer = await response.arrayBuffer();
      const data = new Uint8Array(arrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      const suppliersSheet = workbook.Sheets['Sheet1'];
      const suppliersData = XLSX.utils.sheet_to_json(suppliersSheet);

      // Filter out rows without 'A' column and exclude the header row
      const allSuppliers = suppliersData.filter((item, index) => index !== 0 && item.hasOwnProperty('A'));

      setSuppliers(allSuppliers);
      setFilteredSuppliers(allSuppliers); // Initially, display all suppliers
    } catch (error) {
      console.error('Error reading Excel file:', error);
    }
  };

  useEffect(() => {
    readExcel();
    const interval = setInterval(readExcel, 5000); // Fetch data every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  const handleFilterChange = (e) => {
    const text = e.target.value.toLowerCase();
    setFilterText(text);
    if (text === '') {
      setFilteredSuppliers(suppliers); // Render all data when filter is empty
    } else {
      const filteredData = suppliers.filter(item => item.A.toLowerCase().includes(text));
      setFilteredSuppliers(filteredData);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Brands</h1>
      {/* Add filter input field */}
      <input
        className="filter-input"
        type="text"
        placeholder="Filter by model"
        value={filterText}
        onChange={handleFilterChange}
      />
      <table className="table">
        <thead>
          <tr>
            <th>Model</th>
            {/* Add more headers for additional data */}
          </tr>
        </thead>
        <tbody>
          {filteredSuppliers && filteredSuppliers.map((item, index) => (
            <tr key={index}>
              <td>{item.A}</td>
              {/* Add more cells for additional data */}
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        .container {
          margin: 20px auto;
          max-width: 800px;
        }
        .title {
          font-size: 24px;
          margin-bottom: 10px;
          text-align:center;
          color: #007bff;
        }
        .filter-input {
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-bottom: 10px;
          width: 100%;
          box-sizing: border-box;
        }
        .table {
          border-collapse: collapse;
          width: 100%;
        }
        th,
        td {
          border: 1px solid #ddd;
          padding: 12px;
          text-align: left;
        }
        th {
          background-color: #f2f2f2;
        }
        tbody tr:nth-child(even) {
          background-color: #f2f2f2;
        }
      `}</style>
    </div>
  );
};

export default Suppliers;
