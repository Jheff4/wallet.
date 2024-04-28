import razorLogo from '../assets/razor.png';

const navlinks = [
  { text: 'Docs', link: '' },
  { text: 'Discord', link: '' },
  { text: 'Discover', link: '' },
];
function Navbar() {
  return (
    <div className="bg-[#131313] z-20 w-full py-6 px-16 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img className="w-10 h-10" src={razorLogo} />
        <span className="text-2xl font-bold">Razor Wallet</span>
      </div>
      <div className="flex font-bold text-base gap-10">
        {navlinks.map((item) => (
          <a key={`nav-${item.text}`} href={item.link}>
            {item.text}
          </a>
        ))}
      </div>
      <button className="rounded-lg px-8 py-4 text-base text-black font-bold bg-[#FFC80F]">
        Download
      </button>
    </div>
  );
}

export default Navbar;
