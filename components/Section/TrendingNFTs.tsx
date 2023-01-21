import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { mockDataSource } from '../../data/mock';
import NFTCard from '../Card/NFTCard';

export default function TrendingNFTs() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <>
      {hydrated && (
        <div className="carousel carousel-center gap-3 w-full overflow-auto">
          {_.slice(mockDataSource.nfts, mockDataSource.nfts.length - 5, mockDataSource.nfts.length).map((data, index) => (
            <div key={index} className="px-1 py-2 carousel-item w-full lg:w-1/5">
              <Link href={`/nfts/${data.blockchain}/${data.id}`} className="w-full">
                <a className="w-full">
                  <NFTCard data={data} />
                </a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
