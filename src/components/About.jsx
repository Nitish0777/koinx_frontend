import React from 'react';
import { Calculator } from 'lucide-react';

const About = () => {
  const bitcoinPrice = {
    value: "20,815.91",
    volume: "519.14 B",
    change: "+2.49%",
    marketCap: "214.87"
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">About Bitcoin</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">What is Bitcoin?</h3>
            <p className="text-gray-600 mb-4">
              Bitcoin's price today is US${bitcoinPrice.value}, with a 24-hour trading volume of ${bitcoinPrice.volume}. BTC is up {bitcoinPrice.change} in the last 24 hours. It has a circulating supply of 0 BTC and a max supply of ${bitcoinPrice.marketCap}B BTC. Any all-time high is $69,045 (Nov 10, 2021).
            </p>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Aliquam placerat sit laboris tristique pharetra. Duis ut lectus massa tortor consectetur tellus ut. Viverra diam suspendisse enim facilisi diam ut sed.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Already Holding Bitcoin?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg shadow-sm p-4 flex items-center space-x-4 bg-gradient-to-r from-green-50 to-green-100">
              <div className="rounded-full bg-green-500 p-3">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold">Calculate your Profits</h4>
                <button className="text-sm text-green-600 mt-2 hover:underline">
                  Check Now →
                </button>
              </div>
            </div>

            <div className="rounded-lg shadow-sm p-4 flex items-center space-x-4 bg-gradient-to-r from-orange-50 to-orange-100">
              <div className="rounded-full bg-orange-500 p-3">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold">Calculate your tax liability</h4>
                <button className="text-sm text-orange-600 mt-2 hover:underline">
                  Check Now →
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;