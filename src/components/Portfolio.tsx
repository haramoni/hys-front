import { PortfolioCarousel } from "./shared/PortfolioCarousel";

export function Portfolio() {
  return (
    <div className="bg-background bg-linear-to-r from-background to-black">
      <div
        className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12 py-14"
        id="portfolio"
      >
        <h2 className="text-3xl font-bold tracking-wide text-white">
          NOSSO PORTFÓLIO
        </h2>
        <h5 className="text-white">Alguns dos nossos projetos realizados:</h5>
        <PortfolioCarousel />
      </div>
      <div className="h-0.5 w-full bg-white/10" />
    </div>
  );
}
