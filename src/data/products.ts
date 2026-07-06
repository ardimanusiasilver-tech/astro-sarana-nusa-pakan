export interface Product {
  index: number;
  title: string;
  image: string;
  desc: string;
  offset?: boolean;
}

export const products: Product[] = [
  {
    index: 1,
    title: "Canola Pro 42 ( A )",
    image: "/produk/Canola a.jpeg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Cocok untuk suplementasi ruminansia dan unggas.",
    offset: false,
  },
  {
    index: 2,
    title: "Canola Pro 38 ( B )",
    image: "/produk/Canola b.jpeg",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Alternatif sumber protein nabati dengan profil nutrisi kompetitif.",
    offset: true,
  },
  {
    index: 3,
    title: "Canola Meal Type B",
    image: "/produk/Canola b.jpeg",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Alternatif sumber protein nabati dengan profil nutrisi kompetitif.",
    offset: true,
  },
  {
    index: 4,
    title: "Canola Meal Type B",
    image: "/produk/Canola b.jpeg",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Alternatif sumber protein nabati dengan profil nutrisi kompetitif.",
    offset: true,
  },
];
