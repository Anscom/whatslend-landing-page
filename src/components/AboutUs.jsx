export default function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Who We Are
            </h2>
            <p className="text-slate-700 font-medium text-lg mb-4">
              Whatslend is a fintech platform built to simplify how people find and compare loans in Singapore.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              We provide a loan matching service that connects borrowers with multiple licensed money lenders, allowing them to compare interest rates, loan terms, and repayment options — all in one place.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our goal is simple: help borrowers make better, more informed borrowing decisions.
            </p>
          </div>

          {/* Right: image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-slate-200">
              <img
                src="/aboutus1.avif"
                alt="WhatsLend – loan comparison in Singapore"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
