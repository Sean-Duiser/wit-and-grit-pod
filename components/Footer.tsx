'use client';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 text-white border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div className="max-w-xs">
            <h3 className="text-2xl font-black uppercase tracking-tight text-yellow-400 mb-2">{siteConfig.name}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{siteConfig.description}</p>
            <div className="flex gap-3 mt-5">
              <a href={siteConfig.links.youtube} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-yellow-400 hover:text-yellow-400 transition text-xs">
                YT
              </a>
              <a href={siteConfig.links.spotify} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-green-400 hover:text-green-400 transition text-xs">
                SP
              </a>
              <a href={siteConfig.links.substack} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-orange-400 hover:text-orange-400 transition text-xs font-bold">
                S
              </a>
            </div>
          </div>
          <div className="flex gap-16">
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-4">Navigation</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { href: '/episodes', label: 'Episodes' },
                  { href: '/hosts', label: 'Hosts' },
                  { href: '/about', label: 'About' },
                  { href: '/advertise', label: 'Advertise' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="text-slate-400 hover:text-yellow-400 transition">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-4">Listen</h4>
              <ul className="space-y-3 text-sm">
                <li><a href={siteConfig.links.youtube} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-yellow-400 transition">YouTube</a></li>
                <li><a href={siteConfig.links.spotify} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-yellow-400 transition">Spotify</a></li>
                <li><a href={siteConfig.links.applePodcasts} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-yellow-400 transition">Apple Podcasts</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between gap-2 text-xs text-slate-600">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Gambling content for entertainment only. Must be 21+. If you or someone you know has a gambling problem, call 1-800-GAMBLER.</p>
        </div>
      </div>
    </footer>
  );
}
