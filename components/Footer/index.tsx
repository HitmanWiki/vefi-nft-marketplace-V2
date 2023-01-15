import Link from 'next/link';
import { FaDiscord, FaMedium, FaTelegram } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';

export default function Footer() {
  return (
    <div
      className="w-full flex flex-col gap-3 items-center justify-center py-1"
      style={{ background: 'linear-gradient(0deg, #121212, #121212), #01003E' }}
    >
      <div className="w-full flex flex-col lg:flex-row justify-start items-center lg:justify-evenly text-white py-4 px-12 gap-4">
        <div className="flex flex-col justify-center items-center gap-6">
          <span className="text-[#fff] font-monumentExtended text-[1em] font-[800]">Join our community of NFT enthusiasts.</span>
          <div className="flex justify-center gap-2 items-center text-[21.5px] lg:text-[43px] text-[#5865f2]">
            <a href="#">
              <FaDiscord />
            </a>
            <a href="#">
              <FaMedium />
            </a>
            <a href="#">
              <FiYoutube />
            </a>
            <a href="#">
              <FaTelegram />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-6">
          <span className="text-[#fff] font-monumentExtended text-[1em] font-[800]">Marketplace.</span>
          <div className="flex flex-col justify-center gap-2 items-center text-[0.8em] text-[#c6c6c6] font-[400] font-outfit">
            <Link href="/launchpad">Launchpad</Link>
            <Link href="/launchpad">Analytics</Link>
            <Link href="/launchpad">Staking</Link>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-6">
          <span className="text-[#fff] font-monumentExtended text-[1em] font-[800]">Links.</span>
          <div className="flex flex-col justify-center gap-2 items-center text-[0.8em] text-[#c6c6c6] font-[400] font-outfit">
            <a href="#">Become a partner</a>
            <a href="#">Buy VEF</a>
            <a href="#">Ecosystem</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-[#c6c6c6] text-[0.89em] lg:flex-row justify-center items-center gap-4 border-t border-[#fff] px-2 py-2 w-full">
        <article className="text-center">
          <span className="font-[800]">The Vefi NFT marketplace</span> <span className="font-[400]">is a product of the</span>{' '}
          <span className="font-[800]">Vefi Ecosystem</span>
        </article>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 font-[600]">
          <a href="#">Terms Of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}
