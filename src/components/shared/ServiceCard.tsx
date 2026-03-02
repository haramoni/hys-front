/* eslint-disable @typescript-eslint/no-explicit-any */
export type ServiceCardProps = {
  servicos: {
    foto: any;
    descricao: string;
  }[];
};

export function ServiceCard({ servicos }: ServiceCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {servicos.map((servico) => (
        <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:scale-110 transition-transform duration-300 border border-white/10 hover:border-primary/70 hover:shadow-[0_0_18px_rgba(244,183,197,0.55)]">
          {servico.foto}
          <p className="mt-2 text-2xl font-medium text-primary teste">
            {servico.descricao}
          </p>
        </div>
      ))}
    </div>
  );
}
