import nfts from '../assets/nfts.png';
import screenshot from '../assets/screenshot.png';

function Features() {
  return (
    <div className="py-20 w-[70%] mx-auto">
      <div className="bg-gradient items-center px-20 justify-around gap-10 pt-16  rounded-lg flex">
        <div className="font-medium text-[40px]">
          Buy, trade, show off & explore new NFTs on Movement Chain
        </div>
        <img src={nfts} />
      </div>
      <div className="flex items-center text-white mt-20 gap-10">
        <div className="flex flex-col gap-3">
          <div className="text-[40px] font-medium">
            Seamless and Secure Onboarding
          </div>
          <div>
            Seamless Onboarding with Fortified Security. Experience effortless
            account setup while enjoying the confidence of private key security
            for your peace of mind
          </div>
        </div>
        <img src={screenshot} />
      </div>
    </div>
  );
}

export default Features;
