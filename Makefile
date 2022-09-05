moph_access_token:
	node ./moph/access-token

gen_thirdweb_metadata_pokemon:
	DIR=./gen-thirdweb-metadata/pokemon NFT_NAME="Pokemon Collection" NFT_MEDIA_FORMAT=".png" node ./gen-thirdweb-metadata

gen_thirdweb_metadata_mxkd:
	DIR=./gen-thirdweb-metadata/mxkd NFT_NAME="MXKD" NFT_MEDIA_FORMAT=".png" node ./gen-thirdweb-metadata

