import bgImage from '../assets/heroBg.png';

function Hero() {
  return (
    <div className="relative w-full min-h-[800px] overflow-hidden">
      <img src={bgImage} className="block absolute top-0 left-0 z-0" />
      <div className="z-20 text-white">Content</div>
    </div>
  );
}

export default Hero;
