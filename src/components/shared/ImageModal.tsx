import { ArrowBigLeft, ArrowBigRight, X } from "lucide-react";
import { useEffect } from "react";

type CarouselItem = {
  src: string;
  title: string;
};

export function ImagesModal({
  open,
  items,
  index,
  onClose,
  onPrev,
  onNext,
  setCurrentIndex,
}: {
  open: boolean;
  items: CarouselItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  setCurrentIndex: (index: number) => void;
}) {
  const item = items[index];

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Visualizar imagens do portfólio"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-background shadow-2xl">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-white p-2"
            aria-label="Fechar"
          >
            <X />
          </button>
        </div>

        <div className="relative flex items-center justify-center bg-black/40">
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white"
            aria-label="Anterior"
          >
            <ArrowBigLeft />
          </button>

          <img
            src={item.src}
            alt={item.title}
            className="max-h-[75vh] w-auto max-w-full select-none object-contain"
            draggable={false}
          />

          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
            aria-label="Próxima"
          >
            <ArrowBigRight />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-3">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Ir para imagem ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
