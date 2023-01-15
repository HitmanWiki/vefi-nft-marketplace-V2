import React from 'react';
import _ from 'lodash';
import Moment from 'react-moment';

const mockData = [
  {
    collectionName: 'Family Guy',
    artistName: 'Jenny Palace',
    startDate: new Date(Date.now() + 60 * 60 * 24 * 5 * 1000),
    endDate: new Date(Date.now() + 60 * 60 * 24 * 14 * 1000),
    image: '/placeholders/images/family_guy.gif'
  },
  {
    collectionName: 'Artiena',
    artistName: 'The Artiena Project',
    startDate: new Date(Date.now() - 60 * 60 * 24 * 2 * 1000),
    endDate: new Date(Date.now() + 60 * 60 * 24 * 7 * 1000),
    image: '/placeholders/images/artiena.png'
  },
  {
    collectionName: 'Goated',
    artistName: 'Herman Cassaway',
    startDate: new Date(Date.now() + 60 * 60 * 24 * 1 * 1000),
    endDate: new Date(Date.now() + 60 * 60 * 24 * 14 * 1000),
    image: '/placeholders/images/goated.png'
  },
  {
    collectionName: 'Hobo Paradise',
    artistName: 'Jenkins Truro',
    startDate: new Date(Date.now() - 60 * 60 * 24 * 14 * 1000),
    endDate: new Date(Date.now() - 60 * 60 * 24 * 2 * 1000),
    image: '/placeholders/images/hobo.png'
  },
  {
    collectionName: 'Goated',
    artistName: 'Herman Cassaway',
    startDate: new Date(Date.now() + 60 * 60 * 24 * 1 * 1000),
    endDate: new Date(Date.now() + 60 * 60 * 24 * 14 * 1000),
    image: '/placeholders/images/goated.png'
  },
  {
    collectionName: 'Goated',
    artistName: 'Herman Cassaway',
    startDate: new Date(Date.now() + 60 * 60 * 24 * 1 * 1000),
    endDate: new Date(Date.now() + 60 * 60 * 24 * 14 * 1000),
    image: '/placeholders/images/goated.png'
  },
  {
    collectionName: 'Goated',
    artistName: 'Herman Cassaway',
    startDate: new Date(Date.now() + 60 * 60 * 24 * 1 * 1000),
    endDate: new Date(Date.now() + 60 * 60 * 24 * 14 * 1000),
    image: '/placeholders/images/goated.png'
  }
];
export default function Drops() {
  return (
    <div className="flex flex-col lg:flex-row justify-start md:justify-center items-center gap-2 w-full overflow-auto">
      {_.map(mockData, (data, index) => (
        <div key={index} className="px-[3px] py-[4px] w-full lg:w-1/4">
          <div className="card card-bordered shadow-xl bg-transparent w-full h-full">
            <figure className="w-full h-[200px]">
              <img src={data.image} alt={data.collectionName} className="w-full h-full" />
            </figure>
            <div className="card-body w-full">
              <div className="flex justify-between items-center w-full">
                <span className="text-[#fff] font-[800] font-monumentExtended text-[0.8em]">{data.collectionName}</span>
                <label className="rounded-[5px] py-1 px-1 flex justify-center border-[1px] text-[12px] font-outfit border-[#00ff47] text-[#00ff47]">
                  Live
                </label>
              </div>
              <span className="text-[#e21950] font-[400] text-[0.5em] font-monumentExtended">{data.artistName}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
