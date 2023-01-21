import React, { useState, useEffect } from 'react';
import { useTimeoutFn } from 'react-use';
import { Transition } from '@headlessui/react';
import { FiHeart } from 'react-icons/fi';
import _ from 'lodash';

// To be removed when actual data is available or precedented
const mockData: Array<{
  image: string;
  name: string;
  artisteName: string;
  highestBid: number;
  currentPrice: number;
  blockchain: string;
}> = [
  {
    image: '/placeholders/images/artwork1.png',
    name: 'Away in Aweland',
    artisteName: 'Krypto',
    highestBid: 2.5,
    currentPrice: 2.5,
    blockchain: 'BSC'
  },
  {
    image: '/placeholders/images/artwork2.png',
    name: 'Away in Aweland',
    artisteName: 'Krypto',
    highestBid: 2.5,
    currentPrice: 2.5,
    blockchain: 'BRISE'
  },
  {
    image: '/placeholders/images/artwork1.png',
    name: 'Away in Aweland',
    artisteName: 'Krypto',
    highestBid: 2.5,
    currentPrice: 2.5,
    blockchain: 'ETH'
  },
  {
    image: '/placeholders/images/artwork2.png',
    name: 'Away in Aweland',
    artisteName: 'Krypto',
    highestBid: 2.5,
    currentPrice: 2.5,
    blockchain: 'BSC'
  }
];

export default function Hero() {
  const heroTexts = ['Digitally Crafted', 'Aesthetically Appealing', 'Cryptographically Signed', 'Community Backed'];
  const [textIndex, setTextIndex] = useState<number>(-1);

  const incrementTextIndex = () => {
    setTextIndex((i) => (i < heroTexts.length - 1 ? i + 1 : 0));
    callIncrementTextIndex();
  };

  const [, , callIncrementTextIndex] = useTimeoutFn(incrementTextIndex, 5000);

  useEffect(() => {
    (() => {
      incrementTextIndex();
    })();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-4 px-5">
      <div className="flex flex-col justify-center items-center md:items-start gap-2">
        <span className="text-[#fff] font-[800] text-[30px] md:text-[48px] font-monumentExtended text-center md:text-left">Buy &amp; Sell</span>
        {_.map(heroTexts, (txt, index) => (
          <Transition
            key={index}
            as="span"
            className="text-[#fff] font-[800] text-[20px] md:text-[48px] text-center md:text-left"
            enter="transform transition ease-in-out duration-[500ms]"
            enterFrom="opacity-0 translate-y-4"
            enterTo="opacity-100 translate-y-0"
            show={index === textIndex}
          >
            {txt}
          </Transition>
        ))}
        <span className="text-[#fff] font-[800] text-[30px] md:text-[48px] font-monumentExtended w-full text-center md:text-left">
          Artworks On Multiple Chains
        </span>
        <div className="flex flex-row justify-center md:justify-start items-center w-full">
          <span className="text-[#fff] font-[400] text-[16px] font-outfit text-center md:text-left">A world of NFTs with community in mind</span>
        </div>
        <div className="flex flex-row justify-center md:justify-start items-center w-full">
          <button className="bg-[#ffe600] rounded-[12px] px-8 py-1 flex justify-center items-center">
            <span className="text-[#000] font-[500] text-[16px] font-outfit">Become a creator</span>
          </button>
        </div>
      </div>
      <div className="carousel carousel-center gap-3 w-full overflow-auto">
        {_.map(mockData, (data, index) => (
          <div key={index} className="px-2 py-2 carousel-item w-full lg:w-1/4">
            <div className="card card-bordered shadow-xl px-2 py-2 bg-white rounded-[26px] w-full h-full">
              <div className="flex justify-center items-center transition-opacity ease-in-out">
                <div className="absolute py-2 top-3 left-2 w-full flex flex-col justify-start items-center gap-16 bg-transparent opacity-0 hover:opacity-100 h-[250px]">
                  <div className="flex justify-around items-center w-full">
                    <span className="text-[#fff] font-[1000] text-[0.9em]">{data.blockchain}</span>
                    <button className="bg-[#000]/[.2] rounded-[25px] px-3 py-1 flex justify-center items-center gap-2">
                      <FiHeart className="text-[#fff]" />
                      <span className="text-[#fff] font-[1000] text-[0.5em]">700</span>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-[#ffe600] rounded-[25px] px-8 py-1 flex justify-center items-center">
                      <span className="text-[#000] font-[700] text-[1em]">Buy</span>
                    </button>
                  </div>
                </div>
                <figure>
                  <img src={data.image} alt={data.name} className="w-full h-full" />
                </figure>
              </div>
              <div className="card-body w-full">
                <div className="flex flex-row justify-between items-center w-full overflow-auto">
                  <div className="flex justify-center items-center gap-3">
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <img src={data.image} alt={data.name} />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <span className="font-[800] font-monumentExtended text-[1em]">{data.name}</span>
                      <p className="font-[400] text-[0.7em] text-[#000] font-outfit">{data.artisteName}</p>
                    </div>
                  </div>
                  <div className="avatar-group -space-x-6">
                    <div className="avatar">
                      <div className="w-9">
                        <img src={data.image} alt={data.name} />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-9">
                        <img src={data.image} alt={data.name} />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-9">
                        <img src={data.image} alt={data.name} />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-9">
                        <img src={data.image} alt={data.name} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-actions justify-between w-full border-t-[#000] border-t-[2px] text-[0.95em]">
                <div className="flex flex-col justify-center">
                  <span className="font-[700] text-[#000] font-outfit">Current Price</span>
                  <span className="border-[#000] border-[2px] text-[#000] font-[400] px-4 rounded-[11px]">
                    {data.currentPrice} {data.blockchain}
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-[700] text-[#000] font-outfit">Highest Bid</span>
                  <span className="border-[#000] border-[2px] text-[#000] font-[400] px-4 rounded-[11px]">
                    {data.highestBid} {data.blockchain}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
