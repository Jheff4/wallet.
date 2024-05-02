import nfts from '../assets/nfts.png';
import screenshot from '../assets/screenshot.png';

function Features() {
  return (
    <div className="py-20 px-4 md:w-[85%] lg:w-[70%] mx-auto">
      <div className="bg-gradient w-full items-center px-10 md:px-20 justify-around gap-10 pt-16  rounded-lg flex flex-col md:flex-row">
        <div className="font-medium leading-10 text-2xl lg:text-[40px]">
          Buy, trade, show off & explore new NFTs on Movement Chain
        </div>
        <img className="block w-full md:w-1/2" src={nfts} />
      </div>
      <div className="flex flex-col md:flex-row items-center text-white mt-20 gap-10">
        <div className="flex flex-col gap-3">
          <div className="text-3xl md:text-[40px] font-medium">
            Seamless and Secure Onboarding
          </div>
          <div>
            Seamless Onboarding with Fortified Security. Experience effortless
            account setup while ensuring your assets are safe and secure.
          </div>
        </div>
        <img className="block w-full md:w-1/2" src={screenshot} />
      </div>
    </div>
  );
}

export default Features;
