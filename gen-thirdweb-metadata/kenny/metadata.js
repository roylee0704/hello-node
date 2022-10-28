import fs from "fs";

// https://bafybeid7456yfoqrivmocrzafquwrmmbmflvmwntezmq4qzxbxv3dxqwsm.ipfs.nftstorage.link/silver.png

const iterator = [
  {
    delay:
      "https://bafybeiggiyet3fqbpjuzpvi42anyfc7awmnen47g5qifhviyjipz47l7ee.ipfs.nftstorage.link/10s.mp4",
    full: "ipfs://bafybeida2ke7orusqa3us2c7dwikf7atbrlnczplieyr55jibcwkroayum",
    delayCover:
      "https://bafybeiaydjzezgvebbceknvzvvtkkfibjnnhmw3ijwrhbxco3gh2h2m4gy.ipfs.nftstorage.link/",
    fullCover:
      "ipfs://bafybeih37eyu7ldqjzmflmznchglzu35cthziwfcebd6qtbuxlb3scqsjq",
    count: 666,
  },
];

const json = [];

for (let i = 0; i < iterator.length; i++) {
  for (let x = 0; x < iterator[i].count; x++) {
    json.push({
      name: `It’s Kenny – It Doesn’t Matter #${x}`,
      animation_url: iterator[i].full,
      image: iterator[i].fullCover,
      attributes: {
        Album: "It's Kenny",
        Artist: "Kenny",
        Song: "It Doesn't Matter",
      },
      properties: {
        Album: "It's Kenny",
        Artist: "Kenny",
        Song: "It Doesn't Matter",
      },
      external_url: `https://colorverse.social/nft-collections/cl7r55y1o00002vw2umse6pyb`,
    });
  }

  //   list[i].image =
  //     "https://bafybeid56upesvkj34d4dycaku6v532m2i3saojoqsnoloiiz5zbx5q2le.ipfs.nftstorage.link/5496.mp4";
  //   list[i].animation_url =
  //     "https://bafybeid56upesvkj34d4dycaku6v532m2i3saojoqsnoloiiz5zbx5q2le.ipfs.nftstorage.link/5496.mp4";
}

fs.writeFileSync("./metadata.json", JSON.stringify(json));
