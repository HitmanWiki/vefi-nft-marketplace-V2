import React from 'react';
import _ from 'lodash';
import { HiArrowNarrowRight } from 'react-icons/hi';

// Would be remove in staging/production
const mockData: Array<{ name: string; blockchain: string; image: string }> = [
  {
    name: 'Gatot Vipers',
    blockchain: 'Solana',
    image: '/placeholders/images/artwork5.png'
  },
  {
    name: 'Sneaker Faces',
    blockchain: 'Ethereum',
    image: '/placeholders/images/artwork4.png'
  },
  {
    name: 'Vain Monstrosity',
    blockchain: 'Bitgert',
    image: '/placeholders/images/artwork3.png'
  },
  {
    name: 'Sneaker Faces',
    blockchain: 'Ethereum',
    image: '/placeholders/images/artwork4.png'
  },
  {
    name: 'Gatot Vipers',
    blockchain: 'Solana',
    image: '/placeholders/images/artwork5.png'
  },
  {
    name: 'Vain Monstrosity',
    blockchain: 'Bitgert',
    image: '/placeholders/images/artwork3.png'
  },
  {
    name: 'Vain Monstrosity',
    blockchain: 'Bitgert',
    image: '/placeholders/images/artwork3.png'
  },
  {
    name: 'Vain Monstrosity',
    blockchain: 'Bitgert',
    image: '/placeholders/images/artwork3.png'
  },
  {
    name: 'Vain Monstrosity',
    blockchain: 'Bitgert',
    image: '/placeholders/images/artwork3.png'
  }
];

export default function TrendingProjects() {
  return (
    <div className="flex flex-col lg:flex-row flex-nowrap justify-start items-center w-full overflow-scroll py-2 px-3 gap-2">
      {_.map(mockData, (data, index) => (
        <div key={index} className="px-[3px] py-[4px] w-full lg:w-1/4">
          <div className="card shadow-xl bg-transparent w-full h-full image-full hover:scale-105 transition-transform ease-in-out delay-150 font-monumentExtended cursor-pointer">
            <figure>
              <img src={data.image} alt={data.name} />
            </figure>
            <div className="group justify-end card-body py-4 px-3 hover:translate-y-4 transition-transform ease-in-out delay-150">
              <div className="card-actions flex-col justify-between items-baseline">
                <div className="flex flex-col justify-start">
                  <span className="font-[800] text-[0.8em]">{data.name}</span>
                  <p className="font-[400] text-[0.5em]">{data.blockchain}</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <button className="hidden group-hover:block py-1 px-3 rounded-[10px] border-[1px] border-[#fff] text-[#fff] text-[20px]">
                    <HiArrowNarrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
