# Bitcoin Price Tracker

A modern React application for tracking Bitcoin prices, market sentiment, and performance metrics in real-time.

## Features

- Real-time Bitcoin price tracking in USD and INR
- Interactive price charts with multiple timeframes
- Market performance indicators
- Sentiment analysis and key events
- Analyst estimates visualization
- Responsive design for all devices

## Tech Stack

- React.js
- Tailwind CSS
- Recharts for data visualization
- Lucide React for icons
- CoinGecko API for market data

## API Integration

The application uses the following CoinGecko API endpoints:
- `/simple/price` - Current price data
- `/coins/bitcoin` - Detailed coin information
- `/coins/bitcoin/market_chart` - Historical price data
- `/search/trending` - Trending coins data

## Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Environment Setup

Create a `.env` file in the root directory:
```env
VITE_COINGECKO_API_URL=https://api.coingecko.com/api/v3
```

## Components

- `BitcoinChart` - Price chart with timeframe selection
- `BitcoinPerformance` - Performance metrics and fundamentals
- `BitcoinSentiment` - Market sentiment and analyst estimates

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - feel free to use this project for your own purposes.

![image](https://github.com/user-attachments/assets/be8dbc76-88e2-4dc8-8f20-88ecab56d961)

![image](https://github.com/user-attachments/assets/a5f35a6a-f3ca-4ac7-bfc9-5ed8a9c444e5)

![image](https://github.com/user-attachments/assets/100909c3-b704-40bc-aad6-cd9bc3d2c582)

![image](https://github.com/user-attachments/assets/99aa273e-9bbd-4fdf-825d-ea0f5e197246)

![image](https://github.com/user-attachments/assets/aca95e76-5809-42a5-8f34-67d07a34f5e7)

![image](https://github.com/user-attachments/assets/97fda788-4254-4789-954c-69fded93199a)

## Responsive Mobile view
![image](https://github.com/user-attachments/assets/639b3212-8068-40a3-9840-1ac2df1d50ef)



