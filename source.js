var path = require("path")
var fs = require("fs")
var csvjson = require("csvjson")
const jsonFile = "customer-json.json"
var data = fs.readFileSync(path.join(__dirname, 'customer-data.csv'), { encoding: 'utf-8'})
var options = { delimiter: ',' }

var result = csvjson.toObject(data, options);
fs.writeFileSync(path.join(__dirname, jsonFile), JSON.stringify(result, null, 2))
