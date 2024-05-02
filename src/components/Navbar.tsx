import { useState } from 'react';
import razorLogo from '../assets/razor.png';
import { LiaBarsSolid } from 'react-icons/lia';
import { RiCloseLargeLine } from 'react-icons/ri';

const navlinks = [
  { text: 'Docs', link: '' },
  { text: 'Discord', link: 'https://discord.com/invite/pzhexEWGcT' },
  { text: 'Developers', link: '' },
];
function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="bg-[#131313] z-20 w-full py-6 px-4 md:px-16 flex justify-between items-center gap-3">
      <button
        onClick={() => setOpen(true)}
        className="text-3xl block md:hidden"
      >
        <LiaBarsSolid />
      </button>
      <div className="flex justify-between flex-1 items-center">
        <div className="flex items-center gap-4">
          <img className="w-10 h-10" src={razorLogo} />
          <span className="text-2xl hidden md:block font-bold">
            Razor Wallet
          </span>
        </div>
        {isOpen && (
          <div
            onClick={() => setOpen(false)}
            className="fixed top-0 left-0 w-full h-full text-white bg-black p-10 transition-all ease-in-out"
          >
            <button className="ml-auto block text-3xl">
              <RiCloseLargeLine onClick={() => setOpen(false)} />
            </button>
            <div className="mt-5 gap-3 font-bold flex flex-col">
              {navlinks.map((item) => (
                <a key={`nav-${item.text}`} href={item.link}>
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        )}
        <div className="hidden md:flex font-bold text-base gap-10">
          {navlinks.map((item) => (
            <a key={`nav-${item.text}`} href={item.link}>
              {item.text}
            </a>
          ))}
        </div>
        <a
          href="https://chromewebstore.google.com/detail/razor-wallet/fdcnegogpncmfejlfnffnofpngdiejii"
          className="rounded-lg px-4 md:px-8 py-2 md:py-4 text-base text-black font-bold bg-[#FFC80F]"
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default Navbar;
