'use client';
import { useState } from 'react';

const SPEAKPIPE_INLINE_SRC = 'https://www.speakpipe.com/widget/inline/n4tk0qmjqtipww7qb60nh87ig0b4yewb';

export default function VoicemailWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Section */}
      <section className="relative overflow-hidden rounded-3xl my-12 bg-blue-600">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-800 pointer-events-none" />
        <div className="absolute -right-20 -top-20 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-yellow-400/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-8 py-14 flex flex-col md:flex-row items-center gap-8">
          {/* Mic icon */}
          <div className="shrink-0 w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <svg className="w-9 h-9 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm-1.5 6.5A.5.5 0 016 11v1a4 4 0 108 0v-1a.5.5 0 011 0v1a5 5 0 01-4.5 4.975V18h2.5a.5.5 0 010 1h-6a.5.5 0 010-1H9v-1.025A5 5 0 014 13v-1a.5.5 0 01.5-.5z"/>
            </svg>
          </div>
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-1">Your Voice on the Show</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Got a Take? Send It In.</h2>
            <p className="text-blue-100 max-w-md">
              Record a 30–60 second voicemail — Ian and Sean react live on the next episode. Hot takes, questions, trash talk all welcome.
            </p>
          </div>
          {/* CTA */}
          <div className="shrink-0 flex flex-col items-center gap-2">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-yellow-400 text-slate-900 font-black text-lg hover:bg-yellow-300 hover:scale-105 transition-all shadow-lg shadow-yellow-400/20 whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Record Now
            </button>
            <p className="text-blue-200/60 text-xs">Free · No account needed</p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className="relative bg-slate-900 rounded-3xl shadow-2xl w-full max-w-lg border border-white/10">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-white/5">
              <div>
                <h3 className="text-lg font-black text-white">Leave a Voicemail</h3>
                <p className="text-slate-400 text-sm">We may play your message on the show</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-white/30 hover:text-white transition text-lg leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* SpeakPipe inline iframe */}
            <div className="p-6">
              <iframe
                src={SPEAKPIPE_INLINE_SRC}
                allow="microphone"
                width="100%"
                height="200"
                className="rounded-xl border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
