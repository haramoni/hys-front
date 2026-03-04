import { useMemo, useState } from "react";
import { ImagesModal } from "./ImageModal";

type CarouselItem = {
  src: string;
  title: string;
};

type PortfolioCarouselProps = {
  items: CarouselItem[];
};

export function PortfolioCarousel({ items }: PortfolioCarouselProps) {
  const loop = useMemo(() => [...items, ...items], [items]); // duplica para o efeito de loop

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openAt = (idxInLoop: number) => {
    // converte o idx do loop (duplicado) para o idx real
    const realIdx = ((idxInLoop % items.length) + items.length) % items.length;
    setCurrentIndex(realIdx);
    setOpen(true);
  };

  const close = () => setOpen(false);

  const prev = () =>
    setCurrentIndex((i) => (i - 1 + items.length) % items.length);

  const next = () => setCurrentIndex((i) => (i + 1) % items.length);

  return (
    <>
      <section className="w-full bg-transparent">
        <div className="mx-auto max-w-6xl">
          <div className="marquee relative overflow-hidden rounded-2xl border-white/10">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16" />

            <div className="marquee-track flex w-max items-center gap-6 py-6">
              {loop.map((item, idx) => (
                <figure
                  key={`${item.src}-${idx}`}
                  className="relative h-50 w-70 overflow-hidden rounded-xl border border-white/10 shadow-2xl transition-transform duration-300 hover:scale-[1.03]"
                >
                  <button
                    type="button"
                    onClick={() => openAt(idx)}
                    className="block h-full w-full"
                    aria-label={`Abrir ${item.title}`}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  </button>

                  <figcaption className="absolute inset-x-0 bottom-0 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white">
                    {item.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ImagesModal
        open={open}
        items={items}
        index={currentIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}
