import razorLogo from '../assets/razor.png';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaDiscord, FaXTwitter } from 'react-icons/fa6';

const socials = [
  { link: 'https://discord.com/invite/pzhexEWGcT', icon: <FaDiscord /> },
  { link: '/', icon: <FaTelegramPlane /> },
  { link: 'https://twitter.com/RazorDAO', icon: <FaXTwitter /> },
];

const links = [
  {
    title: 'Products',
    content: [
      {
        link: 'https://chromewebstore.google.com/detail/razor-wallet/fdcnegogpncmfejlfnffnofpngdiejii',
        text: 'Chrome Extension',
      },
      { link: '/', text: 'Android App (In Development)' },
      { link: '/', text: 'iOS App (In Development)' },
    ],
  },
  {
    title: 'Resources',
    content: [
      { link: '/', text: 'Docs' },
      { link: '/', text: 'Blog (Coming Soon)' },
      { link: '/', text: 'Newsletter (Coming Soon)' },
      { link: '/', text: 'Support' },
    ],
  },
  {
    title: 'Company',
    content: [
      { link: '/', text: 'About us' },
      { link: '/', text: 'Contact' },
      { link: '/privacy', text: 'Privacy Policy' },
    ],
  },
  {
    title: 'Developers',
    content: [
      // { link: '/', text: 'About us' },
      // { link: '/', text: 'Integration' },
      {
        link: 'https://github.com/razorlabsorg/razor-wallet-sdk',
        text: 'Wallet SDK',
      },
      { link: 'https://kit.razorwallet.xyz', text: 'Wallet Kit' },
      {
        link: 'https://github.com/razorlabsorg/wallet-standard',
        text: 'Wallet Standard',
      },
    ],
  },
];

function Footer() {
  return (
    <div className="bg-black px-10 md:px-[65px] text-white py-20 flex flex-col-reverse gap-4 md:flex-row justify-between md:gap-10">
      <div>
        <div className="flex items-center gap-4 cursor-pointer">
          <img className="w-10 h-10 transition-transform duration-300 hover:rotate-6" src={razorLogo} />
          <span className="text-2xl font-bold">Razor Wallet</span>
        </div>
        <div className="flex mt-3 gap-3">
          {socials.map((social) => (
            <a
              href={social.link}
              className="p-1 border-[1px] rounded-full bg-white text-black border-white"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around gap-4 flex-1">
        {links.map((link) => (
          <div>
            <div
              className="mb-3 font-bold text-white/50 text-xl"
              key={`footer-head-${link.title}`}
            >
              {link.title}
            </div>
            <div className="flex flex-col">
              {link.content.map((item) => (
                <a className="" href={item.link}>
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
