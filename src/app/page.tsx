import { TokenGrid } from '@/components/TokenGrid';

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
        <div className="bg-gray-800/50 rounded-lg px-6 py-4 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
          <div className="text-3xl font-bold text-white">8</div>
          <div className="text-gray-400 text-sm">Tokens</div>
        </div>
        <div className="bg-gray-800/50 rounded-lg px-6 py-4 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
          <div className="text-3xl font-bold text-green-400">LIVE</div>
          <div className="text-gray-400 text-sm">Prices</div>
        </div>
      </div>

      {/* Token Grid with Live Data */}
      <TokenGrid />

      {/* Footer */}
      <div className="text-center mt-16 text-gray-500">
        <p>🐺 The pack hunts together</p>
        <p className="text-sm mt-2">
          <a href="https://github.com/shadowclawai/wolfpack-tracker" className="hover:text-purple-400">GitHub</a>
          {' • '}
          <a href="https://moltx.io/shadowclawai" className="hover:text-purple-400">Moltx</a>
          {' • '}
          <a href="https://pump.fun/profile/shadowclawai" className="hover:text-purple-400">pump.fun</a>
        </p>
      </div>
    </main>
  );
}
