import React, { useMemo } from 'react';
import { NFT } from '../../../data/models';
import chains from '../../../assets/chains.json';

type NFTCardProps = {
  data: NFT;
};

export default function NFTCard({ data }: NFTCardProps) {
  const chain = useMemo(() => chains[parseInt(data.blockchain) as unknown as keyof typeof chains], [data.blockchain]);
  return (
    <div className="card card-bordered shadow-xl bg-transparent w-full h-full">
      <figure className="w-full h-[200px]">
        <img src={data.image} alt={data.name} className="w-full h-full" />
      </figure>
      <div className="card-body w-full">
        <div className="flex justify-between items-center w-full">
          <span className="text-[#afafaf] font-[700] text-[0.96em]">{data.collectionName}</span>
          <span className="text-[#afafaf] font-[700] text-[0.6em]">{chain.name}</span>
        </div>
        <span className="text-[#fff] font-[800] text-[1em]">{data.name}</span>
        <div className="bg-[#d9d9d9]/[.17] flex justify-between w-full rounded-[10px] py-1 px-2 text-[0.75em]">
          <div className="flex flex-col gap-2 justify-between items-center">
            <span className="text-[#afafaf] font-[700]">Price</span>
            <span className="text-[#fff] font-[700]">
              {data.market_data.price.toPrecision(3)} {chain.symbol}
            </span>
          </div>
          <div className="flex flex-col gap-2 justify-between items-center">
            <span className="text-[#afafaf] font-[700]">Highest Bid</span>
            <span className="text-[#fff] font-[700]">
              {data.market_data.highestBid.toPrecision(3)} {chain.symbol}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
