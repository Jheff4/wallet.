import gateway from '../assets/gateway.png';
function Gateway() {
  return (
    <div
      style={{
        backgroundImage: 'url(/gatewayBg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="bg-[#434445] py-20 text-white"
    >
      <div className=" px-4 md:px-0 md:w-2/3 xl:w-1/2 mx-auto flex flex-col md:flex-row gap-8 items-center">
        <div className="flex flex-col gap-8">
          <div className="text-[40px] font-medium">
            Your Gateway into Movement
          </div>
          <div>
            Buy, store, send, and swap tokens with ease. It’s a secure platform
            that caters to both new and experienced users in the world of
            decentralized finance. Manage your digital assets efficiently with
            Razor Wallet’s user-friendly interface, designed for the seamless
            movement of tokens.
          </div>
          <div>
            <a
              href="https://chromewebstore.google.com/detail/razor-wallet/fdcnegogpncmfejlfnffnofpngdiejii"
              className="bg-yellow py-3 md:py-6 px-4 md:px-8 text-base rounded-xl md:rounded-2xl text-darkText font-semibold md:font-bold inline-block"
            >
              Get Started
            </a>
          </div>
        </div>
        <img src={gateway} />
      </div>
    </div>
  );
}

export default Gateway;
