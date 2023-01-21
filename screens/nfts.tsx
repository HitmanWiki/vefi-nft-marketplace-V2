import { useEffect, useState } from 'react';
import _ from 'lodash';
import { NFT } from '../data/models';

export const Overview = ({ nft }: { nft: NFT }) => (
  <>
    {!!nft && (
      <div className="flex justify-start items-center w-full flex-col">
        <div className="flex justify-center lg:justify-start flex-col items-center lg:items-start w-full gap-4">
          <div className="flex justify-center items-center lg:items-start flex-col w-full">
            <h3 className="font-[600] font-outfit text-[#fff]">Description</h3>
            <article className="prose lg:prose-xl prose-stone font-outfit font-[700] w-full">{nft.description}</article>
          </div>
          <div className="flex flex-col w-full gap-5 justify-center items-center px-4 py-4 rounded-[10px] bg-slate-900">
            <div className="flex justify-between items-center w-full">
              <span className="text-[#fff] font-outfit font-[600] text-[0.94em]">Minter</span>
              <span className="text-[#fff]/70 font-outfit font-[400] text-[0.7em]">{nft.creator}</span>
            </div>
            <div className="flex justify-between items-center w-full">
              <span className="text-[#fff] font-outfit font-[600] text-[0.94em]">Collection</span>
              <span className="text-[#fff]/70 font-outfit font-[400] text-[0.7em]">{nft.collection}</span>
            </div>
            <div className="flex justify-between items-center w-full">
              <span className="text-[#fff] font-outfit font-[600] text-[0.94em]">Current Owner</span>
              <span className="text-[#fff]/70 font-outfit font-[400] text-[0.7em]">{nft.currentOwner}</span>
            </div>
            <div className="flex justify-between items-center w-full">
              <span className="text-[#fff] font-outfit font-[600] text-[0.94em]">Token ID</span>
              <span className="text-[#fff]/70 font-outfit font-[400] text-[0.7em]">{nft.tokenId}</span>
            </div>
            <div className="flex justify-between items-center w-full">
              <span className="text-[#fff] font-outfit font-[600] text-[0.94em]">ID</span>
              <span className="text-[#fff]/70 font-outfit font-[400] text-[0.7em]">{nft.id}</span>
            </div>
            <div className="flex justify-between items-center w-full">
              <span className="text-[#fff] font-outfit font-[600] text-[0.94em]">Chain ID</span>
              <span className="text-[#fff]/70 font-outfit font-[400] text-[0.7em]">{parseInt(nft.blockchain)}</span>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);

export const NFTProperties = ({ nft }: { nft: NFT }) => (
  <>
    {!!nft && (
      <div className="flex justify-center items-center gap-2 w-full px-2 py-2 flex-wrap">
        {_.map(nft.properties, (prop, index) => (
          <div key={index} className="rounded-[12px] bg-slate-800 flex flex-col justify-between items-center px-3 py-3 lg:w-1/4">
            <h3 className="text-[#fff]/60 font-monumentExtended uppercase text-[0.7em]">{prop.label}</h3>
            <span className="text-[#fff] font-outfit capitalize text-[0.68em]">{prop.value}</span>
          </div>
        ))}
      </div>
    )}
  </>
);
