import fs from "fs";
import path from "path";

// note(roy):
//
// 1) file names must be in sequential order.
// 2) json array
function genThirdWebJsonFromImages(dir, ext, collectionName) {
  const fileNames = fs
    .readdirSync(dir)
    .filter((item) => path.extname(item) === ext);

  return (
    fileNames
      // note(roy): to fullfill req#1
      .sort((a, b) => +a.split(".")[0] - +b.split(".")[0])
      .map((f, i) => ({
        name: `${collectionName} #${i + 1}`,
        description: `${collectionName} #${i + 1}`,
        animation_url: f,
      }))
  );
}

const dir = process.env.DIR;
const nftName = process.env.NFT_NAME;
const nftMediaFormat = process.env.NFT_MEDIA_FORMAT;

const json = genThirdWebJsonFromImages(
  dir + "/images/",
  nftMediaFormat,
  nftName
);

fs.writeFileSync(dir + "/metadata.json", JSON.stringify(json));
