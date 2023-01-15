import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`flex justify-start items-start min-h-screen flex-col w-screen gap-3`}
      style={{ background: 'linear-gradient(0deg, #020117, #020117), linear-gradient(0deg, #121212, #121212), #03015A' }}
    >
      <Header />

      <div className="flex-1 overflow-auto w-full">
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  );
}
