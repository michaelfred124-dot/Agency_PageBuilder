import React from 'react';
import Link from 'next/link';
import { Mail, Github, Compass, Play, Layers } from 'lucide-react';
import { Outfit, Inter } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], weight: ['400', '600', '700', '900'], variable: '--font-display', display: 'swap' });
const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-body', display: 'swap' });

const BASE = '/work/reflix';

export default function ReflixLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${outfit.variable} ${inter.variable} min-h-screen text-[#F3F4F6] bg-[#0B0B0C] selection:bg-blue-600 selection:text-white`} style={{ fontFamily: 'var(--font-body)' }}>
      {/* HEADER NAV */}
      <header className="sticky top-0 z-50 bg-[#0B0B0C]/80 backdrop-blur-md border-b border-gray-900/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href={BASE} className="flex items-center gap-2 cursor-pointer group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black tracking-tighter group-hover:scale-105 transition-transform">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <span className="font-bold text-xl uppercase tracking-tighter text-white" style={{ fontFamily: 'var(--font-display)' }}>
                REFLIX<span className="text-blue-500 font-black">.</span>
              </span>
            </Link>
          </div>

          <nav className="flex items-center gap-6 text-sm font-medium text-gray-400">
            <a href="#library" className="hover:text-white transition-colors cursor-pointer">庫</a>
            <a href="#faq" className="hover:text-white transition-colors cursor-pointer">常見問題</a>
            <a href="#about" className="hover:text-white transition-colors cursor-pointer">關於我們</a>
            <Link
              href="/contact"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-widest rounded-lg transition-all"
            >
              立刻預約
            </Link>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main>{children}</main>

      {/* FOOTER */}
      <footer className="bg-[#080809] border-t border-gray-900/80 pt-16 pb-10 px-6 md:px-12 text-gray-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span className="font-bold text-lg uppercase tracking-tighter text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  REFLIX<span className="text-blue-500 font-bold">.</span>
                </span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-6 max-w-xs">
                精選 3D 遊戲角色動畫與影視視覺特效片段庫，面向遊戲動畫師與動態設計師的靈感與參考素材中心。
              </p>
              <div className="flex gap-4 text-gray-400">
                <a href="#" className="hover:text-white transition-colors"><Mail className="w-4 h-4" /></a>
                <a href="#" className="hover:text-white transition-colors"><Compass className="w-4 h-4" /></a>
                <a href="#" className="hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-6">分類導航</h4>
              <div className="flex flex-col gap-3 text-xs text-gray-400 font-medium">
                <a href="#library" className="hover:text-white transition-colors">動作攻擊</a>
                <a href="#library" className="hover:text-white transition-colors">技能與大招</a>
                <a href="#library" className="hover:text-white transition-colors">移動跑跳</a>
                <a href="#library" className="hover:text-white transition-colors">表情與情感</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-6">技術細節</h4>
              <div className="flex flex-col gap-3 text-xs text-gray-400 font-medium">
                <span className="hover:text-white transition-colors">逐幀播放支持</span>
                <span className="hover:text-white transition-colors">動態循環循環播放</span>
                <span className="hover:text-white transition-colors">高碼率 MP4 格式</span>
                <span className="hover:text-white transition-colors">AI 智能標籤過濾</span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-6">關於我們</h4>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Reflix 是由 MichaelFred Designs 設計與開發的頂級展示專案之一。我們為全球優秀創意人打造極致流暢的工具體驗。
              </p>
              <Link href="/contact" className="text-xs text-blue-500 hover:text-blue-400 font-bold">
                聯繫我們的團隊 &rarr;
              </Link>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-gray-600 font-medium">
            <p>© 2026 Reflix Library · 由 MichaelFred Designs Agency 設計與託管</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-white transition-colors">使用條款</Link>
              <Link href="#" className="hover:text-white transition-colors">隱私政策</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
