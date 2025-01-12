import React from 'react';
import { ArrowRight } from 'lucide-react';

const GetStartedSection = () => {
  const trendingCoins = [
    {
      name: 'Ethereum',
      symbol: 'ETH',
      change: '+6.21',
      color: 'bg-blue-500'
    },
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      change: '+5.26',
      color: 'bg-orange-500'
    },
    {
      name: 'Polygon',
      symbol: 'MATIC',
      change: '+4.32',
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="max-w-sm mx-auto p-4">
      {/* Get Started Banner */}
      <div className="bg-blue-600 text-white rounded-xl p-6 mb-6 text-center">
        <h2 className="text-xl font-bold mb-2">
          Get Started with KoinX
          <br />
          for FREE
        </h2>
        <p className="text-sm mb-8 opacity-90">
          With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
        </p>
        
        <div className="flex justify-center mb-6">
          <img 
            src="/api/placeholder/180/120"
            alt="Tax reporting illustration"
            className="w-[180px] h-[120px] object-contain"
          />
        </div>

        <button className="bg-white text-black px-6 py-2 rounded-lg font-medium flex items-center justify-center space-x-2 mx-auto hover:bg-gray-100 transition-colors">
          <span>Get Started for FREE</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Trending Coins Section */}
      <div className="bg-white rounded-xl p-4">
        <h3 className="font-bold mb-4">Trending Coins (24h)</h3>
        <div className="space-y-4">
          {trendingCoins.map((coin) => (
            <div key={coin.symbol} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className={`w-6 h-6 rounded-full ${coin.color} flex items-center justify-center text-white text-xs`}>
                  {coin.symbol.charAt(0)}
                </div>
                <span className="font-medium">
                  {coin.name} ({coin.symbol})
                </span>
              </div>
              <span className="text-green-500 bg-green-50 px-2 py-1 rounded text-sm">
                {coin.change}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;