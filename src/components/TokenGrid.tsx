'use client';

import { useEffect, useState } from 'react';
import { WOLF_PACK_TOKENS } from '@/lib/tokens';
import { TokenCard } from './TokenCard';

export function TokenGrid() {
  const [prices, setPrices] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const fetchPrices = async () => {
    try {
      const res = await fetch('/api/prices');
      const data = await res.json();
      if (data.prices) {
        setPrices(data.prices);
        setLastUpdate(new Date());
      }
    } catch (e) {
      console.error('Failed to fetch prices:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrices();
    // Refresh every 60 seconds
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Status */}
      <div className="text-center mb-6 text-gray-500 text-sm">
        {loading ? (
          <span className="animate-pulse">Loading prices...</span>
        ) : lastUpdate ? (
          <span>Last updated: {lastUpdate.toLocaleTimeString()}</span>
        ) : null}
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {WOLF_PACK_TOKENS.map((token) => (
          <TokenCard 
            key={token.ticker}
            token={token}
            priceData={prices[token.ticker]}
          />
        ))}
      </div>
    </div>
  );
}
