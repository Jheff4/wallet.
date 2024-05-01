import './App.css';
import Features from './components/Features';
import Footer from './components/Footer';
import Gateway from './components/Gateway';
import Hero from './components/Hero';

function App() {
  return (
    <div className="w-full min-h-[100vh] bg-[#131313]">
      <Hero />
      <Gateway />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
