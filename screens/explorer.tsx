import { Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import _ from 'lodash';
import { FiCheck, FiChevronDown, FiChevronLeft, FiChevronRight, FiChevronUp, FiRefreshCw, FiSearch } from 'react-icons/fi';
import InfiniteScrollComponent from 'react-infinite-scroller';
import { ThreeDots } from 'react-loader-spinner';
import chains from '../assets/chains.json';
import { mockDataSource } from '../data/mock';
import NFTCard from '../components/Card/NFTCard';
import CollectionCard from '../components/Card/CollectionCard';

export const NFTs = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <>
      {hydrated && (
        <div className="flex flex-col justify-center items-center gap-3 w-full">
          <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-start items-center w-full gap-5 px-7 lg:px-4">
            <div className="flex justify-center items-center lg:h-full gap-3 w-full lg:w-auto">
              <button
                onClick={() => setShowFilters((show) => !show)}
                className="bg-[#7d7d7d]/30 text-white font-bold p-3 font-outfit flex items-center rounded-md backdrop-blur-[30.7px] justify-start gap-2 lg:justify-center h-full"
              >
                <div className="hidden md:block">{!showFilters ? <FiChevronRight /> : <FiChevronLeft />}</div>
                <div className="md:hidden">{!showFilters ? <FiChevronDown /> : <FiChevronUp />}</div>
                <span>Filters</span>
              </button>
              <button className="bg-[#7d7d7d]/30 text-white font-bold p-3 flex items-center rounded-md backdrop-blur-[30.7px] h-full">
                <FiRefreshCw />
              </button>
            </div>
            <div className="bg-[#7d7d7d]/30  flex-1 flex items-center rounded-[10px] text-white backdrop-blur-[30.7px] lg:h-full w-full lg:w-auto">
              <span className="text-white p-3">
                <FiSearch />
              </span>
              <input
                className="bg-transparent w-full text-white font-outfit text-sm font-medium p-2 outline-none"
                type="text"
                placeholder="Search NFTs"
              />
            </div>
          </div>
          <div className="w-full flex lg:justify-start justify-center items-center lg:items-start gap-5 px-1 py-2 flex-col lg:flex-row overflow-auto">
            <Transition
              show={showFilters}
              className="w-full lg:w-1/3"
              enter="transform transition ease-in-out duration-[500ms]"
              enterFrom="opacity-0 translate-y-0 md:translate-x-0"
              enterTo="opacity-100 translate-y-4 md:translate-x-4"
              leave="transform transition ease-in-out duration-[500ms]"
              leaveFrom="opacity-100 translate-y-4 md:translate-x-4"
              leaveTo="opacity-0 translate-y-0 md:translate-x-0"
            >
              <div className="flex flex-col gap-2 justify-center items-center w-full px-2">
                <div tabIndex={0} className="collapse collapse-arrow border-b border-b-[#fff] w-full flex items-center">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title font-monumentExtended">
                    <span className="text-white">Blockchain</span>
                  </div>
                  <div className="collapse-content">Something</div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border-b border-b-[#fff] w-full flex items-center">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title font-monumentExtended">
                    <span className="text-white">Status</span>
                  </div>
                  <div className="collapse-content">Something</div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border-b border-b-[#fff] w-full flex items-center">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title font-monumentExtended">
                    <span className="text-white">Price</span>
                  </div>
                  <div className="collapse-content">Something</div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border-b border-b-[#fff] w-full flex items-center">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title font-monumentExtended">
                    <span className="text-white">Collections</span>
                  </div>
                  <div className="collapse-content">Something</div>
                </div>
              </div>
            </Transition>

            <InfiniteScrollComponent
              loadMore={setPage}
              hasMore={_.slice(mockDataSource.nfts, 0, (page + 1) * 15).length < mockDataSource.nfts.length}
              loader={<ThreeDots key={0} color="#dcdcdc" width={50} height={40} />}
              useWindow={false}
              className="flex-1 flex flex-col justify-center items-center gap-4 px-0 py-0 w-full"
            >
              <div
                className={`flex flex-col lg:flex-row lg:flex-wrap justify-center items-center w-full overflow-auto px-2 py-2 md:my-auto my-2 gap-2 transition-all ease-in-out duration-[500ms]`}
              >
                {_.slice(mockDataSource.nfts, 0, (page + 1) * 15).map((data, index) => (
                  <div key={index} className="lg:w-1/4 w-full transition-all ease-in-out duration-[500ms]">
                    <Link href={`/nfts/${data.blockchain}/${data.id}`} className="w-full">
                      <a className="w-full">
                        <NFTCard data={data} />
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </InfiniteScrollComponent>
          </div>
        </div>
      )}
    </>
  );
};

export const Collections = () => {
  const [selectedChainId, setSelectedChainId] = useState<number>(56);
  const chain = useMemo(() => chains[selectedChainId as unknown as keyof typeof chains], [selectedChainId]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      {hydrated && (
        <div className="flex flex-col justify-center items-center gap-6 w-full">
          <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-start items-center w-full gap-5 px-7 lg:px-4">
            <div className="flex justify-center items-center gap-3 w-full lg:w-auto lg:h-full">
              <div className="dropdown text-[1em] font-outfit w-full lg:w-auto">
                <label
                  tabIndex={0}
                  className="bg-[#7d7d7d]/30 text-white font-bold p-3 flex items-center justify-between rounded-md backdrop-blur-[30.7px] gap-2 cursor-pointer"
                >
                  <div className="avatar">
                    <div className="w-6 rounded-full">
                      <img src={chain?.logoURI || '/images/all_chains.svg'} alt={chain?.symbol || 'All'} />
                    </div>
                  </div>
                  <span className="font-outfit font-[700]">{chain?.name || 'All Blockchains'}</span>
                  <FiChevronDown />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-[#000] border border-[#fff] rounded-[12px] lg:w-[300px] w-[200px] backdrop-blur-[30.7px] text-white"
                >
                  <li>
                    <a className="gap-2 flex justify-between items-center w-full" onClick={() => setSelectedChainId(0)}>
                      <div className="flex justify-start items-center gap-1">
                        <div className="avatar">
                          <div className="w-8 rounded-full">
                            <img src="/images/all_chains.svg" alt="All" />
                          </div>
                        </div>
                        All Blockchains
                      </div>
                      {selectedChainId === 0 && <FiCheck />}
                    </a>
                  </li>
                  {_.map(Object.keys(chains), (key, index) => (
                    <li key={index}>
                      <a className="gap-2 flex justify-between items-center w-full" onClick={() => setSelectedChainId(parseInt(key))}>
                        <div className="flex justify-start items-center gap-1">
                          <div className="avatar">
                            <div className="w-8 rounded-full">
                              <img src={chains[key as keyof typeof chains].logoURI} alt={chains[key as keyof typeof chains].symbol} />
                            </div>
                          </div>
                          {chains[key as keyof typeof chains].name}
                        </div>
                        {selectedChainId === parseInt(key) && <FiCheck />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="bg-[#7d7d7d]/30 text-white font-bold p-3 flex items-center rounded-md backdrop-blur-[30.7px] h-full">
                <FiRefreshCw />
              </button>
            </div>
            <div className="bg-[#7d7d7d]/30  flex-1 flex items-center rounded-[10px] text-white backdrop-blur-[30.7px] w-full lg:h-full">
              <span className="text-white p-3">
                <FiSearch />
              </span>
              <input
                className="bg-transparent w-full text-white font-outfit text-sm font-medium p-2 outline-none"
                type="text"
                placeholder="Search Collections"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 w-full flex-wrap flex-col lg:flex-row px-2">
            {_.map(mockDataSource.collections, (data, index) => (
              <div key={index} className="w-full lg:w-1/4">
                <Link href={`/collections/${data.blockchain}/${data.id}`} className="w-full">
                  <a className="w-full">
                    <CollectionCard data={data} />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export const Users = () => {
  return <div>Users</div>;
};
