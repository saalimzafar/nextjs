import fs from "fs";
export default (req, res) => {
  let petData = require("../../../petData.json");
  let formData = req.body;
  petData.push(formData);
  let data = JSON.stringify(petData);
  const writeData = () => {
    fs.writeFile("petData.json", data, (err) => {
      if (err) throw err;
      console.log("done");
    });
  };
  writeData();
};
