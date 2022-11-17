const fs = require("fs");
const path = require("path");
const dayjs = require("dayjs")

const date_time = dayjs().format("YYYY-MMM-DD-HH-MM-ss");
console.log(date_time);

module.exports.createFile = async (req, res) => {
    try {
        fs.writeFile(path.join(__dirname, "files", `${date_time}.txt`), `${Date.now()}`, (err) => {
            if (err) {
                throw err;
            }
            console.log("Complete");
        })
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports.readFile = async (req, res) => {
    try {
        fs.readdir(path.join(__dirname, "files"), {}, (err, files) => {
            if (err) {
                throw err;
            }
            console.log(files);
        })
    } catch (error) {
        res.status(500).send(error);
    }
}