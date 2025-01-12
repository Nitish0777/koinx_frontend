import "./App.css";
import BitcoinChart from "./components/charts/Bitcoin";
import BitcoinPerformance from "./components/charts/BitcoinPer";
// import BitcoinTracker from "./components/charts/Charts";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* <BitcoinTracker /> */}
      <BitcoinChart />
      <BitcoinPerformance />
    </>
  );
}

export default App;
