export type NFT = {
  collection: string;
  collectionName: string;
  creator: string;
  currentOwner: string;
  id: string;
  tokenId: string;
  name: string;
  blockchain: string;
  properties: Array<{ label: string; value: string }>;
  image: string;
  description: string;
  external_url?: string;
  animation_url?: string;
  market_data: {
    price: number;
    highestBid: number;
    highestBidder: string;
  };
};

export type NFTs = Array<NFT>;

export type Collection = {
  name: string;
  id: string;
  creator: string;
  currentOwner: string;
  floorPrice: number;
  volume: number;
  owners: number;
  symbol: string;
  items: number;
  image: string;
  banner: string;
  blockchain: string;
  createdOn: Date;
  urls?: {
    twitter?: string;
    discord?: string;
    website?: string;
    telegram?: string;
    reddit?: string;
  };
};

export type Collections = Array<Collection>;
