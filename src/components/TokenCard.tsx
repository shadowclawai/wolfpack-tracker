'use client';

import { WolfToken } from '@/lib/tokens';

interface TokenCardProps {
  token: WolfToken;
  priceData?: {
    price: string;
    change24h: number;
    volume24h: number;
    marketCap: number;
  };
}

export function TokenCard({ token, priceData }: TokenCardProps) {
  const formatPrice = (price: string) => {
    const num = parseFloat(price);
    if (num < 0.00001) return '<$0.00001';
    if (num < 0.01) return '$' + num.toFixed(6);
    return '$' + num.toFixed(4);
  };

  const formatNumber = (num: number) => {
    if (!num) return '--';
    if (num >= 1000000) return '$' + (num / 1000000).toFixed(2) + 'M';
    if (num >= 1000) return '$' + (num / 1000).toFixed(2) + 'K';
    return '$' + num.toFixed(0);
  };

  const pumpUrl = "https://pump.fun/coin/" + token.address;
  const dexUrl = "https://dexscreener.com/solana/" + token.address;

  return (
    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
      <div className="flex justify-between items-start mb-3">
        <div className="text-4xl">{token.emoji}</div>
        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
          priceData?.change24h && priceData.change24h > 0 
            ? 'bg-green-500/20 text-green-400' 
            : priceData?.change24h && priceData.change24h < 0 
              ? 'bg-red-500/20 text-red-400' 
              : 'bg-gray-500/20 text-gray-400'
        }`}>
          {priceData?.change24h !== undefined 
            ? (priceData.change24h > 0 ? '↑' : priceData.change24h < 0 ? '↓' : '→') + ' ' + Math.abs(priceData.change24h).toFixed(1) + '%'
            : '--'}
        </span>
      </div>
      <h3 className="text-xl font-bold text-white">${token.ticker}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{token.description}</p>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-500">Price</span>
          <span className="text-green-400 font-mono">
            {priceData?.price ? formatPrice(priceData.price) : '--'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">MCap</span>
          <span className="text-purple-400 font-mono">
            {formatNumber(priceData?.marketCap || 0)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">24h Vol</span>
          <span className="text-blue-400 font-mono">
            {formatNumber(priceData?.volume24h || 0)}
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        <a 
          href={pumpUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg transition-colors text-sm font-medium"
        >
          pump.fun
        </a>
        <a 
          href={dexUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition-colors text-sm font-medium"
        >
          📊 Chart
        </a>
      </div>
    </div>
  );
}
