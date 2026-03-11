// src/data/portfolio.ts
export type CarouselItem = { src: string; title: string };

export const portfolioCarousels: Record<string, CarouselItem[]> = {
  Atlas: [
    { src: "/atlas1.jpg", title: "Atlas" },
    { src: "/atlas2.jpg", title: "Atlas" },
    { src: "/atlas3.jpg", title: "Atlas" },
  ],
  Azul: [
    { src: "/azul1.jpg", title: "Azul - Linhas Aéreas" },
    { src: "/azul2.jpg", title: "Azul - Linhas Aéreas" },
    { src: "/azul3.jpg", title: "Azul - Linhas Aéreas" },
  ],
  CBB: [
    { src: "/cbb1.jpg", title: "CBB" },
    { src: "/cbb2.jpg", title: "CBB" },
    { src: "/cbb3.jpg", title: "CBB" },
  ],
  Ethera: [
    { src: "/ethera.jpg", title: "Ethera" },
    { src: "/ethera1.jpg", title: "Ethera" },
    { src: "/ethera3.jpg", title: "Ethera" },
  ],
  HSI: [
    { src: "/hsi1.jpg", title: "HSI" },
    { src: "/hsi2.jpg", title: "HSI" },
    { src: "/hsi3.jpg", title: "HSI" },
  ],
  ICI: [
    { src: "/ici1.jpeg", title: "ICI" },
    { src: "/ici2.jpeg", title: "ICI" },
    { src: "/ici3.jpeg", title: "ICI" },
  ],
  Madcrill: [
    { src: "/madcrill1.jpg", title: "Madcrill" },
    { src: "/madcrill2.jpg", title: "Madcrill" },
    { src: "/madcrill3.jpg", title: "Madcrill" },
    { src: "/madcrill4.jpg", title: "Madcrill" },
  ],
  Mentos: [
    { src: "/mentos1.jpg", title: "Mentos" },
    { src: "/mentos2.jpg", title: "Mentos" },
    { src: "/mentos3.jpg", title: "Mentos" },
  ],
  Munila: [
    { src: "/munila1.jpg", title: "Munila" },
    { src: "/munila2.jpg", title: "Munila" },
    { src: "/munila3.jpg", title: "Munila" },
    { src: "/munila4.jpg", title: "Munila" },
  ],
  Singular: [
    { src: "/singular1.jpg", title: "Singular" },
    { src: "/singular2.jpg", title: "Singular" },
    { src: "/singular3.jpg", title: "Singular" },
  ],
};
