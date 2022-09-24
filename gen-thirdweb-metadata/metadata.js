import fs from "fs";
import path from "path";
// read from animation dir
// generate 10000 items into images
const data = fs.readFileSync("atm/metadata.json", "utf8");

const list = JSON.parse(data);

for (let i = 0; i < list.length; i++) {
  list[i].image =
    "https://bafybeid56upesvkj34d4dycaku6v532m2i3saojoqsnoloiiz5zbx5q2le.ipfs.nftstorage.link/5496.mp4";
  list[i].animation_url =
    "https://bafybeid56upesvkj34d4dycaku6v532m2i3saojoqsnoloiiz5zbx5q2le.ipfs.nftstorage.link/5496.mp4";
}

console.log(list[0].image);
fs.writeFileSync("atm/metadata.json", JSON.stringify(list));
