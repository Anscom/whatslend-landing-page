export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/homepage1.avif)' }}
    >
      <div className="absolute inset-0 bg-slate-900/60" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-4 md:mb-6">
          Grow Your Wealth, Smarter
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto mb-8 md:mb-10">
          Connecting borrowers and lenders with ease and confidence.
        </p>
        <a
          href="#services"
          className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-lg transition-colors"
        >
          Explore Our Services
        </a>
      </div>
    </section>
  )
}
