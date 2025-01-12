import { useState, useEffect } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";

const BitcoinTracker = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Bitcoin price data
        const priceResponse = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true"
        );
        const priceData = await priceResponse.json();

        // Fetch trending coins
        const trendingResponse = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const trendingData = await trendingResponse.json();

        setBitcoinData(priceData.bitcoin);
        setTrendingCoins(trendingData.coins.slice(0, 3));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const TrendingCoinCard = ({ coin, change }) => (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-50 rounded-lg">
      <img
        src={coin.item.small}
        alt={coin.item.name}
        className="w-6 h-6 rounded-full"
      />
      <span className="font-medium">{coin.item.symbol.toUpperCase()}</span>
      <span
        className={`ml-2 ${change >= 0 ? "text-green-500" : "text-red-500"}`}
      >
        {change >= 0 ? "↑" : "↓"} {Math.abs(change).toFixed(2)}%
      </span>
    </div>
  );

  const CoinCarousel = ({ title }) => (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {trendingCoins.map((coin) => (
          <div
            key={coin.item.id}
            className="flex-shrink-0 w-64 p-4 border rounded-lg"
          >
            <div className="flex items-center space-x-2 mb-2">
              <img
                src={coin.item.small}
                alt={coin.item.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="font-medium">
                {coin.item.symbol.toUpperCase()}
              </span>
              <span
                className={`ml-2 ${
                  coin.item.price_change_percentage_24h >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {coin.item.price_change_percentage_24h >= 0 ? "↑" : "↓"}{" "}
                {Math.abs(coin.item.price_change_percentage_24h).toFixed(2)}%
              </span>
            </div>
            <img
              src={coin.item.sparkline}
              alt="Price graph"
              className="w-full h-16"
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-grow">
          <div className="text-sm text-gray-600 mb-4">
            Cryptocurrencies {" > "} Bitcoin
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png"
                alt="Bitcoin"
                className="w-8 h-8"
              />
              <h1 className="text-2xl font-bold">Bitcoin</h1>
              <span className="text-gray-500">BTC</span>
              <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
                Rank #1
              </span>
            </div>

            <div className="mb-6">
              <div className="text-3xl font-bold">
                ${bitcoinData.usd.toLocaleString()}
              </div>
              <div className="text-lg">₹{bitcoinData.inr.toLocaleString()}</div>
              <span
                className={`inline-flex items-center ${
                  bitcoinData.usd_24h_change >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {bitcoinData.usd_24h_change >= 0 ? "↑" : "↓"}{" "}
                {Math.abs(bitcoinData.usd_24h_change).toFixed(2)}%
              </span>
            </div>

            {/* TradingView Widget */}
            <div className="tradingview-widget-container h-96">
              <div id="tradingview_widget"></div>
              {typeof window !== "undefined" && (
                <script
                  type="text/javascript"
                  src="https://s3.tradingview.com/tv.js"
                  onLoad={() => {
                    new window.TradingView.widget({
                      autosize: true,
                      symbol: "BITSTAMP:BTCUSD",
                      interval: "D",
                      timezone: "Etc/UTC",
                      theme: "light",
                      style: "1",
                      locale: "en",
                      toolbar_bg: "#f1f3f6",
                      enable_publishing: false,
                      hide_side_toolbar: false,
                      allow_symbol_change: true,
                      container_id: "tradingview_widget",
                    });
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-80">
          <div className="bg-blue-600 text-white rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-2">
              Get Started with KoinX for FREE
            </h2>
            <p className="mb-4">
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports.
            </p>
            <button className="bg-white text-black px-6 py-2 rounded-lg font-medium flex items-center">
              Get Started for FREE <ArrowRight className="ml-2" />
            </button>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4 flex items-center">
              <TrendingUp className="mr-2" /> Trending Coins (24h)
            </h2>
            {trendingCoins.map((coin) => (
              <TrendingCoinCard
                key={coin.item.id}
                coin={coin}
                change={coin.item.price_change_percentage_24h}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Sections */}
      <CoinCarousel title="You May Also Like" />
      <CoinCarousel title="Trending Coins" />
    </div>
  );
};

export default BitcoinTracker;
