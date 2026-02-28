import { ServiceCard, type ServiceCardProps } from "./shared/ServiceCard";

export function Servicos() {
  const servicos: ServiceCardProps["servicos"] = [
    {
      foto: "src/assets/display.png",
      descricao: "Display",
    },
    {
      foto: "src/assets/marcenaria.png",
      descricao: "Marcenaria",
    },
    {
      foto: "src/assets/tapecaria.png",
      descricao: "Tapeçaria",
    },
    {
      foto: "src/assets/eletrica.png",
      descricao: "Eletrica",
    },
    {
      foto: "src/assets/locacao-moveis.png",
      descricao: "Locação de Móveis",
    },

    {
      foto: "src/assets/paisagismo.png",
      descricao: "Paisagismo",
    },
    {
      foto: "src/assets/pintura.png",
      descricao: "Pintura",
    },
    {
      foto: "src/assets/limpeza.png",
      descricao: "Limpeza",
    },
  ];

  return (
    <div
      id="servicos"
      className="flex flex-col mx-auto max-w-6xl md:px-10 lg:px-12 py-14 px-12"
    >
      <h2 className="text-3xl font-bold tracking-wide ">SERVIÇOS </h2>
      <div className="mt-3 h-px w-full bg-black/10" />

      <ServiceCard servicos={servicos} />
    </div>
  );
}
