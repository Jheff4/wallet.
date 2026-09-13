import { useState, useRef, useEffect } from 'react';
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
  const menuRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const openBtnRef = useRef<HTMLButtonElement>(null);

  // The open menu is a full-screen overlay, so it has to behave like a dialog.
  // Without this, a keyboard user who opened it was stranded: focus stayed on
  // the hamburger *underneath* the overlay, Escape did nothing, and Tab walked
  // forward through the page links hidden behind it — the menu's own links sit
  // earlier in the DOM, so they were only reachable by tabbing backwards.
  useEffect(() => {
    if (!isOpen) return;

    // Captured now rather than read in the cleanup: by the time cleanup runs
    // the ref may point elsewhere, and this is the node we want focus returned
    // to regardless.
    const opener = openBtnRef.current;

    // Move focus into the menu that just opened.
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key !== 'Tab') return;

      const items = menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button',
      );
      if (!items || items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      // Wrap at both ends so Tab can't reach the inert page behind.
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      // Hand focus back to the control that opened it, rather than dumping the
      // user at the top of the document.
      opener?.focus();
    };
  }, [isOpen]);

  return (
    <nav
      className="bg-[#131313] z-20 w-full py-5 max-xs:py-4 max-2xs:py-3 flex justify-between items-center fixed px-4 max-xs:px-3 max-2xs:px-2 max-w-screen-2xl mx-auto"
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-4 cursor-pointer">
          {/* A real alt, not alt="": the wordmark beside this is
              hidden md:block, so below md the logo is the only thing
              identifying the brand. Slight redundancy for desktop screen
              readers is the better trade. */}
          <img
            className="w-10 h-10 transition-transform duration-300 hover:rotate-6"
            src={razorLogo}
            alt="Razor Wallet"
          />
          <span className="text-[1.4rem] text-white leading-8 hidden md:block font-medium">
            Razor Wallet
          </span>
        </div>

        {isOpen && (
          <div
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            onClick={() => setOpen(false)}
            className="fixed top-0 left-0 w-full h-full text-white bg-black p-10 transition-all ease-in-out"
          >
            {/* onClick belongs on the button, not the icon. With it on the
                icon, tabbing here and pressing Enter fired nothing — the menu
                had no keyboard exit, since the overlay's own dismiss handler
                is a click too. aria-label because the button's only content is
                an icon, which a screen reader announces as just "button". */}
            <button
              ref={closeBtnRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="ml-auto block text-2xl"
            >
              <RiCloseLargeLine aria-hidden="true" />
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

            {/* No href on purpose — the apps aren't live yet. These used to
                carry href="", which resolves to the current URL, so activating
                one silently reloaded the page. Without an href an anchor isn't
                focusable and isn't announced as a link, which is the honest
                state for a destination that doesn't exist. Add the real store
                URLs when they do; don't put href="" back. */}
            <div className="flex gap-10 items-center justify-center pt-20">
              <a
                className="md:hidden"
              >
                <img
                className="w-10 h-10 transition-transform duration-300 hover:rotate-12"
                src={appleIcon}
                alt="Apple"
              />
              </a>

              <a
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
          {/* Same as the pair in the menu above: no href until the apps ship. */}
          <a
            className="max-md:hidden"
          >
            <img
            className="w-8 h-8 transition-transform duration-300 hover:rotate-12"
            src={appleIcon}
            alt="Apple"
          />
          </a>

          <a
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
            className="rounded-[18px] flex flex-row justify-center items-center gap-[10px] px-8 py-4 w-[140px] h-[48px] text-base text-[#271F30] font-medium bg-[linear-gradient(90deg,#FFC80F_0%,#EE6348_100%)] hover:opacity-90 transition duration-500"
          >
            Download
          </a>
          {/* This button is md:hidden, so it exists only on mobile — which is
              why desktop Lighthouse scored 100 on accessibility while mobile
              stopped at 89. Icon-only, so it needs an explicit name. */}
          <button
            ref={openBtnRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            className="text-2xl block md:hidden text-white"
          >
            <LiaBarsSolid aria-hidden="true" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
