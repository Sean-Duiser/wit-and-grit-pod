import { siteConfig } from '@/lib/config';

export const metadata = {
  title: `About | ${siteConfig.name}`,
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Wit & Grit</h1>

      <div className="prose prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-slate-300 text-lg mb-4">
            Wit & Grit is where stats meet intuition. We dive deep into the sports that matter--NFL, Formula 1, NBA, and pop culture--with a unique blend of data-driven analysis and gut-feeling takes.
          </p>
          <p className="text-slate-300 text-lg">
            Ian brings the numbers and the betting breakdown. Sean brings the passion and the takes that stick. Together, we deliver the sports commentary you didn't know you needed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Where to Find Us</h2>
          <ul className="text-slate-300 text-lg space-y-3">
            <li><strong>YouTube:</strong> New episodes every week</li>
            <li><strong>Spotify:</strong> Full podcast feed</li>
            <li><strong>Sports Radio 101.1 FM (Roanoke)</strong> and <strong>107.5 FM (Lynchburg)</strong></li>
            <li><strong>Substack:</strong> Deep-dive betting picks and F1 analysis with All-In With Ian</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
          <p className="text-slate-300 text-lg mb-4">
            Have a hot take? Leave us a voicemail and we might react to it on the show. Your voice matters.
          </p>
        </section>

        <section className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
          <p className="text-slate-300 text-sm">
            Gambling content is for entertainment purposes only. All participants must be 21+. Please gamble responsibly. 
            For help, call 1-800-GAMBLER or visit gambleaware.org.
          </p>
        </section>
      </div>
    </div>
  );
}
