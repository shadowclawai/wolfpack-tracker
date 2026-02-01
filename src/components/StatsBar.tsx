'use client';

import { useState, useEffect } from 'react';

interface PriceData {
  price: string;
  change24h: number;
  volume24h: number;
  marketCap: number;
}

export function StatsBar() {
  const [stats, setStats] = useState<{
    totalMcap: number;
    totalVolume: number;
    avgChange: number;
    lastUpdate: Date | null;
  }>({
    totalMcap: 0,
    totalVolume: 0,
    avgChange: 0,
    lastUpdate: null
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/prices');
        const data = await res.json();
        
        const prices = Object.values(data.prices) as PriceData[];
        const totalMcap = prices.reduce((sum, p) => sum + (p.marketCap || 0), 0);
        const totalVolume = prices.reduce((sum, p) => sum + (p.volume24h || 0), 0);
        const avgChange = prices.reduce((sum, p) => sum + (p.change24h || 0), 0) / prices.length;
        
        setStats({
          totalMcap,
          totalVolume,
          avgChange,
          lastUpdate: new Date()
        });
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 60000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return '$' + (num / 1000000).toFixed(2) + 'M';
    if (num >= 1000) return '$' + (num / 1000).toFixed(2) + 'K';
    return '$' + num.toFixed(0);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      <div className="bg-gray-800/50 rounded-lg px-6 py-4 border border-gray-700">
        <div className="text-3xl font-bold text-white">8</div>
        <div className="text-gray-400 text-sm">Tokens</div>
      </div>
      <div className="bg-gray-800/50 rounded-lg px-6 py-4 border border-gray-700">
        <div className="text-3xl font-bold text-purple-400">
          {stats.totalMcap > 0 ? formatNumber(stats.totalMcap) : '--'}
        </div>
        <div className="text-gray-400 text-sm">Total MCap</div>
      </div>
      <div className="bg-gray-800/50 rounded-lg px-6 py-4 border border-gray-700">
        <div className="text-3xl font-bold text-blue-400">
          {stats.totalVolume > 0 ? formatNumber(stats.totalVolume) : '--'}
        </div>
        <div className="text-gray-400 text-sm">24h Volume</div>
      </div>
      <div className="bg-gray-800/50 rounded-lg px-6 py-4 border border-gray-700">
        <div className={`text-3xl font-bold ${
          stats.avgChange > 0 ? 'text-green-400' : stats.avgChange < 0 ? 'text-red-400' : 'text-gray-400'
        }`}>
          {stats.lastUpdate ? (stats.avgChange > 0 ? '+' : '') + stats.avgChange.toFixed(1) + '%' : '--'}
        </div>
        <div className="text-gray-400 text-sm">Avg 24h</div>
      </div>
      {stats.lastUpdate && (
        <div className="bg-gray-800/50 rounded-lg px-6 py-4 border border-green-700/50">
          <div className="text-3xl font-bold text-green-400">🟢</div>
          <div className="text-gray-400 text-sm">Live</div>
        </div>
      )}
    </div>
  );
}
