import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const BitcoinChart = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [timeframe, setTimeframe] = useState("7D");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPriceData = async () => {
      try {
        const priceResponse = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true"
        );
        const priceData = await priceResponse.json();
        setBitcoinData(priceData.bitcoin);

        // Fetch historical data for the chart
        const days =
          timeframe === "7D"
            ? 7
            : timeframe === "1M"
            ? 30
            : timeframe === "3M"
            ? 90
            : timeframe === "6M"
            ? 180
            : timeframe === "1Y"
            ? 365
            : 7;

        const historyResponse = await fetch(
          `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}&interval=daily`
        );
        const historyData = await historyResponse.json();

        // Transform the data for the chart
        const formattedData = historyData.prices.map(([timestamp, price]) => ({
          date: new Date(timestamp).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          price: price,
        }));

        setChartData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchPriceData();
  }, [timeframe]);

  const timeframes = ["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"];

  const formatYAxis = (value) => {
    return `${Math.round(value / 1000)}k`;
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 shadow-lg rounded-lg border">
          <p className="font-medium">${payload[0].value.toLocaleString()}</p>
          <p className="text-sm text-gray-500">{payload[0].payload.date}</p>
        </div>
      );
    }
    return null;
  };

  if (loading || !bitcoinData) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49cXPOUUOQt8w_T1kOSnUAsspfeTnJglulQ&s"
            alt="Bitcoin"
            className="w-8 h-8 rounded-full"
          />
          <h2 className="text-2xl font-bold">Bitcoin</h2>
          <span className="text-gray-500">BTC</span>
          <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm">
            Rank #1
          </span>
        </div>

        <div className="mb-1">
          <span className="text-3xl font-bold">
            ${bitcoinData.usd.toLocaleString()}
          </span>
          <span
            className={`ml-3 text-sm ${
              bitcoinData.usd_24h_change >= 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {bitcoinData.usd_24h_change >= 0 ? "▲" : "▼"}
            {Math.abs(bitcoinData.usd_24h_change).toFixed(2)}% (24H)
          </span>
        </div>
        <div className="text-lg text-gray-700">
          ₹ {bitcoinData.inr.toLocaleString()}
        </div>
      </div>

      {/* Chart Title and Timeframe Selector */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h3 className="font-bold">Bitcoin Price Chart (USD)</h3>
        <div className="flex flex-wrap gap-2">
          {timeframes.map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-3 py-1 rounded-lg text-sm ${
                timeframe === tf
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0052FF" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#0052FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666666" }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666666" }}
              tickFormatter={formatYAxis}
              dx={-10}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#0052FF" // Make sure the line is blue or a visible color
              strokeWidth={3} // Increased stroke width for visibility
              fill="url(#colorPrice)"
              fillOpacity={0.2} // Make sure the fill opacity is visible
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BitcoinChart;
