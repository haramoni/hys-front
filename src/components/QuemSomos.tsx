import { PortfolioFan } from "./shared/PortfolionFan";

export function QuemSomos() {
  return (
    <section className="bg-background-light pt-14">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <h2 className="text-3xl font-bold tracking-wide">QUEM SOMOS</h2>

            <div className="mt-3 h-px w-full bg-black/10" />

            <p className="mt-6 max-w-xl text-black/70 leading-relaxed">
              Somos especialistas na criação de stands incríveis para feiras e
              eventos.
              <br />
              Parceiros dedicados das agências e empresas, unimos design,
              qualidade e pontualidade.
            </p>
          </div>

          <PortfolioFan />
        </div>
      </div>
    </section>
  );
}
