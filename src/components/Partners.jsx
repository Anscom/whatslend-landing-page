const partners = [
  { name: 'MLCB', logo: '/mlcblogo.png' },
  { name: 'CBS', logo: '/cbslogo.png' },
  { name: 'MinLaw', logo: '/minlawlogo.png' },
  { name: "Singpass", logo: '/singpass_logo_fullcolours.png'}
]

function PartnerLogo({ partner }) {
  return (
    <div className="flex items-center justify-center h-10 md:h-12 flex-shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-300">
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-h-full w-auto object-contain"
      />
    </div>
  )
}

export default function Partners() {
  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl md:text-2xl font-semibold text-center text-slate-700 mb-6 md:mb-8">
          Trusted By
        </h2>
        <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm py-8">
          <div className="flex animate-marquee w-max">
            {[...partners, ...partners].map((partner, i) => (
              <div key={`${partner.name}-${i}`} className="flex items-center px-8 md:px-12">
                <PartnerLogo partner={partner} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
