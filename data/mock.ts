import { v4, v1 } from 'uuid';
import _ from 'lodash';
import { NFTs, Collections } from './models';
import chains from '../assets/chains.json';

const chainKeys = Object.keys(chains).map((key) => parseInt(key));

class DataStore {
  public collections: Collections;
  public nfts: NFTs;

  constructor() {
    this.collections = [
      {
        name: 'Planet Girls',
        id: v4(),
        creator: v1(),
        currentOwner: v1(),
        floorPrice: Math.random() * 100,
        volume: Math.random() * 200,
        owners: Math.floor(Math.random() * 2000),
        symbol: 'PGRLS',
        items: 0,
        image: 'https://placeimg.com/300/300/people',
        banner: 'https://placeimg.com/1260/900/people',
        urls: { twitter: 'https://twitter.com/java_warrior', website: 'https://google.com' },
        blockchain: `0x${chainKeys[Math.floor(Math.random() * chainKeys.length)].toString(16)}`,
        createdOn: new Date()
      },
      {
        name: 'Pleonides',
        id: v4(),
        creator: v1(),
        currentOwner: v1(),
        floorPrice: Math.random() * 100,
        volume: Math.random() * 200,
        owners: Math.floor(Math.random() * 2000),
        symbol: 'PGRLS',
        items: 0,
        image: 'https://placeimg.com/300/300/tech',
        banner: 'https://placeimg.com/1260/900/tech',
        urls: { twitter: 'https://twitter.com/java_warrior', website: 'https://google.com' },
        blockchain: `0x${chainKeys[Math.floor(Math.random() * chainKeys.length)].toString(16)}`,
        createdOn: new Date()
      },
      {
        name: 'Arcadius',
        id: v4(),
        creator: v1(),
        currentOwner: v1(),
        floorPrice: Math.random() * 100,
        volume: Math.random() * 200,
        owners: Math.floor(Math.random() * 2000),
        symbol: 'PGRLS',
        items: 0,
        image: 'https://placeimg.com/300/300/arch',
        banner: 'https://placeimg.com/1260/900/arch',
        urls: { twitter: 'https://twitter.com/java_warrior', website: 'https://google.com' },
        blockchain: `0x${chainKeys[Math.floor(Math.random() * chainKeys.length)].toString(16)}`,
        createdOn: new Date()
      },
      {
        name: 'Depraved Generals',
        id: v4(),
        creator: v1(),
        currentOwner: v1(),
        floorPrice: Math.random() * 100,
        volume: Math.random() * 200,
        owners: Math.floor(Math.random() * 2000),
        symbol: 'PGRLS',
        items: 0,
        image: 'https://placeimg.com/300/300/people',
        banner: 'https://placeimg.com/1260/900/people',
        urls: {
          twitter: 'https://twitter.com/java_warrior',
          website: 'https://google.com',
          reddit: 'https://reddit.com',
          discord: 'https://discord.com'
        },
        blockchain: `0x${chainKeys[Math.floor(Math.random() * chainKeys.length)].toString(16)}`,
        createdOn: new Date()
      },
      {
        name: 'Caustic Actors',
        id: v4(),
        creator: v1(),
        currentOwner: v1(),
        floorPrice: Math.random() * 100,
        volume: Math.random() * 200,
        owners: Math.floor(Math.random() * 2000),
        symbol: 'PGRLS',
        items: 0,
        image: 'https://placeimg.com/300/300/people',
        banner: 'https://placeimg.com/1260/900/people',
        urls: {
          twitter: 'https://twitter.com/java_warrior',
          website: 'https://google.com',
          reddit: 'https://reddit.com',
          discord: 'https://discord.com',
          telegram: 'https://telegram.com'
        },
        blockchain: `0x${chainKeys[Math.floor(Math.random() * chainKeys.length)].toString(16)}`,
        createdOn: new Date()
      },
      {
        name: 'Denied Leverage',
        id: v4(),
        creator: v1(),
        currentOwner: v1(),
        floorPrice: Math.random() * 100,
        volume: Math.random() * 200,
        owners: Math.floor(Math.random() * 2000),
        symbol: 'PGRLS',
        items: 0,
        image: 'https://placeimg.com/300/300/people',
        banner: 'https://placeimg.com/1260/900/people',
        urls: {
          twitter: 'https://twitter.com/java_warrior',
          website: 'https://google.com',
          reddit: 'https://reddit.com',
          discord: 'https://discord.com',
          telegram: 'https://telegram.com'
        },
        blockchain: `0x${chainKeys[Math.floor(Math.random() * chainKeys.length)].toString(16)}`,
        createdOn: new Date()
      }
    ];

    this.nfts = (() => {
      let items: NFTs = [];

      for (let i = 0; i < Math.floor(Math.random() * 12000); i++) {
        const collection = this.collections[Math.floor(Math.random() * this.collections.length)];
        const price = Math.random() * 400;
        const id = collection.items + 1;
        items = _.concat(items, {
          name: collection.name + '#' + id,
          collection: collection.id,
          collectionName: collection.name,
          creator: v1(),
          currentOwner: v1(),
          id: collection.id + ':' + id,
          tokenId: _.toString(id),
          blockchain: collection.blockchain,
          properties: [
            {
              label: 'eyes',
              value: 'blue'
            },
            {
              label: 'cloth',
              value: 'hoodie'
            },
            {
              label: 'chain',
              value: 'gold'
            },
            {
              label: 'weapon',
              value: 'axe'
            },
            {
              label: 'demeanor',
              value: 'comely'
            },
            {
              label: 'potion',
              value: 'lavender'
            }
          ],
          image: 'https://placeimg.com/300/300/any',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed diam nonum vulputate velit.',
          external_url: 'https://google.com',
          market_data: {
            price,
            highestBid: price,
            highestBidder: v1()
          }
        });
        const collectionIndex = _.indexOf(this.collections, collection);
        collection.items = id;
        this.collections.splice(collectionIndex, 1, collection);
      }

      return items;
    })();
  }
}

export const mockDataSource = new DataStore();
