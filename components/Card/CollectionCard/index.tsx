import React, { useMemo } from 'react';
import { Collection } from '../../../data/models';
import chains from '../../../assets/chains.json';

type CollectionCardProps = {
  data: Collection;
};

export default function CollectionCard({ data }: CollectionCardProps) {
  const chain = useMemo(() => chains[parseInt(data.blockchain) as unknown as keyof typeof chains], [data.blockchain]);
  return (
    <div className="w-full rounded-[20px] px-0 py-0 border border-[#fff] flex flex-col justify-center items-center gap-6">
      <div style={{ backgroundImage: `url(${data.banner})` }} className="rounded-[20px] h-[12rem] w-full bg-cover flex justify-start items-end px-2">
        <div className="avatar relative bottom-[-1.3rem]">
          <div className="w-14 rounded-xl">
            <img src={data.image} alt={data.name} />
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center w-full gap-2 px-1">
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="text-ellipsis text-[#fff] font-monumentExtended text-[0.7em]">{data.name}</span>
          <span className="text-[#afafaf] font-monumentExtended text-[0.6em]">{data.owners} Owners</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 text-[0.6em]">
          <span className="text-ellipsis text-[#afafaf] font-monumentExtended">Total Volume</span>
          <span className="text-[#fff] font-monumentExtended">
            {data.volume.toPrecision(3)} {chain.symbol}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 text-[0.6em]">
          <span className="text-ellipsis text-[#afafaf] font-monumentExtended">Floor Price</span>
          <span className="text-[#fff] font-monumentExtended">
            {data.floorPrice.toPrecision(3)} {chain.symbol}
          </span>
        </div>
      </div>
    </div>
  );
}
