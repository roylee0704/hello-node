import fs from "fs";

// https://bafybeid7456yfoqrivmocrzafquwrmmbmflvmwntezmq4qzxbxv3dxqwsm.ipfs.nftstorage.link/silver.png

const iterator = [
  {
    delay:
      "https://bafybeiggiyet3fqbpjuzpvi42anyfc7awmnen47g5qifhviyjipz47l7ee.ipfs.nftstorage.link/10s.mp4",
    full: "ipfs://bafybeiamsrj7islantk6vys5q5zcv4l66jf5ba3fy56khmjmhwq7xwda5m",
    delayCover:
      "https://bafybeiaydjzezgvebbceknvzvvtkkfibjnnhmw3ijwrhbxco3gh2h2m4gy.ipfs.nftstorage.link/",
    fullCover:
      "ipfs://bafybeiefwntsuayxvjjvn72qs3uvzv7wodpfw3nflaxp3ps6mqn24z6hs4",
    count: 666,
  },
];

const json = [];

for (let i = 0; i < iterator.length; i++) {
  for (let x = 0; x < iterator[i].count; x++) {
    json.push({
      name: `It’s Kenny – It Doesn’t Matter #${x}`,
      description: `Kenny Low has released the music single "It Doesn't Matter" in NFT format. This NFT enables Kenny's supporters to get involved in the community, interact with him, co-create with him, and grow alongside him.\n"It Doesn't Matter" NFT allow you to receive Kenny's gifts and occasionally participate in raffles. These gifts can include online and offline concert tickets, exclusive gifts, and more. Additionally, they can collaborate on the "It Doesn't Matter" music single's MV planning and production.\nLearn more about “It Doesn’t Matter” music single here: https://colorverse.social/c/knylow/nft-collections`,
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
