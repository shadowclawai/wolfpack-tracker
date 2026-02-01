import { NextResponse } from 'next/server';
import { WOLF_PACK_TOKENS } from '@/lib/tokens';

export async function GET() {
  try {
    const prices: Record<string, any> = {};
    
    // Fetch from DexScreener for each token
    for (const token of WOLF_PACK_TOKENS) {
      if (!token.address) continue;
      
      try {
        const res = await fetch(
          `https://api.dexscreener.com/latest/dex/tokens/${token.address}`,
          { next: { revalidate: 60 } } // Cache for 60 seconds
        );
        const data = await res.json();
        
        if (data.pairs && data.pairs.length > 0) {
          const pair = data.pairs[0];
          prices[token.ticker] = {
            price: pair.priceUsd || '0',
            change24h: pair.priceChange?.h24 || 0,
            volume24h: pair.volume?.h24 || 0,
            liquidity: pair.liquidity?.usd || 0,
            marketCap: pair.marketCap || 0,
          };
        }
      } catch (e) {
        console.error(`Failed to fetch ${token.ticker}:`, e);
      }
    }
    
    return NextResponse.json({ prices, timestamp: Date.now() });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch prices' }, { status: 500 });
  }
}
