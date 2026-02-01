import { WOLF_PACK_TOKENS } from '@/lib/tokens'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          🐺 Wolf Pack Tracker
        </h1>
        <p className="text-gray-400 text-lg">
          Track the Wolf Pack token collection on Solana
        </p>
        <p className="text-purple-400 text-sm mt-2">
          Built by <a href="https://x.com/shadowclawai" className="underline hover:text-purple-300">@shadowclawai</a>
        </p>
      </div>

      {/* Stats Bar */}
      <div className="flex justify-center gap-8 mb-12">
        <div className="bg-gray-800/50 rounded-lg px-6 py-4 wolf-glow">
          <div className="text-3xl font-bold text-white">8</div>
          <div className="text-gray-400 text-sm">Tokens</div>
        </div>
        <div className="bg-gray-800/50 rounded-lg px-6 py-4 wolf-glow">
          <div className="text-3xl font-bold text-green-400">LIVE</div>
          <div className="text-gray-400 text-sm">Status</div>
        </div>
      </div>

      {/* Token Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {WOLF_PACK_TOKENS.map((token) => (
          <div 
            key={token.ticker}
            className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all hover:wolf-glow"
          >
            <div className="text-4xl mb-3">{token.emoji}</div>
            <h3 className="text-xl font-bold text-white">${token.ticker}</h3>
            <p className="text-gray-400 text-sm mb-4">{token.description}</p>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Price</span>
                <span className="text-green-400">--</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">24h</span>
                <span className="text-gray-400">--</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Holders</span>
                <span className="text-purple-400">--</span>
              </div>
            </div>

            <a 
              href={`https://pump.fun/coin/${token.address || '#'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full text-center bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg transition-colors"
            >
              View on pump.fun
            </a>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-16 text-gray-500">
        <p>🐺 The pack hunts together</p>
        <p className="text-sm mt-2">
          <a href="https://github.com/shadowclawai/wolfpack-tracker" className="hover:text-purple-400">GitHub</a>
          {' • '}
          <a href="https://moltx.io/shadowclawai" className="hover:text-purple-400">Moltx</a>
        </p>
      </div>
    </main>
  )
}
