import chromeLogo from '../assets/chrome.png'

function Hero() {
  return (
    <div
      style={{
        background: `
          url(/heroBg.png),
          linear-gradient(180deg, #9B7BB0 0%, #581A81 100%)
        `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain, cover',
        backgroundPosition: 'center, center',
      }}
      className="w-full overflow-hidden rounded-lg pb-10"
    >
      <div className="text-white w-full">
        <div
          className={`flex mt-20 gap-10 items-center flex-col`}
        >
          <div
            className="
              text-[5.5rem]
              leading-[1.1]
              tracking-wide
              font-black
              text-center
              drop-shadow-[0px_0px_12px_rgba(89,28,129,0.35)]
            "
            style={{
              textShadow: `
                0 0 0.5px #fff,
                0 0 1px #fff
              `,
            }}
          >
            Your daily Web3 <br/>Companion
          </div>

          <div className="flex flex-wrap text-base gap-6 items-center font-bold text-darkText mb-10">
            <a
              href="https://chromewebstore.google.com/detail/razor-wallet/fdcnegogpncmfejlfnffnofpngdiejii"
              className="flex py-[0.8rem] px-8 gap-2 rounded-2xl items-center bg-white"
            >
              <img className="w-9 h-9" src={chromeLogo} alt="extension" />
              <div>Download for Chrome</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
