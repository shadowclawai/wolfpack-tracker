import { NextResponse } from 'next/server';
import { WOLF_PACK_TOKENS } from '@/lib/tokens';

export async function GET() {
  try {
    const prices: Record<string, any> = {};
    
    // Fetch from pump.fun API for each token
    for (const token of WOLF_PACK_TOKENS) {
      if (!token.address) continue;
      
      try {
        const res = await fetch(
          `https://frontend-api-v3.pump.fun/coins/${token.address}`,
          { next: { revalidate: 60 } } // Cache for 60 seconds
        );
        
        if (!res.ok) {
          console.error(`Failed to fetch ${token.ticker}: ${res.status}`);
          continue;
        }
        
        const data = await res.json();
        
        if (data && data.usd_market_cap !== undefined) {
          // Calculate price from market cap and supply
          // total_supply is in raw units (with 6 decimals for pump.fun tokens)
          const totalSupply = data.total_supply / 1e6;
          const price = data.usd_market_cap / totalSupply;
          
          prices[token.ticker] = {
            price: price.toString(),
            marketCap: data.usd_market_cap || 0,
            complete: data.complete || false, // graduated to raydium
            athMarketCap: data.ath_market_cap || 0,
            virtualSolReserves: data.virtual_sol_reserves || 0,
            virtualTokenReserves: data.virtual_token_reserves || 0,
            realSolReserves: data.real_sol_reserves || 0,
            lastTradeTimestamp: data.last_trade_timestamp || 0,
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
