export function PortfolioCarousel() {
  const items = [
    { src: "atlas1.jpg", title: "Atlas" },
    { src: "atlas2.jpg", title: "Atlas" },
    { src: "cbb1.jpg", title: "CBB" },
    { src: "cbb2.jpg", title: "CBB" },
    { src: "ethera.jpg", title: "Ethera" },
    { src: "ethera1.jpg", title: "Ethera" },
    { src: "hsi1.jpg", title: "HSI" },
    { src: "hsi2.jpg", title: "HSI" },
    { src: "mentos1.jpg", title: "Mentos" },
    { src: "mentos2.jpg", title: "Mentos" },
    { src: "singular1.jpg", title: "Singular" },
    { src: "singular2.jpg", title: "Singular" },
  ];

  const loop = [...items, ...items];

  return (
    <section className="w-full bg-transparent py-4">
      <div className="mx-auto max-w-6xl">
        <div className="marquee relative overflow-hidden rounded-2xl  border-white/10 ">
          <div className="pointer-events-none absolute inset-y-0 left-0 bg-linear-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16" />

          <div className="marquee-track flex w-max items-center gap-6 py-6">
            {loop.map((item, idx) => (
              <figure
                key={`${item.title}-${idx}`}
                className="relative h-100 w-140 overflow-hidden rounded-xl shadow-2xl border border-white/10 transition-transform duration-300 hover:scale-[1.03]"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
                <figcaption className="absolute inset-x-0 bottom-0 px-4 py-3 text-white text-sm font-semibold uppercase tracking-wide">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
