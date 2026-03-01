import { ServiceCard, type ServiceCardProps } from "./shared/ServiceCard";

export function Servicos() {
  const servicos: ServiceCardProps["servicos"] = [
    {
      foto: "assets/display.png",
      descricao: "Display",
    },
    {
      foto: "assets/marcenaria.png",
      descricao: "Marcenaria",
    },
    {
      foto: "assets/tapecaria.png",
      descricao: "Tapeçaria",
    },
    {
      foto: "assets/eletrica.png",
      descricao: "Eletrica",
    },
    {
      foto: "assets/locacao-moveis.png",
      descricao: "Locação de Móveis",
    },

    {
      foto: "assets/paisagismo.png",
      descricao: "Paisagismo",
    },
    {
      foto: "assets/pintura.png",
      descricao: "Pintura",
    },
    {
      foto: "assets/limpeza.png",
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
