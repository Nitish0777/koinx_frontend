import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Team from './components/Team';
import TrendingCryptoSection from './components/Cryptocurrency';
import GetStartedSection from './components/Navbar/GettingStarted';
import BitcoinChart from './components/Charts/Bitcoin';
import BitcoinPerformance from './components/Charts/Bitcoinperformance';
import BitcoinSentiment from './components/Sentiment';

function App() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col lg:flex-row"> {/* Flex column on mobile, row on large screens */}
        <div className="flex-1 w-full lg:w-[70%] mx-auto"> {/* Main content section */}
          <div className="w-full lg:w-[70%] mt-8 mx-auto">
            <BitcoinChart />
          </div>

          <div className="w-full lg:w-[70%] mt-8 mx-auto">
            <BitcoinPerformance />
          </div>

          {/* BitcoinSentiment section should be placed below the charts */}
          <div className="w-full lg:w-[70%] mt-8 mx-auto">
            <BitcoinSentiment />
          </div>

          <About />
          <Tokenomics />
          <Team />
        </div>

        {/* GetStartedSection is only on the right side on large screens */}
        <div className="w-full lg:w-[30%] mt-8 lg:mt-0 lg:ml-8 hidden lg:block">
          <GetStartedSection />
        </div>
      </div>

      {/* TrendingCryptoSection goes below everything on mobile */}
      <div className="w-full mt-8">
        <TrendingCryptoSection />
      </div>

      {/* On mobile, ensure GetStartedSection is at the bottom after TrendingCryptoSection */}
      <div className="lg:hidden w-full mt-8"> {/* Only show on mobile */}
        <GetStartedSection />
      </div>
    </div>
  );
}

export default App;