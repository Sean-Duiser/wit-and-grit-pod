'use client';

export default function Hero() {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
        {/* Radio badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-400/40 text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          Live on 101.1 FM Roanoke · 107.5 FM Lynchburg
        </div>

        {/* Main title */}
        <h1 className="text-7xl md:text-9xl font-black tracking-tight uppercase leading-none mb-4">
          Wit<span className="text-yellow-400">&</span>Grit
        </h1>

        <p className="text-lg md:text-xl text-slate-400 font-medium max-w-xl mx-auto mb-10">
          NFL · F1 · NBA · Pop Culture — where <span className="text-white font-semibold">stats meet intuition</span>
        </p>

        {/* Platform buttons */}
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="https://www.youtube.com/@WitAndGritPod" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-yellow-400 transition">
            <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch on YouTube
          </a>
          <a href="https://open.spotify.com/show/4YHaaQy9Fz830CZdT2fTRZ" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-bold text-sm hover:border-green-400 hover:text-green-400 transition">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Listen on Spotify
          </a>

        </div>
      </div>
    </section>
  );
}
