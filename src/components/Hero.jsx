import bgImage from '../assets/heroBg.png';
import frame from '../assets/heroFrame.png';
import Navbar from './Navbar';

function Hero() {
  return (
    <div className="relative w-full min-h-[750px] overflow-hidden">
      <img src={bgImage} className="block absolute top-0 left-0 z-10" />
      <div className="text-white top-0 left-0 absolute w-full h-full  pt-8 z-30">
        <Navbar />
        <div className="flex mt-20 gap-[180px] items-center">
          <img src={frame} />
          <div className="w-[36%] flex flex-col gap-8">
            <h1 className="font-bold text-[40px]">
              Introducing Razor Wallet:
              <br /> Companion on Movement Blockchain
            </h1>
            <div>
              Experience the future of finance with a sleek and secure wallet
              that combines sharp security and user-friendly design. Empower
              your transactions, embrace decentralization, and redefine your
              digital journey. Join the movement with Razor Wallet on Movement
              Blockchain
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
