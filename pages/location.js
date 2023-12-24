// pages/locations/index.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx/xlsx.mjs';


export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [filterValues, setFilterValues] = useState({
    city: '',
    category: '',
  });
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  
  //
  const [sortConfigId, setSortConfigId] = useState({ key: 'id', direction: 'ascending' });
  const [sortConfigPostalCode, setSortConfigPostalCode] = useState({ key: 'postalCode', direction: 'ascending' });
  const [sortConfigPhoneNumber, setSortConfigPhoneNumber] = useState({ key: 'phoneNumber', direction: 'ascending' });
  const [sortConfigWebsiteURL, setSortConfigWebsiteURL] = useState({ key: 'websiteUrl', direction: 'ascending' });
  const [sortConfigPrice, setSortConfigPrice] = useState({ key: 'price', direction: 'ascending' }); 
  
  const [sortConfigCategory, setSortConfigCategory] = useState({ key: 'category', direction: 'ascending' });
  const [sortConfigBusinessCategory, setSortConfigBusinessCategory] = useState({ key: 'businessCategory', direction: 'ascending' });
  
  const [sortConfigLocationName, setSortConfigLocationName] = useState({ key: 'locationName', direction: 'ascending' });
  const [sortConfigStreet, setSortConfigStreet] = useState({ key: 'street', direction: 'ascending' });
