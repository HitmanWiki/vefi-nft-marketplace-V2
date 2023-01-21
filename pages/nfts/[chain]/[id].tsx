import Link from 'next/link';
import { useRouter } from 'next/router';
import _ from 'lodash';
import { TailSpin } from 'react-loader-spinner';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FiHeart, FiRefreshCcw, FiMoreHorizontal, FiShare, FiPlus } from 'react-icons/fi';
import { Collection, NFT as NFTModel, NFTs } from '../../../data/models';
import { mockDataSource } from '../../../data/mock';
import { NFTProperties, Overview } from '../../../screens/nfts';
import NFTCard from '../../../components/Card/NFTCard';

enum Tabs {
  OVERVIEW = 'overview',
  PROPERTIES = 'properties',
  BIDS = 'bids',
  HISTORY = 'history'
}

export default function NFT() {
  const { query, push, asPath } = useRouter();
  const tab = useMemo(() => (query.tab as Tabs) || Tabs.OVERVIEW, [query.tab]);
  const [data, setData] = useState<NFTModel>();
  const [otherData, setOtherData] = useState<NFTs>([]);

  const RenderedTabChild = () => {
    switch (tab) {
      case Tabs.OVERVIEW:
        return <Overview nft={data as NFTModel} />;
      case Tabs.PROPERTIES:
        return <NFTProperties nft={data as NFTModel} />;
      default:
        return <Overview nft={data as NFTModel} />;
    }
  };

  const randomizeStartAndEndElements = useCallback((collection: Collection) => {
    let randomNumber = Math.floor(Math.random() * collection.items);

    if (collection.items >= 7) {
      while (randomNumber < 7) {
        randomNumber = Math.floor(Math.random() * collection.items);
      }
      const start = randomNumber - 7;
      const end = randomNumber;
      return [start, end];
    }

    return [0, collection.items];
  }, []);

  useEffect(() => {
    if (query.chain && query.id) {
      const nft = mockDataSource.nfts.find((val) => val.blockchain === query.chain && val.id === query.id);
      const collection = mockDataSource.collections.find((val) => val.id === nft!.collection);
      const [start, end] = randomizeStartAndEndElements(collection as Collection);

      let otherNFTs: NFTs = [];

      for (let i = start; i < end; i++) {
        otherNFTs = _.concat(otherNFTs, mockDataSource.nfts.find((val) => val.id === collection!.id + ':' + (i + 1)) as NFTModel);
      }
      setTimeout(() => {
        setData(nft);
        setOtherData(otherNFTs);
      }, 4000);
    }
  }, [query.chain, query.id]);

  return (
    <>
      <div className="container w-full mx-auto flex flex-col justify-center items-center gap-5 px-3 lg:px-7 py-3">
        {data ? (
          <>
            <div className="w-full flex flex-col lg:flex-row justify-between items-center px-2 py-2 h-auto">
              <div className="flex flex-col w-full lg:w-1/3 gap-3">
                <div className="w-full h-[28rem] rounded-[25px]">
                  <img src={data.image} alt={data.name} className="w-full h-full rounded-[inherit]" />
                </div>
                <div className="w-full bg-[#fff]/70 rounded-[20px] px-1 py-1 flex justify-center items-center">
                  {_.values(Tabs).map((key, index) => (
                    <button
                      key={index}
                      onClick={() => push(`${new URL(asPath, window.location.href).pathname}?tab=${key}`)}
                      className={`gap-1 flex justify-center items-center rounded-[15px] w-1/4 px-3 py-3 font-outfit text-[#01003e] text-[0.8em] capitalize ${
                        tab === key ? 'bg-[#fff]' : 'bg-transparent'
                      }`}
                    >
                      {key}
                      {key === Tabs.PROPERTIES && (
                        <div className="bg-[#dcdcdc] rounded-full px-1 w-4 h-4 py-1 flex justify-center items-center">{data.properties?.length}</div>
                      )}
                    </button>
                  ))}
                </div>
                <div className="w-full p-3">
                  <RenderedTabChild />
                </div>
              </div>

              <div className="flex flex-col w-full lg:w-1/4 gap-1">
                <h2 className="text-[14px] text-[#fff] font-outfit leading-10 font-[700]">{data.collectionName}</h2>

                <h1 className="text-[26px] text-[#fff] font-[800] font-outfit leading-10 justify-center md:justify-start items-center">
                  {data.name}
                </h1>

                <div className="flex justify-between py-5 border-b-[1px] border-gray-700">
                  <div className="flex justify-center items-center gap-1">
                    <div className="h-12 w-12 bg-[yellow] rounded-full"></div>
                    <div className="flex flex-col px-2">
                      <span className="text-[#afafaf] font-[700] text-[12px]">Creator</span>
                      <span className="text-[0.68em] text-[#fff] leading-7 font-[800]">
                        {data.creator && _.truncate(data.creator, { length: 11 })}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-1">
                    <div className="h-12 w-12 bg-[yellow] rounded-full"></div>
                    <div className="flex flex-col px-2">
                      <span className="text-[#afafaf] font-[700] text-[12px]">Current owner</span>
                      <span className="text-[0.68em] text-[#fff] leading-7 font-[800]">
                        {data.currentOwner && _.truncate(data.currentOwner, { length: 11 })}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex py-[20px] justify-between text-[#fff] font-[600]">
                  <div className="flex items-center gap-2">
                    <span>
                      <FiHeart />
                    </span>
                    <span>1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <FiShare />
                    </span>
                    <span>Share</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <FiRefreshCcw />
                    </span>
                    <span>Refresh</span>
                  </div>
                  <div className="flex items-center">
                    <span>
                      <FiMoreHorizontal />
                    </span>
                  </div>
                </div>
                <div className="h-auto w-full p-[10px] border rounded-[10px] mt-[10px]">
                  <div className="flex justify-between w-full gap-[5px]">
                    <div className="text-center flex flex-col bg-[#fff] p-[10px] rounded-[10px] w-1/2">
                      <span className="text-[#03015AB2] font-[600] text-[12px]">Price</span>
                      <h2 className="text-[#03015AB2] font-[800] text-[24px]">3.3ETH</h2>
                      <span className="text-[#03015AB2] font-[600]">$5,416</span>
                    </div>
                    <div className="bg-[#010037] text-center p-[10px] rounded-[10px] text-[#fff] w-1/2">
                      <span className="text-[12px] font-[600] text-[#fff]">
                        Highest <b>Floor Bid</b>
                      </span>
                      <h2 className="text-[#fff] font-[800] text-[24px]">0.23wETH</h2>
                      <span className="text-[#fff] font-[600] text-[12px]">by Promiselxg</span>
                    </div>
                  </div>
                  <div className="py-[40px] flex justify-center">
                    <h2 className="text-[#fff] font-[700]">Last Sale Price 3.5wETH</h2>
                  </div>
                  <div className="flex flex-col w-full ">
                    <div className="flex p-3 gap-2 justify-center w-full items-center">
                      <input type="text" placeholder="Buy now for 3.5ETH" className="input w-full max-w-xs" />
                      <button className="btn">
                        <FiPlus />
                      </button>
                    </div>
                    <button className="btn btn-outline" style={{ color: '#fff', fontWeight: 'normal' }}>
                      Place a bid
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-auto w-full justify-center items-center gap-2">
              <h2 className="font-[700] text-[2em] text-[#fff] font-outfit text-center">More from this collection</h2>
              <div className="carousel carousel-center gap-3 w-full overflow-auto">
                {_.map(otherData, (data, index) => (
                  <div key={index} className="carousel-item px-1 py-2 w-full lg:w-1/4">
                    <Link href={`/nfts/${data.blockchain}/${data.id}`} className="w-full">
                      <a className="w-full">
                        <NFTCard data={data} />
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center py-[30px]">
              <button className="btn btn-outline btn-wide" style={{ color: '#fff', fontWeight: '600' }}>
                View Collection
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center px-5 py-5 mx-auto w-full text-center">
            <TailSpin width="400" height="200" color="#dcdcdc" visible={!data} />
          </div>
        )}
      </div>
    </>
  );
}
