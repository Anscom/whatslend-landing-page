const services = [
  {
    title: 'CompareLoan.sg',
    description: 'Compare loans effortlessly and choose the best option for you.',
    image: '/compareloansgwebsite.png',
  },
  {
    title: 'Coming Soon',
    description: 'More services will be added soon as we expand our business.',
    image: null,
  },
]

export default function OurBrands() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-12 md:mb-16">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100"
            >
              {service.image && (
                <div className="-mx-8 -mt-8 mb-4 overflow-hidden rounded-t-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
