import {
  Armchair,
  Birdhouse,
  BrushCleaning,
  LeafyGreen,
  Paintbrush,
  ShelvingUnit,
  Zap,
} from "lucide-react";
import { ServiceCard, type ServiceCardProps } from "./shared/ServiceCard";
import { PiNeedle } from "react-icons/pi";

export function Servicos() {
  const servicos: ServiceCardProps["servicos"] = [
    {
      foto: <ShelvingUnit size={40} />,
      descricao: "Display",
    },
    {
      foto: <Birdhouse size={40} />,
      descricao: "Marcenaria",
    },
    {
      foto: <PiNeedle size={40} />,
      descricao: "Tapeçaria",
    },
    {
      foto: <Zap size={40} />,
      descricao: "Elétrica",
    },
    {
      foto: <Armchair size={40} />,
      descricao: "Locação de Móveis",
    },

    {
      foto: <LeafyGreen size={40} />,
      descricao: "Paisagismo",
    },
    {
      foto: <Paintbrush size={40} />,
      descricao: "Pintura",
    },
    {
      foto: <BrushCleaning size={40} />,
      descricao: "Limpeza",
    },
  ];

  return (
    <div
      id="servicos"
      className="flex flex-col mx-auto max-w-6xl md:px-10 lg:px-12 py-14 px-12 gap-5"
    >
      <h2 className="text-3xl font-bold tracking-wide ">SERVIÇOS </h2>

      <ServiceCard servicos={servicos} />
    </div>
  );
}
