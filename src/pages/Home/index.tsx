import Features from '../../components/Features';
import Footer from '../../components/Footer';
import Gateway from '../../components/Gateway';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';

function HomePage() {
  return (
    <section className="w-full min-h-[100vh] bg-[#131313]">
      <Navbar />
      <div className="px-4 pt-[5.5rem]">
        <Hero />
        <Gateway />
        <Features />
      </div>
      <Footer />
    </section>
  );
}

export default HomePage;
