import React from 'react';
import { Info, ChevronRight, Newspaper, TrendingUp } from 'lucide-react';

const BitcoinSentiment = () => {
  const keyEvents = [
    {
      icon: <Newspaper className="w-8 h-8 text-white" />,
      bgColor: 'bg-blue-500',
      title: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.',
      description: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      bgColor: 'bg-green-500',
      title: 'Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.',
      description: 'Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisinc metus quis del'
    }
  ];

  const estimates = {
    buy: 76,
    hold: 8,
    sell: 16
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Sentiment</h2>
      
      {/* Key Events Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Key Events</h3>
          <Info className="w-4 h-4 text-gray-400" />
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4">
          {keyEvents.map((event, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-full md:w-[456px] p-4 bg-blue-50 rounded-xl"
            >
              <div className="flex gap-4">
                <div className={`${event.bgColor} p-2 rounded-full h-fit`}>
                  {event.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-2">{event.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <button className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Analyst Estimates Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Analyst Estimates</h3>
          <Info className="w-4 h-4 text-gray-400" />
        </div>

        <div className="flex items-center gap-8">
          <div className="w-32 h-32 rounded-full bg-green-50 flex items-center justify-center">
            <span className="text-3xl font-bold text-green-500">{estimates.buy}%</span>
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-8 text-sm text-gray-500">Buy</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${estimates.buy}%` }}
                />
              </div>
              <span className="w-12 text-sm text-gray-600">{estimates.buy}%</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-8 text-sm text-gray-500">Hold</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-gray-400 rounded-full"
                  style={{ width: `${estimates.hold}%` }}
                />
              </div>
              <span className="w-12 text-sm text-gray-600">{estimates.hold}%</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-8 text-sm text-gray-500">Sell</span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-red-500 rounded-full"
                  style={{ width: `${estimates.sell}%` }}
                />
              </div>
              <span className="w-12 text-sm text-gray-600">{estimates.sell}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinSentiment;