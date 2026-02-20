import Features from '../../components/Features';
import Footer from '../../components/Footer';
import Gateway from '../../components/Gateway';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';

function HomePage() {
  return (
    <section className="w-full min-h-[100vh] bg-[#131313] max-w-screen-2xl mx-auto">
      <Navbar />
      <div className="px-4 max-xs:px-3 max-2xs:px-2 pt-[5.5rem] max-xs:pt-[5rem] max-2xs:pt-[4.5rem]">
        <Hero />
        <Gateway />
        <Features />
        <Footer />
      </div>
    </section>
  );
}

export default HomePage;
