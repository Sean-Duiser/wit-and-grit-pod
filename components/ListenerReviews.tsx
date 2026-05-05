'use client';

export default function ListenerReviews() {
  const reviews = [
    {
      author: 'Coming soon...',
      rating: 5,
      text: 'Leave us a review on your favorite podcast platform!',
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Listener Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">STAR</span>
                ))}
              </div>
              <p className="text-slate-300 mb-3">{review.text}</p>
              <p className="text-slate-400 font-semibold text-sm">— {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
