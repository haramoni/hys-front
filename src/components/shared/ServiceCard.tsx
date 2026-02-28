export type ServiceCardProps = {
  servicos: {
    foto: string;
    descricao: string;
  }[];
};

export function ServiceCard({ servicos }: ServiceCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {servicos.map((servico) => (
        <div
          key={servico.foto}
          className="
        group overflow-hidden rounded-xl
        bg-white/5 backdrop-blur-md
        border border-white/10
        transition-all duration-500 ease-out
        hover:scale-[1.05] hover:shadow-2xl hover:border-white/30
        flex flex-col justify-center items-center
      "
        >
          {/* Imagem */}
          <div className="overflow-hidden">
            <img
              src={servico.foto}
              alt={servico.descricao}
              className="
            w-full h-50 object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-110
            scale-[1.1]
          "
            />
          </div>

          {/* Overlay Gradiente */}
          <div
            className="
          absolute inset-0
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
          />

          {/* Texto */}
          <div
            className="
          px-5 py-4
          absolute bottom-0
          text-black
          transform translate-y-4
          group-hover:translate-y-0 group-hover:opacity-100
          transition-all duration-500
        "
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              {servico.descricao}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
