import React, { useState, useEffect } from "react";
import { Info } from "lucide-react";

const BitcoinPerformance = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Overview");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
        );
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const tabs = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  const GradientBar = ({ low, high, current }) => {
    const percentage = ((current - low) / (high - low)) * 100;

    return (
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden relative">
        <div className="absolute inset-0 flex">
          <div className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 w-full" />
        </div>
        <div
          className="absolute h-4 w-2 bg-gray-800 -mt-1 transform -translate-x-1/2"
          style={{ left: `${percentage}%` }}
        />
      </div>
    );
  };

  if (loading || !data) {
    return <div className="p-6">Loading...</div>;
  }

  const marketData = data.market_data;

  return (
    <div className="bg-white rounded-lg">
      {/* Navigation Tabs */}
      <div className="overflow-x-auto border-b">
        <div className="flex min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-sm ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {/* Performance Section */}
        <h2 className="text-xl font-bold mb-6">Performance</h2>

        <div className="space-y-6">
          {/* Today's Range */}
          <div className="flex items-center gap-4">
            <div className="w-20 text-sm text-black font-medium">
              Todays Low <br />
              {marketData.low_24h.usd}
            </div>
            <div className="flex-1">
              <GradientBar
                low={marketData.low_24h.usd}
                high={marketData.high_24h.usd}
                current={marketData.current_price.usd}
              />
            </div>
            <div className="w-20 text-sm text-right text-black font-medium">
              Todays High <br />
              {marketData.low_24h.usd}
            </div>
          </div>

          {/* 52W Range */}
          <div className="flex items-center gap-4">
            <div className="w-20 text-sm text-black font-medium">
              52W Low
              <br />
              {marketData.low_24h.usd}
            </div>
            <div className="flex-1">
              <GradientBar
                low={marketData.low_24h.usd}
                high={marketData.high_24h.usd}
                current={marketData.current_price.usd}
              />
            </div>
            <div className="w-20 text-sm text-black text-right font-medium">
              52W High
              <br />
              {marketData.high_24h.usd}
            </div>
          </div>
        </div>

        {/* Fundamentals Section */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold">Fundamentals</h2>
            <Info className="w-4 h-4 text-gray-400" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                {
                  label: "Bitcoin Price",
                  value: `$${marketData.current_price.usd.toLocaleString()}`,
                },
                {
                  label: "24h Low / 24h High",
                  value: `$${marketData.low_24h.usd.toLocaleString()} / $${marketData.high_24h.usd.toLocaleString()}`,
                },
                {
                  label: "7d Low / 7d High",
                  value: `$${marketData.low_24h.usd.toLocaleString()} / $${marketData.high_24h.usd.toLocaleString()}`,
                },
                {
                  label: "Trading Volume",
                  value: `$${marketData.total_volume.usd.toLocaleString()}`,
                },
                {
                  label: "Market Cap Rank",
                  value: `#${data.market_cap_rank}`,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between py-3 border-b"
                >
                  <span className="text-gray-500">{item.label}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {[
                {
                  label: "Market Cap",
                  value: `$${marketData.market_cap.usd.toLocaleString()}`,
                },
                {
                  label: "Market Cap Dominance",
                  value: `${(
                    marketData.market_cap_change_percentage_24h || 0
                  ).toFixed(2)}%`,
                },
                {
                  label: "Volume / Market Cap",
                  value: (
                    marketData.total_volume.usd / marketData.market_cap.usd
                  ).toFixed(4),
                },
                {
                  label: "All-Time High",
                  value: `$${marketData.ath.usd.toLocaleString()}`,
                  change: `${marketData.ath_change_percentage.usd.toFixed(2)}%`,
                },
                {
                  label: "All-Time Low",
                  value: `$${marketData.atl.usd.toLocaleString()}`,
                  change: `${marketData.atl_change_percentage.usd.toFixed(2)}%`,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between py-3 border-b"
                >
                  <span className="text-gray-500">{item.label}</span>
                  <div className="text-right">
                    <span className="font-medium">{item.value}</span>
                    {item.change && (
                      <span
                        className={`ml-2 text-sm ${
                          parseFloat(item.change) >= 0
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {item.change}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinPerformance;