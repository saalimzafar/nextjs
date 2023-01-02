import fs from "fs";
export default (req, res) => {
  
  let formData = req.body;
  
  /* let data = JSON.stringify(formData);*/
  const writeData = () => {
    fs.writeFile("petData.json", formData, (err) => {
      if (err) throw err;
      console.log("done");
    });
  };
  writeData();
};
