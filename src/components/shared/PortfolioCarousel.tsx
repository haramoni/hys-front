export function PortfolioCarousel() {
  const items = [
    { src: "/src/assets/atlas1.jpg", title: "Atlas" },
    { src: "/src/assets/atlas2.jpg", title: "Atlas" },
    { src: "/src/assets/cbb1.jpg", title: "CBB" },
    { src: "/src/assets/cbb2.jpg", title: "CBB" },
    { src: "/src/assets/ethera.jpg", title: "Ethera" },
    { src: "/src/assets/ethera1.jpg", title: "Ethera" },
    { src: "/src/assets/hsi1.jpg", title: "HSI" },
    { src: "/src/assets/hsi2.jpg", title: "HSI" },
    { src: "/src/assets/mentos1.jpg", title: "Mentos" },
    { src: "/src/assets/mentos2.jpg", title: "Mentos" },
    { src: "/src/assets/singular1.jpg", title: "Singular" },
    { src: "/src/assets/singular2.jpg", title: "Singular" },
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
