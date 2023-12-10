export default function Unit() {
const conversionTable = {
        feet: {
            inches: 12,
            meters: 0.3048,
            kilometers: 0.0003048,
            centimeters: 30.48,
            yards: 0.333333,
            miles: 0.000189394,
            
        },
        meters: {
            kilometers: 0.001,
            feet: 3.28084,
            inches: 39.3701,
            centimeters: 100,
            yards: 1.09361,
            miles: 0.000621371,
            
        },
        inches: {
            feet: 1 / 12,
            meters: 0.0254,
            kilometers: 0.0000254,
            centimeters: 2.54,
            yards: 0.0277778,
            miles: 0.0000157828,
                    },
        kilometers: {
            meters: 1000,
            feet: 3280.84,
            inches: 39370.1,
            centimeters: 100000,
            yards: 1093.61,
            miles: 0.621371,
                    },
        centimeters: {
            meters: 0.01,
            feet: 0.0328084,
            inches: 0.393701,
            kilometers: 0.00001,
            yards: 0.0109361,
            miles: 0.00000621371,
                   },
        yards: {
            meters: 0.9144,
            feet: 3,
            inches: 36,
            kilometers: 0.0009144,
            centimeters: 91.44,
            miles: 0.000568182,
            
        },
        miles: {
            meters: 1609.34,
            feet: 5280,
            inches: 63360,
            kilometers: 1.60934,
            centimeters: 160934,
            yards: 1760,
            
        }
        
    };

    function convertUnits() {
        const fromValue = parseFloat(document.getElementById('fromUnit').value);
        const fromType = document.getElementById('fromType').value;
        const toType = document.getElementById('toType').value;

        
        const conversionFactor = conversionTable[fromType][toType];

        if (conversionFactor) {
            const result = fromValue * conversionFactor;
            document.getElementById('toUnit').value = result.toFixed(2); 
        } else {
            document.getElementById('toUnit').value = 'Invalid conversion';
        }
    }
return (

    <div className="page">
<div className="unit-converter">
    <h2>Unit Converter</h2>
    <form id="unitConverter">
        <div className="input-group">
            <label htmlFor="fromUnit">From:</label>
            <input type="number" id="fromUnit" name="fromUnit" />
            <select id="fromType" name="fromType">
                <option value="feet">Feet</option>
                <option value="meters">Meters</option>
                <option value="inches">Inches</option>
                <option value="kilometers">Kilometers</option>
                <option value="centimeters">Centimeters</option>
                <option value="yards">Yards</option>
                <option value="miles">Miles</option>
             
            </select>
        </div>

        <div className="input-group">
            <label htmlFor="toUnit">To:</label>
            <input type="text" id="toUnit" name="toUnit" readonly />
            <select id="toType" name="toType">
                <option value="feet">Feet</option>
                <option value="meters">Meters</option>
                <option value="inches">Inches</option>
                <option value="kilometers">Kilometers</option>
                <option value="centimeters">Centimeters</option>
                <option value="yards">Yards</option>
                <option value="miles">Miles</option>
                
            </select>
        </div>

        <div className="button-group">
            <button type="button" onClick={convertUnits}>Convert</button>
        </div>
    </form>
</div>
<style jsx>{`
        
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .page {
        margin-top:40px;
        display:flex;
            align-items:center;
            justify-content:center;}
        .unit-converter {
            
            width: 320px;
            padding: 20px;
            border-radius: 8px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .unit-converter h2 {
            text-align: center;
            margin-bottom: 20px;
        }

        .input-group {
            margin-bottom: 15px;
        }

        .input-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }

        .input-group select,
        .input-group input[type="number"],
        .input-group input[type="text"] {
            width: calc(100% - 20px);
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }

        .button-group {
            text-align: center;
        }

        .button-group button {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }

        .button-group button:hover {
            background-color: #0056b3;
        }
    `}</style>


</div>
)
}
