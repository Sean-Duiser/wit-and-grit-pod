import { siteConfig } from '@/lib/config';

export const metadata = {
  title: `Advertise with Us | ${siteConfig.name}`,
};

export default function AdvertisePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Partner with Wit & Grit</h1>
      <p className="text-slate-400 mb-12 text-lg">
        Reach an engaged audience of sports fans, bettors, and F1 enthusiasts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
          <h3 className="text-2xl font-bold mb-4">Our Audience</h3>
          <ul className="text-slate-300 space-y-2">
            <li>- Sports enthusiasts (NFL, F1, NBA)</li>
            <li>- Sports bettors and gambling enthusiasts</li>
            <li>- Pop culture fans</li>
            <li>- Podcast listeners and YouTube viewers</li>
            <li>- Radio audience (Roanoke and Lynchburg)</li>
          </ul>
        </div>

        <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
          <h3 className="text-2xl font-bold mb-4">Our Reach</h3>
          <ul className="text-slate-300 space-y-2">
            <li>- YouTube: Growing audience</li>
            <li>- Podcast Listeners: Growing weekly</li>
            <li>- Radio Broadcast: 2 stations</li>
            <li>- Social and Newsletter: Engaged community</li>
            <li>- Substack: Active subscriber base</li>
          </ul>
        </div>
      </div>

      <section className="bg-blue-900 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">Sponsorship Packages</h2>
        <div className="space-y-6 text-slate-200">
          <div>
            <h3 className="font-bold text-lg mb-2">Pre-Roll Sponsorship</h3>
            <p>30-60 second host-read at the beginning of episodes</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Mid-Roll Sponsorship</h3>
            <p>Integrated mention during episode discussing relevant topics</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Post-Roll Sponsorship</h3>
            <p>Call-to-action at the end with dedicated promo code</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Custom Packages</h3>
            <p>Multi-episode deals, exclusive content, or special integrations</p>
          </div>
        </div>
      </section>

      <div className="text-center mb-12">
        <a
          href="mailto:contact@witandgritpodcast.com"
          className="bg-yellow-400 text-slate-950 hover:bg-yellow-300 px-8 py-3 rounded-lg font-bold transition inline-block"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
