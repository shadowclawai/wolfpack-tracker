'use client';

import { WolfToken } from '@/lib/tokens';

interface TokenCardProps {
  token: WolfToken;
  priceData?: {
    price: string;
    change24h: number;
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

  const formatMarketCap = (mc: number) => {
    if (!mc) return '--';
    if (mc >= 1000000) return '$' + (mc / 1000000).toFixed(2) + 'M';
    if (mc >= 1000) return '$' + (mc / 1000).toFixed(2) + 'K';
    return '$' + mc.toFixed(0);
  };

  return (
    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
      <div className="text-4xl mb-3">{token.emoji}</div>
      <h3 className="text-xl font-bold text-white">${token.ticker}</h3>
      <p className="text-gray-400 text-sm mb-4">{token.description}</p>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-500">Price</span>
          <span className="text-green-400 font-mono">
            {priceData?.price ? formatPrice(priceData.price) : '--'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">24h</span>
          <span className={`font-mono ${
            priceData?.change24h && priceData.change24h > 0 
              ? 'text-green-400' 
              : priceData?.change24h && priceData.change24h < 0 
                ? 'text-red-400' 
                : 'text-gray-400'
          }`}>
            {priceData?.change24h !== undefined 
              ? `${priceData.change24h > 0 ? '+' : ''}${priceData.change24h.toFixed(2)}%`
              : '--'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">MCap</span>
          <span className="text-purple-400 font-mono">
            {formatMarketCap(priceData?.marketCap || 0)}
          </span>
        </div>
      </div>

      <a 
        href={\`https://pump.fun/coin/\${token.address}\`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 block w-full text-center bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg transition-colors"
      >
        View on pump.fun
      </a>
    </div>
  );
}
