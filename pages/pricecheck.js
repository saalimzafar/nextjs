import * as XLSX from 'xlsx/xlsx.mjs';

export default function PriceChecker() {
//code
function checkPrice() {
  const codeInput = document.getElementById("productCode").value.trim();
  
  if (codeInput === "") {
    displayMessage("Please enter a product code.");
    return;
  }

  fetch('/items3.xlsx')
    .then(response => response.arrayBuffer())
    .then(data => {
      
      const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      console.log(sheet)
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      
      const product = jsonData.find(item => item.IT_CODE === codeInput);
      
      if (!product) {
        displayMessage("Code not found – Δεν βρέθηκε ο κωδικός");
      } else {
        displayProductInfo(product);
      }
    })
    .catch(error => {
      console.error('Error fetching or parsing data:', error);
      displayMessage("Error fetching data. Please try again.");
    });
}

function displayMessage(message) {
  const productInfoDiv = document.getElementById("productInfo");
  productInfoDiv.innerHTML = `<p>${message}</p>`;
}

function displayProductInfo(product) {
  const productInfoDiv = document.getElementById("productInfo");
  productInfoDiv.innerHTML = `
    <p>Product Code: ${product.IT_CODE}</p>
    <p><strong>${product.IT_TITLE}</strong></p>
    <p style="font-size: 24px; color: green;">${product.IT_PR1} $</p>
  `;
}

function resetSearch() {
  document.getElementById("productCode").value = "";
  document.getElementById("productInfo").innerHTML = "";
}

//code
return (
<div className="container">
    <header>
      <h1>Price Checker</h1>
    </header>
    <main>
      <input type="text" id="productCode" placeholder="Enter product code" />
      <button onClick={checkPrice}>CHECK</button>
      <div id="productInfo"></div>
      <button onClick={resetSearch}>Check Again</button>
    </main>
    <style jsx>{`
    .container {
  width: 80%;
  margin: 20% auto;
  
}

header {
  text-align: center;
  margin-bottom: 20px;
}

main {
  text-align: center;
}

input[type="text"] {
  padding: 10px;
  margin: 20px;
  border:2px solid #000;
}

button {
  padding: 10px 20px;
  background-color: green;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
  height:40px;
  width:auto;
}

button:hover {
  background-color: #45a049;
}

    `}</style>
  </div>

)
}
