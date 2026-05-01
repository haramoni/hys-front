// src/data/portfolio.ts
export type CarouselItem = { src: string; title: string };

export const portfolioCarousels: Record<string, CarouselItem[]> = {
  Atlas: [
    { src: "/atlas1.webp", title: "Atlas" },
    { src: "/atlas2.webp", title: "Atlas" },
    { src: "/atlas3.webp", title: "Atlas" },
  ],
  Azul: [
    { src: "/azul1.webp", title: "Azul - Linhas Aéreas" },
    { src: "/azul2.webp", title: "Azul - Linhas Aéreas" },
    { src: "/azul3.webp", title: "Azul - Linhas Aéreas" },
  ],
  CBB: [
    { src: "/cbb1.webp", title: "CBB" },
    { src: "/cbb2.webp", title: "CBB" },
    { src: "/cbb3.webp", title: "CBB" },
  ],
  Ethera: [
    { src: "/ethera.webp", title: "Ethera" },
    { src: "/ethera1.webp", title: "Ethera" },
    { src: "/ethera3.webp", title: "Ethera" },
  ],
  HSI: [
    { src: "/hsi1.webp", title: "HSI" },
    { src: "/hsi2.webp", title: "HSI" },
    { src: "/hsi3.webp", title: "HSI" },
  ],
  ICI: [
    { src: "/ici1.webp", title: "ICI" },
    { src: "/ici2.webp", title: "ICI" },
    { src: "/ici3.webp", title: "ICI" },
  ],
  Madcrill: [
    { src: "/madcrill1.webp", title: "Madcrill" },
    { src: "/madcrill2.webp", title: "Madcrill" },
    { src: "/madcrill3.webp", title: "Madcrill" },
    { src: "/madcrill4.webp", title: "Madcrill" },
  ],
  Mentos: [
    { src: "/mentos1.webp", title: "Mentos" },
    { src: "/mentos2.webp", title: "Mentos" },
    { src: "/mentos3.webp", title: "Mentos" },
  ],
  Munila: [
    { src: "/munila1.webp", title: "Munila" },
    { src: "/munila2.webp", title: "Munila" },
    { src: "/munila3.webp", title: "Munila" },
    { src: "/munila4.webp", title: "Munila" },
  ],
  Singular: [
    { src: "/singular1.webp", title: "Singular" },
    { src: "/singular2.webp", title: "Singular" },
    { src: "/singular3.webp", title: "Singular" },
  ],
};
