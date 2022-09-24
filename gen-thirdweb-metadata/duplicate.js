import fs from "fs";
import path from "path";
// read from animation dir
// generate 10000 items into images
const fileNames = fs.readdirSync("atm/animations");

console.log(fileNames);

for (let i = 0; i < fileNames.length; i++) {
  console.log(path.extname(fileNames[i]));
}

// const filename = "index.js".split("."); //filename like 0.gif to gif
const times = 10000; // number of times to duplicate
const dir = "atm/images";
const atmSilver = fileNames[0];
for (let i = 0; i < times; i++) {
  const newFilename = `${i}${path.extname(atmSilver)}`;
  fs.copyFileSync(
    path.join("atm/animations", atmSilver),
    path.join("atm/images/", newFilename)
  );
}
