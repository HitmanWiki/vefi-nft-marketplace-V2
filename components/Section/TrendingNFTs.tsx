import React from 'react';
import _ from 'lodash';

const mockData = [
  {
    collectionName: 'Planet Girls',
    name: 'Planet Girl #1',
    image: '/placeholders/images/NFT2.png',
    blockChain: 'Ethereum',
    price: '150 wETH',
    highestBid: '200 wETH'
  },
  {
    collectionName: 'Depraved Generals',
    name: 'General Walstein',
    image: '/placeholders/images/NFT1.png',
    blockChain: 'Polygon',
    price: '50 wMATIC',
    highestBid: '120 wMATIC'
  },
  {
    collectionName: 'Super Egos',
    name: 'Super Ego #1',
    image: '/placeholders/images/NFT3.png',
    blockChain: 'Bitgert',
    price: '5000000 wBRISE',
    highestBid: '12000000 wBRISE'
  },
  {
    collectionName: 'Planet Girls',
    name: 'Planet Girl #1',
    image: '/placeholders/images/NFT2.png',
    blockChain: 'Ethereum',
    price: '150 wETH',
    highestBid: '200 wETH'
  },
  {
    collectionName: 'Depraved Generals',
    name: 'General Walstein',
    image: '/placeholders/images/NFT1.png',
    blockChain: 'Aurora',
    price: '500 wAUR',
    highestBid: '1200 wAUR'
  },
  {
    collectionName: 'Super Ego',
    name: 'Super Ego #1',
    image: '/placeholders/images/NFT3.png',
    blockChain: 'Neon',
    price: '500 wNEON',
    highestBid: '1200 wNEON'
  }
];
export default function TrendingNFTs() {
  return (
    <div className="flex flex-col lg:flex-row justify-start md:justify-center items-center gap-3 w-full overflow-auto">
      {_.map(mockData, (data, index) => (
        <div key={index} className="px-[3px] py-[4px] w-full lg:w-1/4">
          <div className="card card-bordered shadow-xl bg-transparent w-full h-full">
            <figure className="w-full h-[200px]">
              <img src={data.image} alt={data.name} className="w-full h-full" />
            </figure>
            <div className="card-body w-full">
              <div className="flex justify-between items-center w-full">
                <span className="text-[#afafaf] font-[700] text-[0.96em]">{data.collectionName}</span>
                <span className="text-[#afafaf] font-[700] text-[0.6em]">{data.blockChain}</span>
              </div>
              <span className="text-[#fff] font-[800] text-[1em]">{data.name}</span>
              <div className="bg-[#d9d9d9]/[.17] flex justify-between w-full rounded-[10px] py-1 px-2 text-[0.75em]">
                <div className="flex flex-col gap-2 justify-between items-center">
                  <span className="text-[#afafaf] font-[700]">Price</span>
                  <span className="text-[#fff] font-[700]">{data.price}</span>
                </div>
                <div className="flex flex-col gap-2 justify-between items-center">
                  <span className="text-[#afafaf] font-[700]">Highest Bid</span>
                  <span className="text-[#fff] font-[700]">{data.highestBid}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
