'use client';

export default function ListenerReviews() {
  const reviews = [
    {
      author: 'John Elway',
      title: 'Hall of Famer, 2x Super Bowl Champion',
      rating: 5,
      text: 'I\'ve won two Super Bowls and I\'ve never felt as hyped as when I listened to Wit & Grit. These guys know football. Mandatory listen.',
    },
    {
      author: 'Dan Marino',
      title: 'Hall of Famer, Miami Dolphins Legend',
      rating: 5,
      text: 'Never won a ring but I found something better — this podcast. Ian and Sean break down the game better than anyone in the booth. Five stars.',
    },
    {
      author: 'Spider-Man',
      title: 'Friendly Neighborhood Superhero',
      rating: 5,
      text: 'With great power comes great responsibility — and the responsibility to listen to Wit & Grit. I catch every episode between saving New York. No notes.',
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Listener Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-yellow-400/50 transition-colors">
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="text-white font-bold text-sm">— {review.author}</p>
                <p className="text-slate-500 text-xs mt-0.5">{review.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
