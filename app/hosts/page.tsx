import { siteConfig } from '@/lib/config';

export const metadata = {
  title: `Hosts | ${siteConfig.name}`,
};

export default function HostsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Meet the Hosts</h1>
      <p className="text-slate-400 mb-12">
        Stats meet intuition. Here's who brings the knowledge and the passion.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {siteConfig.hosts.map((host) => (
          <div key={host.name} className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
            <div className="aspect-square bg-gradient-to-br from-blue-600 to-slate-700 flex items-center justify-center">
              <div className="text-6xl">Mic</div>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-1">{host.name}</h2>
              <p className="text-blue-400 mb-4 font-semibold">{host.role}</p>
              <p className="text-slate-300 mb-6">{host.bio}</p>
              {host.substack && (
                <a
                  href={host.substack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Read on Substack
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
