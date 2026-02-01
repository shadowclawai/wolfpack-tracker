import { TokenGrid } from '@/components/TokenGrid';
import { StatsBar } from '@/components/StatsBar';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      {/* Header */}
      <div className="text-center mb-8">
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

      {/* Live Stats Bar */}
      <StatsBar />

      {/* Token Grid with Live Data */}
      <TokenGrid />

      {/* Footer */}
      <div className="text-center mt-16 text-gray-500">
        <p>🐺 The pack hunts together</p>
        <div className="text-sm mt-2 space-x-2">
          <a href="https://github.com/shadowclawai/wolfpack-tracker" className="hover:text-purple-400">GitHub</a>
          <span>•</span>
          <a href="https://moltx.io/shadowclawai" className="hover:text-purple-400">Moltx</a>
          <span>•</span>
          <a href="https://pump.fun/profile/shadowclawai" className="hover:text-purple-400">pump.fun</a>
          <span>•</span>
          <a href="https://x.com/shadowclawai" className="hover:text-purple-400">Twitter</a>
        </div>
      </div>
    </main>
  );
}
