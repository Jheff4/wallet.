import { useState } from 'react';
import razorLogo from '../assets/razor.png';
import appleIcon from '../assets/apple.png';
import googleIcon from '../assets/google_play.png';
import { LiaBarsSolid } from 'react-icons/lia';
import { RiCloseLargeLine } from 'react-icons/ri';

const navlinks = [
  { text: 'Docs', link: 'https://kit.razorwallet.xyz/' },
  // { text: 'Discord', link: 'https://discord.com/invite/pzhexEWGcT' },
  // { text: 'Developers', link: 'https://kit.razorwallet.xyz/' },
];
function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav
      className="bg-[#131313] z-20 w-full py-5 max-xs:py-4 max-2xs:py-3 flex justify-between items-center fixed px-4 max-xs:px-3 max-2xs:px-2 max-w-screen-2xl mx-auto"
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-4 cursor-pointer">
          <img
            className="w-10 h-10 transition-transform duration-300 hover:rotate-6"
            src={razorLogo}
          />
          <span className="text-[1.4rem] text-white leading-8 hidden md:block font-bold">
            Razor Wallet
          </span>
        </div>

        {isOpen && (
          <div
            onClick={() => setOpen(false)}
            className="fixed top-0 left-0 w-full h-full text-white bg-black p-10 transition-all ease-in-out"
          >
            <button className="ml-auto block text-2xl">
              <RiCloseLargeLine onClick={() => setOpen(false)} />
            </button>
            <div className="mt-5 gap-3 font-bold flex flex-col">
              {navlinks.map((item) => (
                <a
                  className="hover:text-[#949494] transition-all duration-500"
                  key={`nav-${item.text}`}
                  href={item.link}
                >
                  {item.text}
                </a>
              ))}
            </div>

            <div className="flex gap-10 items-center justify-center pt-20">
              <a
                href=""
                className="md:hidden"
              >
                <img
                className="w-10 h-10 transition-transform duration-300 hover:rotate-12"
                src={appleIcon}
                alt="Apple"
              />
              </a>

              <a
                href=""
                className="md:hidden"
              >
                <img
                className="w-10 h-10 transition-transform duration-300 hover:rotate-12"
                src={googleIcon}
                alt="Google"
              />
              </a>
            </div>
          </div>
        )}

        <div className="flex md:gap-8 gap-3 items-center">
          <div className="hidden md:flex text-base gap-[5rem] max-lg:gap-[3rem] ml-24">
            {navlinks.map((item) => (
              <a
                className="hover:text-[#949494] transition-all duration-300 text-white"
                key={`nav-${item.text}`}
                href={item.link}
              >
                {item.text}
              </a>
            ))}
          </div>
          <a
            href=""
            className="max-md:hidden"
          >
            <img
            className="w-8 h-8 transition-transform duration-300 hover:rotate-12"
            src={appleIcon}
            alt="Apple"
          />
          </a>

          <a
            href=""
            className="max-md:hidden"
          >
            <img
            className="w-7 h-7 transition-transform duration-300 hover:rotate-12"
            src={googleIcon}
            alt="Google"
          />
          </a>

          <a
            href="https://chromewebstore.google.com/detail/razor-wallet/fdcnegogpncmfejlfnffnofpngdiejii"
            className="rounded-[18px] px-8 md:px-8 py-3 text-base text-[#271F30] font-semibold bg-[#FFC80F] hover:bg-white transition duration-500"
          >
            Download
          </a>
          <button
            onClick={() => setOpen(true)}
            className="text-2xl block md:hidden text-white"
          >
            <LiaBarsSolid />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
