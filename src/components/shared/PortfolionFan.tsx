export function PortfolioFan() {
  const items = [
    {
      src: "/src/assets/cbb.jpg",
      alt: "Stand corporativo",
      label: "Marcenaria Própria",
    },
    {
      src: "/src/assets/ethera.jpg",
      alt: "Stand premium",
      label: "Montagem Completa",
    },
    {
      src: "/src/assets/mentos.jpg",
      alt: "Quiosque comercial",
      label: "Projetos Instagramáveis",
    },
  ];

  return (
    <section className="flex justify-center w-full px-6 py-10">
      <div className="w-full max-w-4xl">
        {/* ===== MOBILE (até lg): grid ===== */}
        <div className="grid gap-4 lg:hidden">
          {items.map((item) => (
            <div
              key={item.label}
              className="relative overflow-hidden rounded-xl shadow-2xl"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-56 object-cover"
              />

              {/* legenda sempre visível no mobile (melhor UX) */}
              <div className="absolute inset-x-0 bottom-0 bg-black/65 backdrop-blur-lg px-4 py-3">
                <span className="text-white font-semibold uppercase tracking-wide text-lg">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ===== DESKTOP (lg+): leque ===== */}
        <div className="relative hidden lg:flex w-full h-80 items-center justify-center group">
          {/* CARD 1 */}
          <div
            className="
              absolute w-72 h-48 lg:w-75 lg:h-50
              rounded-xl overflow-hidden shadow-2xl
              transition-all duration-500 ease-out
              -translate-x-16 -rotate-6 scale-[0.98]
              group-hover:-translate-x-40 group-hover:rotate-[-14deg]
              hover:scale-[1.08] hover:z-30
            "
          >
            <img
              src={items[0].src}
              alt={items[0].alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div
              className="
                absolute inset-0 flex items-center justify-center
                bg-black/70 backdrop-blur-lg
                opacity-0 hover:opacity-100
                transition-all duration-300
              "
            >
              <span className="text-white font-semibold uppercase tracking-wide">
                {items[0].label}
              </span>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="
              absolute w-72 h-48 lg:w-75 lg:h-50
              rounded-xl overflow-hidden shadow-2xl
              transition-all duration-500 ease-out
              z-20 hover:scale-[1.08] hover:z-30
            "
          >
            <img
              src={items[1].src}
              alt={items[1].alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div
              className="
                absolute inset-0 flex items-center justify-center
                bg-black/70 backdrop-blur-lg
                opacity-0 hover:opacity-100
                transition-all duration-300
              "
            >
              <span className="text-white font-semibold uppercase tracking-wide">
                {items[1].label}
              </span>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="
              absolute w-72 h-48 lg:w-75 lg:h-50
              rounded-xl overflow-hidden shadow-2xl
              transition-all duration-500 ease-out
              translate-x-16 rotate-6 scale-[0.98]
              group-hover:translate-x-40 group-hover:rotate-12
              hover:scale-[1.08] hover:z-30
            "
          >
            <img
              src={items[2].src}
              alt={items[2].alt}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div
              className="
                absolute inset-0 flex items-center justify-center
                bg-black/70 backdrop-blur-lg
                opacity-0 hover:opacity-100
                transition-all duration-300
              "
            >
              <span className="text-white font-semibold uppercase tracking-wide">
                {items[2].label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
