import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { Collections, NFTs, Users } from '../../screens/explorer';

enum Tabs {
  NFTS = 'nfts',
  COLLECTIONS = 'collections',
  USERS = 'users'
}

export const useExplorerComponent = (tab: Tabs) => {
  const [component, setComponent] = useState<React.ComponentType<any>>(() => NFTs);

  useEffect(() => {
    if (tab === Tabs.NFTS) setComponent(() => NFTs);
    else if (tab === Tabs.COLLECTIONS) setComponent(() => Collections);
    else if (tab === Tabs.USERS) setComponent(() => Users);
    else setComponent(() => NFTs);
  }, [tab]);

  return component;
};

export default function Explore() {
  const { query, push } = useRouter();
  const tab = useMemo(() => (query.tab as Tabs) || Tabs.NFTS, [query.tab]);
  const RenderedComponent = useExplorerComponent((query.tab as Tabs) || Tabs.NFTS);
  return (
    <>
      <div className="w-full px-0 lg:px-5 py-4">
        {/* toggle control */}
        <div className="mb-10 pb-5 border-b-[1px] border-gray-600 w-full">
          <div className="flex gap-6 text-[18px] text-[#fff] font-monumentExtended tracking-wider justify-center lg:justify-start items-center">
            <button className={`cursor-pointer ${tab === Tabs.NFTS ? 'text-[#ffe600]' : ''}`} onClick={() => push(`/explore?tab=${Tabs.NFTS}`)}>
              NFTS
            </button>
            <button
              className={`cursor-pointer ${tab === Tabs.COLLECTIONS ? 'text-[#ffe600]' : ''}`}
              onClick={() => push(`/explore?tab=${Tabs.COLLECTIONS}`)}
            >
              Collections
            </button>
            <button className={`cursor-pointer ${tab === Tabs.USERS ? 'text-[#ffe600]' : ''}`} onClick={() => push(`/explore?tab=${Tabs.USERS}`)}>
              Users
            </button>
          </div>
        </div>
        {/* Content Top */}

        {/* Contents */}
        <div className="w-full flex justify-start h-auto my-10 gap-10 flex-wrap ">
          <RenderedComponent />
        </div>
      </div>
    </>
  );
}
