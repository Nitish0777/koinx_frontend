import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const CryptoCard = ({ symbol, name, price, change, data, isPositive }) => {
  return (
    <div className="min-w-[200px] bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center space-x-2 mb-2">
        <img
          src={`/api/placeholder/24/24`}
          alt={`${name} logo`}
          className="w-6 h-6 rounded-full"
        />
        <span className="font-medium">{symbol}</span>
        <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {change}%
        </span>
      </div>
      <div className="font-semibold mb-2">${price}</div>
      <div className="h-16">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="price"
              stroke={isPositive ? '#22c55e' : '#ef4444'}
              dot={false}
              strokeWidth={1.5}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const ScrollableSection = ({ title, cryptoData }) => {
  const scrollLeft = () => {
    const container = document.getElementById(`scroll-container-${title}`);
    container.scrollLeft -= 220;
  };

  const scrollRight = () => {
    const container = document.getElementById(`scroll-container-${title}`);
    container.scrollLeft += 220;
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-50"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div
          id={`scroll-container-${title}`}
          className="flex overflow-x-auto space-x-4 scroll-smooth scrollbar-hide relative px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cryptoData.map((crypto) => (
            <CryptoCard
              key={crypto.symbol}
              {...crypto}
              isPositive={parseFloat(crypto.change) > 0}
            />
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-50"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const TrendingCryptoSection = () => {
  // Sample data - replace with real data
  const youMayLike = [
    {
      symbol: 'BNB',
      name: 'Binance Coin',
      price: '319.34',
      change: '+0.52',
      data: Array(20).fill().map((_, i) => ({ price: Math.random() * 100 }))
    },
    {
      symbol: 'SOL',
      name: 'Solana',
      price: '109.33',
      change: '-2.99',
      data: Array(20).fill().map((_, i) => ({ price: Math.random() * 100 }))
    },
    {
      symbol: 'XRP',
      name: 'Ripple',
      price: '0.63481',
      change: '+0.78',
      data: Array(20).fill().map((_, i) => ({ price: Math.random() * 100 }))
    },
    {
      symbol: 'ADA',
      name: 'Cardano',
      price: '0.61489',
      change: '+0.57',
      data: Array(20).fill().map((_, i) => ({ price: Math.random() * 100 }))
    },
    {
      symbol: 'AVAX',
      name: 'Avalanche',
      price: '41.05',
      change: '-0.78',
      data: Array(20).fill().map((_, i) => ({ price: Math.random() * 100 }))
    }
  ];

  const trendingCoins = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: '45,532.83',
      change: '+0.08',
      data: Array(20).fill().map((_, i) => ({ price: Math.random() * 100 }))
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      price: '2,375.15',
      change: '+0.34',
      data: Array(20).fill().map((_, i) => ({ price: Math.random() * 100 }))
    },
    {
      symbol: 'METH',
      name: 'Ethereum',
      price: '2,371.72',
      change: '+0.34',
      data: Array(20).fill().map((_, i) => ({ price: Math.random() * 100 }))
    },
    {
      symbol: 'UNI',
      name: 'Uniswap',
      price: '7.3192',
      change: '+0.02',
      data: Array(20).fill().map((_, i) => ({ price: Math.random() * 100 }))
    },
    {
      symbol: 'CFG',
      name: 'Centrifuge',
      price: '0.77360',
      change: '+1.95',
      data: Array(20).fill().map((_, i) => ({ price: Math.random() * 100 }))
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <ScrollableSection title="You May Also Like" cryptoData={youMayLike} />
      <ScrollableSection title="Trending Coins" cryptoData={trendingCoins} />
    </div>
  );
};

export default TrendingCryptoSection;