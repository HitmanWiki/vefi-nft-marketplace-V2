import { useEffect, useState } from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { AiOutlineReddit } from 'react-icons/ai';
import { FaTelegramPlane, FaDiscord } from 'react-icons/fa';
import { FiTwitter, FiGlobe } from 'react-icons/fi';
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
        <>
          <div
            style={{ backgroundImage: `url(${data.banner})` }}
            className="rounded-[30px] h-[14em] lg:h-[24em] w-full bg-cover flex justify-between items-end px-6 py-1"
          >
            <div className="avatar relative bottom-[-1.3rem]">
              <div className="w-14 lg:w-24 rounded-xl">
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
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
