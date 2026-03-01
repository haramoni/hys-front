import { ServiceCard, type ServiceCardProps } from "./shared/ServiceCard";

export function Servicos() {
  const servicos: ServiceCardProps["servicos"] = [
    {
      foto: "/display.png",
      descricao: "Display",
    },
    {
      foto: "/marcenaria.png",
      descricao: "Marcenaria",
    },
    {
      foto: "/tapecaria.png",
      descricao: "Tapeçaria",
    },
    {
      foto: "/eletrica.png",
      descricao: "Eletrica",
    },
    {
      foto: "/locacao-moveis.png",
      descricao: "Locação de Móveis",
    },

    {
      foto: "/paisagismo.png",
      descricao: "Paisagismo",
    },
    {
      foto: "/pintura.png",
      descricao: "Pintura",
    },
    {
      foto: "/limpeza.png",
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
