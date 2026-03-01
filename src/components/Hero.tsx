import heroImage from "/copia.jpg";
import { WhatsButton } from "./shared/WhatsButton";

export function Hero() {
  return (
    <section
      className="relative py-16 text-white flex items-center bg-cover h-screen"
      style={{ backgroundImage: `url(${heroImage})` }}
      id="inicio"
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent" />

      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-primary">Stands</span> que vendem.
          </h1>

          <p className="text-white/80 mb-8 text-lg font-medium">
            EXPERIÊNCIAS QUE MARCAM.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsButton />
          </div>
        </div>
      </div>
    </section>
  );
}
