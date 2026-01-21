import chromeLogo from '../assets/chrome.png'
import Navbar from './Navbar'
import { useEffect, useRef, useState } from 'react'

function Hero() {
  const [sticky, setSticky] = useState(false)
  const navRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!navRef.current) return

    const offset = navRef.current.offsetTop

    const onScroll = () => {
      setSticky(window.pageYOffset >= offset)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="
        w-full min-h-[750px] overflow-hidden
        bg-[linear-gradient(180deg,#9B7BB0_0%,#581A81_100%),url('/heroBg.png')]
        bg-cover bg-center bg-no-repeat
      "
    >
      <div className="text-white w-full h-full">
        <div ref={navRef}>
          <Navbar sticky={sticky} />
        </div>

        <div
          className={`flex mt-20 lg:gap-20 items-center flex-col ${
            sticky && 'mt-[175px]'
          }`}
        >
          <div className="text-[6rem] leading-[1.1] font-bold text-center">
            Your daily Web3 <br/>Companion
          </div>

          <div className="flex flex-wrap text-base gap-6 items-center font-bold text-darkText mt-10">
            <a
              href="https://chromewebstore.google.com/detail/razor-wallet/fdcnegogpncmfejlfnffnofpngdiejii"
              className="flex py-3 px-7 gap-2 rounded-2xl items-center bg-white"
            >
              <img className="w-10 h-10" src={chromeLogo} alt="extension" />
              <div>Download for Chrome</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
