// import bgImage from '../assets/heroBg.png';
import chromeLogo from '../assets/chrome.png';
import appleLogo from '../assets/apple.png';
import googlePlayLogo from '../assets/google_play.png';
import frame from '../assets/heroFrame.png';
import Navbar from './Navbar';

function Hero() {
  return (
    <div
      style={{
        backgroundImage: 'url(/heroBg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="w-full min-h-[750px] overflow-hidden"
    >
      {/* <img src={bgImage} className="block absolute top-0 left-0 z-10" /> */}
      <div className="text-white top-0 left-0 w-full h-full  pt-8 z-30">
        <Navbar />
        <div className="flex mt-20 gap-10 lg:gap-20 xl:gap-[180px] items-center">
          <img className="hidden max-w-1/3 lg:block" src={frame} />
          <div className="px-4 w-full md:px-16 lg:px-0 lg:w-[36%] flex flex-col gap-8">
            <h1 className="font-bold text-2xl leading-10 md:text-[40px]">
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
            <div className="flex flex-wrap text-base gap-6 items-center font-bold text-darkText">
              <a
                href="https://chromewebstore.google.com/detail/razor-wallet/fdcnegogpncmfejlfnffnofpngdiejii"
                className="flex bg-gradient py-4 px-8 gap-2 rounded-2xl items-center"
              >
                <img src={chromeLogo} alt="extension" />
                <div>Download for Chrome</div>
              </a>
              <a href="/" className="flex items-center gap-3">
                <div className="bg-[#283544] rounded-full p-[7px] pt-[5px]">
                  <img className="w-4" src={appleLogo} />
                </div>
                <div className="bg-gradient p-1 px-3 text-base rounded-full">
                  Soon
                </div>
              </a>
              <a href="/" className="flex items-center gap-3">
                {/* <div className="bg-[#283544] rounded-full p-[7px] pt-[5px]"> */}
                <img src={googlePlayLogo} />
                {/* </div> */}
                <div className="bg-gradient p-1 px-3 text-base rounded-full">
                  Soon
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