const [sortConfigCity, setSortConfigCity] = useState({ key: 'city', direction: 'ascending' });
const [sortConfigCanton, setSortConfigCanton] = useState({ key: 'canton', direction: 'ascending' });
// ... other sort configurations for different headers

  //

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await axios.get('/api/apijson');
        setLocations(res.data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };
    fetchLocations();
  }, []);
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterValues({ ...filterValues, [name]: value });
  };
  
  const handleSort = (key) => {
  // Find the sorting config for the specific column
  const sortingConfig = key === 'id' ? sortConfigId :
                        key === 'phoneNumber' ? sortConfigPhoneNumber :
                        key === 'street' ? sortConfigStreet :
                        key === 'city' ? sortConfigCity :
                        key === 'locationName' ? sortConfigLocationName :
                        key === 'canton' ? sortConfigCanton :
                        key === 'postalCode' ? sortConfigPostalCode :
                        /* Add other columns' sorting configs */ {};

  let direction = 'ascending';
  if (sortingConfig.direction === 'ascending') {
    direction = 'descending';
  }

  // Update the sorting configuration for the specific column
  switch (key) {
    case 'id':
      setSortConfigId({ key, direction });
      break;
    case 'locationName':
      setSortConfigLocationName({ key, direction });
      break;
    case 'street':
      setSortConfigStreet({ key, direction });
      break;
    case 'postalCode':
      setSortConfigPostalCode({ key, direction });
      break;
    case 'city':
      setSortConfigCity({ key, direction });
      break;
    case 'canton':
      setSortConfigCanton({ key, direction });
      break;
   
   case 'phoneNumber':
      setSortConfigPhoneNumber({ key, direction });
      break;
   case 'website':
      setSortConfigWebsite({ key, direction });
      break;
   case 'price':
      setSortConfigPrice({ key, direction });
      break;
   case 'category':
      setSortConfigCategory({ key, direction });
      break;
   case 'businessCategory':
      setSortConfigBusinessCategory({ key, direction });
      break;      
    /* Add other columns' sorting configurations */
    default:
      break;
  }

  const sortedLocations = [...filteredLocations].sort((a, b) => {
    let comparison = 0;
    if (a[key] > b[key]) {
      comparison = 1;
    } else if (a[key] < b[key]) {
      comparison = -1;
    }
    return direction === 'descending' ? comparison * -1 : comparison;
  });

  setFilteredLocations(sortedLocations);
};

  
  useEffect(() => {
    const filtered = locations.filter((location) => {
      return (
        location.city.toLowerCase().includes(filterValues.city.toLowerCase()) &&
        location.category.toLowerCase().includes(filterValues.category.toLowerCase())
      );
    });
    setFilteredLocations(filtered);
  }, [filterValues, locations]);
  
  
  

  // Function to export filtered data
  const exportFilteredLocations = () => {
    const dataToExport = filteredLocations.length > 0 ? filteredLocations : locations;

    // Convert data to desired format (Excel, CSV, etc.)
    // Example using xlsx library to export to Excel
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Filtered Locations');

    const exportFileName = 'filtered_locations.xlsx';
    XLSX.writeFile(workbook, exportFileName);
  };


  
  return (
    <div>
      <h1>Locations</h1>
      <div className="filter-container">
        <label>
          City:
          <input
            type="text"
            name="city"
            value={filterValues.city}
            onChange={handleFilterChange}
            className="filter-input"
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={filterValues.category}
            onChange={handleFilterChange}
            className="filter-input"
          />
        </label>
        
      <button onClick={exportFilteredLocations} className="btnB">Export Filtered Locations</button>
      </div>
      <table>
      
      <thead>
    <tr>
      <th onClick={() => handleSort('id')} style={{ cursor: 'pointer' }}>ID {sortConfigId.direction === 'ascending' ? '\u25B2' : '\u25BC'}</th>
<th onClick={() => handleSort('locationName')} style={{ cursor: 'pointer' }}>Location Name {sortConfigLocationName.direction === 'ascending' ? '\u25B2' : '\u25BC'}</th>
<th onClick={() => handleSort('street')} style={{ cursor: 'pointer' }}>Street {sortConfigStreet.direction === 'ascending' ? '\u25B2' : '\u25BC'}</th>
<th onClick={() => handleSort('postalCode')} style={{ cursor: 'pointer' }}>Postal Code {sortConfigPostalCode.direction === 'ascending' ? '\u25B2' : '\u25BC'}</th>
<th onClick={() => handleSort('city')} style={{ cursor: 'pointer' }}>City {sortConfigCity.direction === 'ascending' ? '\u25B2' : '\u25BC'}</th>
<th onClick={() => handleSort('canton')} style={{ cursor: 'pointer' }}>Canton {sortConfigCanton.direction === 'ascending' ? '\u25B2' : '\u25BC'}</th>
<th onClick={() => handleSort('phoneNumber')} style={{ cursor: 'pointer' }}>Phone Number {sortConfigPhoneNumber.direction === 'ascending' ? '\u25B2' : '\u25BC'}</th>
<th onClick={() => handleSort('websiteURL')} style={{ cursor: 'pointer' }}>Website URL {sortConfigWebsiteURL.direction === 'ascending' ? '\u25B2' : '\u25BC'}</th>
<th onClick={() => handleSort('price')} style={{ cursor: 'pointer' }}>Price {sortConfigPrice.direction === 'ascending' ? '\u25B2' : '\u25BC'}</th>
<th onClick={() => handleSort('category')} style={{ cursor: 'pointer' }}>Category {sortConfigCategory.direction === 'ascending' ? '\u25B2' : '\u25BC'}</th>
<th onClick={() => handleSort('businessCategory')} style={{ cursor: 'pointer' }}>Business Category {sortConfigBusinessCategory.direction === 'ascending' ? '\u25B2' : '\u25BC'}</th>

    </tr>
  </thead>
  <tbody>
    {filteredLocations.map((location) => (
      <tr key={location.id}>
        <td>{location.id}</td>
        <td>{location.locationName}</td>
        <td>{location.street}</td>
        <td>{location.postalCode}</td>
        <td>{location.city}</td>
        <td>{location.canton}</td>
        <td>{location.phoneNumber}</td>
        <td>{location.websiteURL}</td>
        <td>{location.price}</td>
        <td>{location.category}</td>
        <td>{location.businessCategory}</td>
      </tr>
    ))}
  </tbody>
</table>
<style>{`
.btnA, .btnB {
padding:8px 16px;
          margin: 8px;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
}
.btnA {
background:#4CAF50;
}
.btnB {
background: #008CBA;
}
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  text-align: center;
  margin-top: 20px;
  
  text-transform: uppercase;
  font-weight: bold;
}


table {
  border-collapse: collapse;
  width: 100%;
  margin: 20px auto;
  
}

thead {
  background-color: #fff;
  
}

th, td {
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  
  
}

th {
  font-weight: bold;
  text-transform: uppercase;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f5f5f5;
}

.filter-container {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }

        .filter-input {
          margin:8px;
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #ccc;
          font-size: 14px;
          width: 200px;
        }
`}</style>
    </div>
  );
}
