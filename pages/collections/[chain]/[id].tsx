import { useEffect, useState } from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { AiOutlineReddit } from 'react-icons/ai';
import { FaTelegramPlane, FaDiscord } from 'react-icons/fa';
import { FiTwitter, FiGlobe, FiShare } from 'react-icons/fi';
import { mockDataSource } from '../../../data/mock';
import { Collection as CollectionModel } from '../../../data/models/';

const iconsMap = {
  twitter: <FiTwitter />,
  reddit: <AiOutlineReddit />,
  telegram: <FaTelegramPlane />,
  discord: <FaDiscord />,
  website: <FiGlobe />
};

export default function Collection() {
  const { query, push } = useRouter();
  const [data, setData] = useState<CollectionModel>();

  useEffect(() => {
    if (query.chain && query.id) {
      const collection = mockDataSource.collections.find((val) => val.blockchain === query.chain && val.id === query.id);
      setData(collection);
    }
  }, [query.chain, query.id]);
  return (
    <div className="flex flex-col justify-center items-center gap-5 w-full px-3 lg:px-7 py-3">
      {data ? (
        <div className="flex flex-col justify-center items-center w-full gap-5">
          <div
            style={{ backgroundImage: `url(${data.banner})` }}
            className="rounded-[30px] h-[14em] lg:h-[24em] w-full bg-cover flex justify-between items-end px-4 lg:px-6 py-1"
          >
            <div className="avatar relative bottom-[-1.3rem]">
              <div className="w-14 lg:w-24 rounded-xl border-8 border-[#000]">
                <img src={data.image} alt={data.name} />
              </div>
            </div>
            <div className="flex justify-center items-center gap-1">
              {data.urls &&
                _.map(Object.keys(data.urls).sort(), (link, i) => (
                  <a
                    key={i}
                    href={(data.urls as any)[link as keyof typeof data.urls]}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#fff] border-2 border-[#fff] rounded-lg px-2 py-2"
                  >
                    {iconsMap[link as keyof typeof iconsMap]}
                  </a>
                ))}
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-center lg:items-start gap-6">
            <div className="font-outfit flex flex-col justify-start items-center lg:items-start">
              <h3 className="font-[700] text-[1.6em] text-[#fff]">{data.name}</h3>
              <div>
                <span className="text-[#afafaf] font-[400] text-[1em]">Created by</span>{' '}
                <span className="text-[#fff] font-[400] text-[1em]">{_.truncate(data.creator, { length: 11 })}</span>
              </div>
            </div>
            <div className="flex font-outfit flex-col-reverse lg:flex-row justify-center lg:justify-between items-center gap-3 w-full">
              <article className="prose lg:prose-xl prose-zinc">
                <p>{data.description}</p>
              </article>
              <div className="flex rounded-[30px] text-[1em] gap-3 flex-col stats-vertical border bg-transparent border-[#fff]/70 w-full lg:w-[15em] font-outfit px-7 py-3">
                <div className="flex w-full flex-col justify-center items-center">
                  <div className="flex justify-between items-center w-full">
                    <h4 className="text-[#afafaf]">Floor</h4>
                    <span className="text-[#fff]">{data.floorPrice.toPrecision(4)}</span>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <h4 className="text-[#afafaf]">Volume</h4>
                    <span className="text-[#fff]">{data.volume.toPrecision(4)}</span>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <h4 className="text-[#afafaf]">Items</h4>
                    <span className="text-[#fff]">{data.items}</span>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <h4 className="text-[#afafaf]">Owners</h4>
                    <span className="text-[#fff]">{data.owners}</span>
                  </div>
                </div>
                <div className="flex w-full flex-col justify-center items-center py-2">
                  <div className="flex justify-between items-center w-full">
                    <h4 className="text-[#afafaf]">Chain ID</h4>
                    <span className="text-[#fff]">{parseInt(data.blockchain)}</span>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <h4 className="text-[#afafaf]">Address</h4>
                    <span className="text-[#fff]">{_.truncate(data.id, { length: 11 })}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center lg:justify-start items-center gap-4">
              <button className="bg-[#fff] shadow-lg px-3 py-3 font-outfit text-[0.9em] font-[400] rounded-[0.5em] capitalize">
                create collection
              </button>
              <button className="bg-[#fff] shadow-lg px-3 py-3 gap-1 flex font-outfit text-[0.9em] font-[400] rounded-[0.5em]">
                <span className="capitalize">mint</span>
                <div>
                  <span className="uppercase">NFT</span>s
                </div>
              </button>
              <button className="btn btn-square btn-ghost">
                <FiShare className="text-[#fff] text-[1em]" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
