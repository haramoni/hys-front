type CarouselItem = {
  src: string;
  title: string;
};

type PortfolioCarouselProps = {
  items: CarouselItem[];
};

export function PortfolioCarousel({ items }: PortfolioCarouselProps) {
  const loop = [...items, ...items]; // duplica para o efeito de loop

  return (
    <section className="w-full bg-transparent">
      <div className="mx-auto max-w-6xl">
        <div className="marquee relative overflow-hidden rounded-2xl border-white/10">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16" />

          <div className="marquee-track flex w-max items-center gap-6 py-6">
            {loop.map((item, idx) => (
              <figure
                key={`${item.src}-${idx}`}
                className="relative h-50 w-70 overflow-hidden rounded-xl shadow-2xl border border-white/10 transition-transform duration-300 hover:scale-[1.03]"
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
