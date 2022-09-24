import fs from "fs";

// https://bafybeid7456yfoqrivmocrzafquwrmmbmflvmwntezmq4qzxbxv3dxqwsm.ipfs.nftstorage.link/silver.png

const iterator = [
  { tier: "Silver", count: 6000 },
  { tier: "Gold", count: 3000 },
  { tier: "Diamond", count: 1000 },
];

const json = [];

for (let i = 0; i < iterator.length; i++) {
  console.log(iterator[i], "s");

  for (let x = 0; x < iterator[i].count; x++) {
    json.push({
      name: "Colorverse Genesis NFT",
      animation_url: `https://bafybeid7456yfoqrivmocrzafquwrmmbmflvmwntezmq4qzxbxv3dxqwsm.ipfs.nftstorage.link/${iterator[
        i
      ].tier.toLowerCase()}.mp4`,
      image: `https://bafybeid7456yfoqrivmocrzafquwrmmbmflvmwntezmq4qzxbxv3dxqwsm.ipfs.nftstorage.link/${iterator[
        i
      ].tier.toLowerCase()}.png`,
      attributes: [
        {
          Tier: iterator[i].tier,
        },
      ],
      properties: [
        {
          Tier: iterator[i].tier,
        },
      ],
      external_url: `https://staging.colorverse.social/nft-collections/cl810p3y60000i8w23kxn1rg9`,
    });
  }

  //   list[i].image =
  //     "https://bafybeid56upesvkj34d4dycaku6v532m2i3saojoqsnoloiiz5zbx5q2le.ipfs.nftstorage.link/5496.mp4";
  //   list[i].animation_url =
  //     "https://bafybeid56upesvkj34d4dycaku6v532m2i3saojoqsnoloiiz5zbx5q2le.ipfs.nftstorage.link/5496.mp4";
}

fs.writeFileSync("atm/metadata.json", JSON.stringify(json));
