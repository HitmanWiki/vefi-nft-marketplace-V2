import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { FiTwitter, FiGlobe } from 'react-icons/fi';
import { AiOutlineReddit } from 'react-icons/ai';
import { FaTelegramPlane, FaDiscord } from 'react-icons/fa';
import { mockDataSource } from '../../data/mock';
import chains from '../../assets/chains.json';

const iconsMap = {
  twitter: <FiTwitter />,
  reddit: <AiOutlineReddit />,
  telegram: <FaTelegramPlane />,
  discord: <FaDiscord />,
  website: <FiGlobe />
};

export default function CollectionsList() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <>
      {hydrated && (
        <div className="w-full overflow-auto">
          <div className="table border-separate w-full bg-transparent overflow-auto border-spacing-y-[15px] border-spacing-x-[0px]">
            <div
              className="text-[#fff] table-header-group font-[800] h-[50px] py-[10px] font-monumentExtended w-full"
              style={{ background: 'linear-gradient(0deg, #121212, #121212), #04032D' }}
            >
              <div className="table-row w-full space-x-4 uppercase text-[1.2em] gap-2">
                <div className="text-left table-cell py-5">#</div>
                <div className="text-left table-cell py-5">Collection</div>
                <div className="text-center table-cell py-5">Links</div>
                <div className="text-center table-cell py-5">Floor Price</div>
                <div className="text-center table-cell py-5">Volume</div>
                <div className="text-center table-cell py-5">Created On</div>
              </div>
            </div>
            <div className="table-row-group gap-1 w-full font-monumentExtended text-[0.9em] border-t-[1em] border-transparent border-solid">
              {_.map(mockDataSource.collections, (item, index) => (
                <div key={index} className="table-row text-[#fff] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                  <div className="text-left table-cell font-[600] px-2">{index + 1}</div>
                  <div className="table-cell text-center px-2">
                    <div className="flex justify-start items-center gap-2 py-1 w-full">
                      <img src={item.image} alt={item.name} className="rounded-[3px] w-8 h-8" />
                      <div className="flex justify-start px-2">
                        <Link href={`/collections/${item.blockchain}/${item.id}`}>
                          <a>
                            <span className="font-[600]">{item.name}</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="table-cell text-center px-2">
                    <div className="flex justify-center items-center gap-1">
                      {item.urls &&
                        _.map(Object.keys(item.urls).sort(), (link, i) => (
                          <a key={i} href={(item.urls as any)[link as keyof typeof item.urls]} target="_blank" rel="noreferrer">
                            {iconsMap[link as keyof typeof iconsMap]}
                          </a>
                        ))}
                    </div>
                  </div>
                  <div className="text-center table-cell px-2">
                    {item.floorPrice.toPrecision(3)} {chains[parseInt(item.blockchain) as unknown as keyof typeof chains].symbol}
                  </div>
                  <div className="text-center table-cell px-2">
                    {item.volume.toPrecision(3)} {chains[parseInt(item.blockchain) as unknown as keyof typeof chains].symbol}
                  </div>
                  <div className="text-center table-cell px-2">{item.createdOn.toDateString()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
